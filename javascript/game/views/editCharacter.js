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
    'views/editCharacterAttribute',
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
    EditCharacterAttributeView,
    CharacterSkillView
) {

	var EditCharacterView = Backbone.View.extend({
		
		initialize: function (options) {
            this.options = options;
            this.template = _.template($(this.options.template).html());
            this.$el.html(this.template(this.model.toJSON()));
            
            this.character = this.model.get('newCharacter');
            
            this.$name = this.$('#name');
            
            this.strSkillViews = [];
            this.intSkillViews = [];
            this.chrSkillViews = [];
            
            // create attribute views
            this.character.get('attributes').each(function (attribute) {
                var attributeView = new EditCharacterAttributeView({
                    character: this.character,
                    model: attribute,
                    tagName: 'li',
                    template: '#editCharacterAttributeTemplate'
                });
                this.$('#attributes').append(attributeView.el);
            }, this);
            
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
            
            return this;
        },
        
        events: {
            'click #back': 'back',
            'click #save': 'save'
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