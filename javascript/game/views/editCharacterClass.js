define([
    // libraries
	'backbone',
    'jquery',
    // game
    'game/constants',
    // controllers
    'controllers/character',
    // models
    'models/character'
], function(
    // libraries
    Backbone,
    $,
    // game
    constants,
    // controllers
    CharacterController,
    // models
    CharacterModel
) {

	var EditCharacterClassView = Backbone.View.extend({
		
		initialize: function (options) {
            this.template = _.template($(options.template).html());
            this.$el.html(this.template(this.model.toJSON()));
            
            this.character = new CharacterModel({
                type: constants.character.type.CUSTOM
            });
            
            this.characterController = new CharacterController({
                model: this.character
            });
		},
        
        cancel: function () {
            this.model.set('state', constants.home.state.MAIN_MENU);
        },
        
        events: {
            'click [data-character-class]': 'selectCharacterClass',
            'click #mainMenu': 'onMainMenuClick',
            'click #characters': 'onCharactersClick',
        },
        
        onMainMenuClick: function () {
            this.model.set('state', constants.home.state.MAIN_MENU);
        },
        
        onCharactersClick: function () {
            this.model.set('state', constants.home.state.CHARACTERS);
        },
        
        remove: function () {
            this.characterController.remove();
            Backbone.View.prototype.remove.call(this);
        },
        
        selectCharacterClass: function (event) {
            var attributes = this.character.get('attributes');
            var strength = attributes.findWhere({ name: 'Strength' });
            var intelligence = attributes.findWhere({ name: 'Intelligence' });
            var charisma = attributes.findWhere({ name: 'Charisma' });
            
            switch (event.target.dataset.characterClass) {
                case constants.character.class.average.KEY:
                    this.character.set('availableAttributePoints', constants.character.DEFAULT_AVAILABLE_ATTRIBUTE_POINTS);
                    break;
                case constants.character.class.soldier.KEY:
                    strength.set('maxValue', constants.character.ATTRIBUTE_MAX_VALUE);
                    strength.set('value', constants.character.DEFAULT_ATTRIBUTE_VALUE + 2);
                    intelligence.set('maxValue', constants.character.DEFAULT_ATTRIBUTE_MAX_VALUE - 1);
                    intelligence.set('value', constants.character.DEFAULT_ATTRIBUTE_VALUE - 1);
                    charisma.set('maxValue', constants.character.DEFAULT_ATTRIBUTE_MAX_VALUE - 1);
                    charisma.set('value', constants.character.DEFAULT_ATTRIBUTE_VALUE - 1);
                    this.character.set('availableAttributePoints', constants.character.DEFAULT_AVAILABLE_ATTRIBUTE_POINTS - 2);
                    break;
                case constants.character.class.genius.KEY:
                    strength.set('maxValue', constants.character.DEFAULT_ATTRIBUTE_MAX_VALUE - 1);
                    strength.set('value', constants.character.DEFAULT_ATTRIBUTE_VALUE - 1);
                    intelligence.set('maxValue', constants.character.ATTRIBUTE_MAX_VALUE);
                    intelligence.set('value', constants.character.DEFAULT_ATTRIBUTE_VALUE + 2);
                    charisma.set('maxValue', constants.character.DEFAULT_ATTRIBUTE_MAX_VALUE - 1);
                    charisma.set('value', constants.character.DEFAULT_ATTRIBUTE_VALUE - 1);
                    this.character.set('availableAttributePoints', constants.character.DEFAULT_AVAILABLE_ATTRIBUTE_POINTS - 2);
                    break;
                case constants.character.class.mesmer.KEY:
                    strength.set('maxValue', constants.character.DEFAULT_ATTRIBUTE_MAX_VALUE - 1);
                    strength.set('value', constants.character.DEFAULT_ATTRIBUTE_VALUE - 1);
                    intelligence.set('maxValue', constants.character.DEFAULT_ATTRIBUTE_MAX_VALUE - 1);
                    intelligence.set('value', constants.character.DEFAULT_ATTRIBUTE_VALUE - 1);
                    charisma.set('maxValue', constants.character.ATTRIBUTE_MAX_VALUE);
                    charisma.set('value', constants.character.DEFAULT_ATTRIBUTE_VALUE + 2);
                    this.character.set('availableAttributePoints', constants.character.DEFAULT_AVAILABLE_ATTRIBUTE_POINTS - 2);
                    break;
            }
            
            this.model.set('editCharacter', this.character);
            this.model.set('state', constants.home.state.EDIT_CHARACTER);
        }
        
	});
	
	return EditCharacterClassView;
});