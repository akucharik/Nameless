define([
	// libraries
    'backbone',
    // game
    'game/constants',
    // models
    'models/characterAttribute'
], function(
    // libraries
    Backbone,
    // game
    constants,
    // models
    CharacterAttributeModel
) {
    
	var CharacterAttributeCollection = Backbone.Collection.extend({
        
        initialize: function (models) {
            if (!models) {
                for (var attribute in constants.character.attribute) {
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