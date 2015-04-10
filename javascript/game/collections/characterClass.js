define([
	// libraries
    'backbone',
    // game
    'game/constants',
    // models
    'models/characterClass'
], function(
    // libraries
    Backbone,
    // game
    constants,
    // models
    CharacterClassModel
) {
    
	var CharacterClassCollection = Backbone.Collection.extend({
        
        initialize: function (models) {
            if (!models) {
                for (var characterClass in constants.character.characterClass) {
                    this.add(new CharacterClassModel({ 
                        key: characterClass
                    }));
                }
            }
        },
        
        model: CharacterClassModel
        
	});
	
	return CharacterClassCollection;
});