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
    
	var CharacterAttributeModel = Backbone.Model.extend({
		defaults: {
            description: '',
            displayName: '',
            key: '',
            name: '',
            // values
            learnedValue: 0,
            maxValue: config.character.attribute.maxValue,
            minValue: config.character.attribute.minValue,
            maxStartValue: 0,
            startValue: 0
		},
        
        initialize: function (options) {
            var attribute = config.character.attributes[this.get('key')];
            
            this.set({
                description: attribute.description,
                displayName: attribute.displayName,
                name: attribute.name
            });
        },
        
        getValue: function () {
            var value = this.get('startValue') + this.get('learnedValue');
            
            return value < this.get('maxValue') ? value : this.get('maxValue');
        }

	});
	
	return CharacterAttributeModel;
});