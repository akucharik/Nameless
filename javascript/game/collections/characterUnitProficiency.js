define([
	// libraries
    'backbone',
    // game
    'game/constants',
    // models
    'models/characterUnitProficiency'
], function(
    // libraries
    Backbone,
    // game
    constants,
    // models
    CharacterUnitProficiencyModel
) {
    
	var CharacterUnitProficiencyCollection = Backbone.Collection.extend({
        
        initialize: function (models) {
            if (!models) {
                for (var unitProficiency in constants.character.unitProficiency) {
                    this.add(new CharacterUnitProficiencyModel({ 
                        key: unitProficiency
                    }));
                }
            }
        },
        
        model: CharacterUnitProficiencyModel
        
	});
	
	return CharacterUnitProficiencyCollection;
});