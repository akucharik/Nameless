define([
    // libraries
	'backbone',
    // game
    'game/constants',
    // collections
    'collections/character',
    // models
    'models/character'
], function(
    // libraries
    Backbone,
    // game
    constants,
    // collections
    CharacterCollection,
    // models
    CharacterModel
) {
    
	var HomeModel = Backbone.Model.extend({
		defaults: {
            // States
            playState: constants.play.state.DEAD,
            state: constants.home.state.MAIN_MENU,
            
            // Create/Edit character
            editCharacterSource: null,
            
            // Characters
            savedCharacters: new CharacterCollection([]),
            
            // Games
            savedGames: new Backbone.Collection([], {})
		}

	});
	
	return HomeModel;
});