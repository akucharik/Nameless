define([
	// libraries
    'backbone',
    // game
    'game/config',
    // models
    'models/characterClass'
], function(
    // libraries
    Backbone,
    // game
    config,
    // models
    CharacterClassModel
) {
    
	var CharacterClassCollection = Backbone.Collection.extend({
        
        initialize: function (models) {
            if (!models) {
                for (var characterClass in config.character.characterClass) {
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