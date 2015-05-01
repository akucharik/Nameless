define([
    // libraries
	'backbone',
    // game
    'game/constants',
    // models
    'models/character'
], function(
    // libraries
    Backbone,
    // game
    constants,
    // models
    CharacterModel
) {
    
	var EditCharacterModel = Backbone.Model.extend({
		defaults: {
            character: new CharacterModel(),
            gameModel: null,
            isDirty: false,
            savedCharacters: null,
            source: null,
            state: constants.editCharacter.state.DETAILS
		}

	});
	
	return EditCharacterModel;
});