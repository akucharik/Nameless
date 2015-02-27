define([
	'backbone',
    'constants',
    'collections/character',
    'models/character'
], function(
    Backbone,
    constants,
    CharacterCollection,
    CharacterModel
) {
    
	var HomeModel = Backbone.Model.extend({
		defaults: {
            playState: constants.play.state.DEAD,
            state: constants.home.state.MAIN_MENU,
            savedCharacters: new CharacterCollection([], {
                model: CharacterModel,
                comparator: function (item) { 
                    return item.get('name').toLowerCase()
                }
            }),
            savedGames: Backbone.Collection.extend({})
		}

	});
	
	return HomeModel;
});