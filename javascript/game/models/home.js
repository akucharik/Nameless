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
    
	var HomeModel = Backbone.Model.extend({
		defaults: {
            playState: constants.play.state.DEAD,
            state: constants.home.state.MAIN_MENU,
            newCharacter: null,
            savedCharacters: new Backbone.Collection([], {
                model: CharacterModel,
                comparator: function (item) { 
                    return item.get('name').toLowerCase()
                }
            }),
            savedGames: new Backbone.Collection([], {})
		}

	});
	
	return HomeModel;
});