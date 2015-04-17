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
            name: '',
            requiredAttributePoints: 0,
            // values
            attributeValue: 0,
            bonusValue: 0,
            learnedValue: 0,
            maxValue: 0
		},
        
        initialize: function (options) {
            var unitProficiency = constants.character.unitProficiency[this.get('key')]
            
            this.set({
                associatedAttributeKey: unitProficiency.ASSOCIATED_ATTRIBUTE_KEY,
                description: unitProficiency.DESCRIPTION,
                name: unitProficiency.NAME, 
                requiredAttributePoints: unitProficiency.REQUIRED_ATTRIBUTE_POINTS,
                maxValues: unitProficiency.MAX_VALUES,
                values: unitProficiency.VALUES
            });
        },
        
        getValue: function () {
            var value = this.get('attributeValue') + this.get('learnedValue') + this.get('bonusValue');
            
            return value < this.get('maxValue') ? value : this.get('maxValue');
        }

	});
	
	return CharacterUnitProficiencyModel;
});