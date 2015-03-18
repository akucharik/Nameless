define([
    // libraries
	'backbone',
    // game
    'game/constants',
    // models
    'models/character',
    'models/skill'
], function(
    // libraries
    Backbone,
    // game
    constants,
    // models
    CharacterModel,
    SkillModel
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
            savedGames: new Backbone.Collection([], {}),
            skills: new Backbone.Collection([], {
                model: SkillModel
            })
		}

	});
	
	return HomeModel;
});