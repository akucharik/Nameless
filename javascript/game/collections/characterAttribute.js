define([
	// libraries
    'backbone',
    // game
    'game/config',
    // models
    'models/characterAttribute'
], function(
    // libraries
    Backbone,
    // game
    config,
    // models
    CharacterAttributeModel
) {
    
	var CharacterAttributeCollection = Backbone.Collection.extend({
        
        initialize: function (models) {
            if (!models) {
                for (var attribute in config.character.attributes) {
                    this.add(new CharacterAttributeModel({ 
                        key: attribute
                    }));
                }
            }
        },
        
        model: CharacterAttributeModel
        
	});
	
	return CharacterAttributeCollection;
});