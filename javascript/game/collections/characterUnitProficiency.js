define([
	// libraries
    'backbone',
    // game
    'game/config',
    // models
    'models/characterUnitProficiency'
], function(
    // libraries
    Backbone,
    // game
    config,
    // models
    CharacterUnitProficiencyModel
) {
    
	var CharacterUnitProficiencyCollection = Backbone.Collection.extend({
        
        initialize: function (models) {
            if (!models) {
                for (var unit in config.character.units) {
                    this.add(new CharacterUnitProficiencyModel({ 
                        key: unit
                    }));
                }
            }
        },
        
        model: CharacterUnitProficiencyModel
        
	});
	
	return CharacterUnitProficiencyCollection;
});