define([
    // libraries
	'backbone',
    // game
    'game/config'
], function(
    // libraries
    Backbone,
    // game
    config
) {
    
	var CharacterUnitProficiencyModel = Backbone.Model.extend({
		defaults: {
            associatedAttributeKey: '',
            description: '',
            enabled: false,
            key: '',
            name: '',
            levelKey: '',
            requiredAttributePoints: 0,
            // values
            attributeValue: 0,
            bonusValue: 0,
            learnedValue: 0,
            maxValue: 0
		},
        
        initialize: function (options) {
            var unitProficiency = config.character.units[this.get('key')]
            
            this.set({
                associatedAttributeKey: unitProficiency.associatedAttributeKey,
                description: unitProficiency.description,
                levelKey: unitProficiency.levelKey,
                name: unitProficiency.name, 
                requiredAttributePoints: unitProficiency.requiredAttributePoints//,
                //maxValues: unitProficiency.maxValues,
                //values: unitProficiency.values
            });
        },
        
        getValue: function () {
            var value = this.get('attributeValue') + this.get('learnedValue') + this.get('bonusValue');
            
            return value < this.get('maxValue') ? value : this.get('maxValue');
        }

	});
	
	return CharacterUnitProficiencyModel;
});