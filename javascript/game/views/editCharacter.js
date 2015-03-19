define([
    // libraries
	'backbone',
    'jquery',
    // game
    'game/constants',
    'game/calculatedConstants',
    // models
    'models/character',
    // views
    'views/characterSkill'
], function(
    // libraries
    Backbone,
    $,
    // game
    constants,
    calculatedConstants,
    // models
    CharacterModel,
    // views
    CharacterSkillView
) {

	var EditCharacterView = Backbone.View.extend({
		
		initialize: function (options) {
            this.options = options;
            this.template = _.template($(this.options.template).html());
            this.$el.html(this.template(this.model.toJSON()));
            
            this.character = this.model.get('newCharacter');
            
            this.$name = this.$('#name');
            this.$strIncrease = this.$('#strIncrease');
            this.$strDecrease = this.$('#strDecrease');
            this.$intIncrease = this.$('#intIncrease');
            this.$intDecrease = this.$('#intDecrease');
            this.$chrIncrease = this.$('#chrIncrease');
            this.$chrDecrease = this.$('#chrDecrease');
            
            this.strSkillViews = [];
            this.intSkillViews = [];
            this.chrSkillViews = [];
            
            // create skill views
            this.model.get('characterSkills').each(function (skill) {
                var skillView = new CharacterSkillView({
                    characterModel: this.character,
                    model: skill,
                    tagName: 'li',
                    template: '#characterSkillTemplate'
                });
                
                switch (skill.get('associatedAttribute').NAME) {
                    case constants.character.attribute.strength.NAME:
                        this.strSkillViews.push(skillView);
                        this.$('#strSkills').append(skillView.el);
                        break;
                    case constants.character.attribute.intelligence.NAME:
                        this.intSkillViews.push(skillView);
                        this.$('#intSkills').append(skillView.el);
                        break;
                    case constants.character.attribute.charisma.NAME:
                        this.chrSkillViews.push(skillView);
                        this.$('#chrSkills').append(skillView.el);
                        break;
                }
            }, this);
            
            this.listenTo(this.character, 'change', this.render);
		},
        
        render: function () {
            this.$('#availableAttributePoints').html(this.character.get('availableAttributePoints'));
            this.$('#str').html(this.character.get('str'));
            this.$('#strMax').html(this.character.get('strMax'));
            this.$('#int').html(this.character.get('int'));
            this.$('#intMax').html(this.character.get('intMax'));
            this.$('#chr').html(this.character.get('chr'));
            this.$('#chrMax').html(this.character.get('chrMax'));
            
            this.character.get('str') === this.character.get('strMax') || this.character.get('availableAttributePoints') === 0 ? this.$strIncrease.prop('disabled', true) : this.$strIncrease.prop('disabled', false);
            this.character.get('str') === constants.character.ATTRIBUTE_MIN ? this.$strDecrease.prop('disabled', true) : this.$strDecrease.prop('disabled', false);
            this.character.get('int') === this.character.get('intMax') || this.character.get('availableAttributePoints') === 0 ? this.$intIncrease.prop('disabled', true) : this.$intIncrease.prop('disabled', false);
            this.character.get('int') === constants.character.ATTRIBUTE_MIN ? this.$intDecrease.prop('disabled', true) : this.$intDecrease.prop('disabled', false);
            this.character.get('chr') === this.character.get('chrMax') || this.character.get('availableAttributePoints') === 0 ? this.$chrIncrease.prop('disabled', true) : this.$chrIncrease.prop('disabled', false);
            this.character.get('chr') === constants.character.ATTRIBUTE_MIN ? this.$chrDecrease.prop('disabled', true) : this.$chrDecrease.prop('disabled', false);
            
            return this;
        },
        
        events: {
            'click [data-attribute-change]': 'changeAttribute',
            'click #back': 'back',
            'click #save': 'save'
        },
        
        changeAttribute: function (event) {
            var targetData = event.target.dataset;
            
            if (targetData.attributeChange === '+') {
                if (this.character.get(targetData.attribute) < constants.character.ATTRIBUTE_MAX && 
                    this.character.get('availableAttributePoints') > 0) {
                    this.character.set(targetData.attribute, this.character.get(targetData.attribute) + 1)
                    this.character.set('availableAttributePoints', this.character.get('availableAttributePoints') - 1);
                }
            }
            else {
                if (this.character.get(targetData.attribute) > constants.character.ATTRIBUTE_MIN) {
                    this.character.set(targetData.attribute, this.character.get(targetData.attribute) - 1)
                    this.character.set('availableAttributePoints', this.character.get('availableAttributePoints') + 1);
                }
            }
        },
        
        back: function () {
            this.model.set('state', constants.home.state.CHARACTER_TYPE);
        },
        
        save: function () {
            this.character.set('name', this.$name.val());
            this.model.get('savedCharacters').add(this.character);
            this.model.set('state', constants.home.state.MAIN_MENU);
        }
        
	});
	
	return EditCharacterView;
});