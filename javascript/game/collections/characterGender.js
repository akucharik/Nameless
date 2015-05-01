define([
	// libraries
    'backbone',
    // game
    'game/config',
    // models
    'models/characterGender'
], function(
    // libraries
    Backbone,
    // game
    config,
    // models
    CharacterGenderModel
) {
    
	var CharacterGenderCollection = Backbone.Collection.extend({
        
        initialize: function (models) {
            if (!models) {
                for (var gender in config.character.gender) {
                    this.add(new CharacterGenderModel({ 
                        key: gender
                    }));
                }
            }
        },
        
        model: CharacterGenderModel
        
	});
	
	return CharacterGenderCollection;
});