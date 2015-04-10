define([
    // libraries
	'backbone',
    // game
    'game/constants'
], function(
    // libraries
    Backbone,
    // game
    constants
) {
    
	var CharacterUnitProficiencyModel = Backbone.Model.extend({
		defaults: {
            associatedAttributeKey: '',
            description: '',
            enabled: false,
            key: '',
            maxValue: 0,
            name: '',
            requiredAttributePoints: 0,
            value: 0
		},
        
        initialize: function (options) {
            var unitProficiency = constants.character.unitProficiency[this.get('key')]
            
            this.set({
                associatedAttributeKey: unitProficiency.ASSOCIATED_ATTRIBUTE_KEY,
                description: unitProficiency.DESCRIPTION,
                name: unitProficiency.NAME, 
                requiredAttributePoints: unitProficiency.REQUIRED_ATTRIBUTE_POINTS
            });
        }

	});
	
	return CharacterUnitProficiencyModel;
});