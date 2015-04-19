define([
    // libraries
	'backbone',
    'jquery',
    // game
    'game/constants',
    // controllers
    'controllers/character',
    // views
    'views/editCharacterAttribute',
    'views/editCharacterSkill',
    'views/editCharacterUnitProficiency'
], function(
    // libraries
    Backbone,
    $,
    // game
    constants,
    // controllers
    CharacterController,
    // views
    EditCharacterAttributeView,
    EditCharacterSkillView,
    EditCharacterUnitProficiencyView
) {

	var EditCharacterView = Backbone.View.extend({
		
		initialize: function (options) {
            this.template = _.template($(options.template).html());
            this.$el.html(this.template(this.model.toJSON()));
            
            this.$name = this.$('#name');
            this.$availableAttributePoints = this.$('#availableAttributePoints');
            this.$attributes = this.$('#attributes');
            this.$skills = this.$('#skills');
            this.$units = this.$('#units');
            
            this.character = this.model.get('editCharacter');
            this.characterController = new CharacterController({
                model: this.character
            });
            
            // create attribute views
            this.character.get('attributes').each(function (attribute) {
                var attributeView = new EditCharacterAttributeView({
                    character: this.character,
                    model: attribute,
                    tagName: 'li',
                    template: '#editCharacterAttributeTemplate'
                });
                this.$attributes.append(attributeView.render().el);
            }, this);
            
            // create skill views
            this.character.get('skills').forEach(function (skill) {
                var skillView = new EditCharacterSkillView({
                    model: skill,
                    tagName: 'li',
                    template: '#editCharacterSkillTemplate'
                });

                this.$skills.append(skillView.render().el);
            }, this);
            
            // create unit views
            this.character.get('unitProficiencies').forEach(function (unitProficiency) {
                var unitProficiencyView = new EditCharacterUnitProficiencyView({
                    model: unitProficiency,
                    tagName: 'li',
                    template: '#editCharacterUnitProficiencyTemplate'
                });

                this.$units.append(unitProficiencyView.render().el);
            }, this);
            
            this.listenTo(this.character, 'change:availableAttributePoints', this.render);
		},
        
        render: function () {
            this.$availableAttributePoints.html(this.character.get('availableAttributePoints'));
            
            return this;
        },
        
        events: {
            'click #back': 'back',
            'click #save': 'save'
        },
        
        back: function () {
            this.model.set('state', constants.home.state.EDIT_CHARACTER_CLASS);
        },
        
        remove: function () {
            this.characterController.remove();
            Backbone.View.prototype.remove.call(this);
        },
        
        save: function () {
            this.character.set('name', this.$name.val());
            this.model.get('savedCharacters').add(this.character);
            this.model.set('state', constants.home.state.CHARACTERS);
        }
        
	});
	
	return EditCharacterView;
});