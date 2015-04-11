define([
    // libraries
	'backbone',
    'jquery',
    // game
    'game/constants',
    'game/characterClasses',
    // models
    'models/character',
    // controllers
    'controllers/editCharacter'
], function(
    // libraries
    Backbone,
    $,
    // game
    constants,
    characterClasses,
    // models
    CharacterModel,
    // controllers
    EditCharacterController
) {

	var EditCharacterClassView = Backbone.View.extend({
		
		initialize: function (options) {
            this.template = _.template($(options.template).html());
            this.$el.html(this.template(this.model.toJSON()));
            
            this.character = new CharacterModel({
                type: constants.character.type.CUSTOM
            });
            
            this.editCharacterController = new EditCharacterController({
                model: this.character
            });
		},
        
        events: {
            'click [data-character-class]': 'selectCharacterClass',
            'click #mainMenu': 'onMainMenuClick',
            'click #characters': 'onCharactersClick',
        },
        
        onCharactersClick: function () {
            this.model.set('state', constants.home.state.CHARACTERS);
        },
        
        onMainMenuClick: function () {
            this.model.set('state', constants.home.state.MAIN_MENU);
        },
        
        remove: function () {
            this.editCharacterController.remove();
            Backbone.View.prototype.remove.call(this);
        },
        
        selectCharacterClass: function (event) {
            this.character.set('characterClass', event.target.dataset.characterClass);
            this.model.set('editCharacter', this.character);
            this.model.set('state', constants.home.state.EDIT_CHARACTER);
        }
        
	});
	
	return EditCharacterClassView;
});