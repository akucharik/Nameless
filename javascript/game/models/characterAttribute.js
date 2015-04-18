define([
    // libraries
	'backbone',
    // game
    'game/config',
    'game/constants'
], function(
    // libraries
    Backbone,
    // game
    config,
    constants
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
            var attribute = constants.character.attribute[this.get('key')];
            
            this.set({
                description: attribute.DESCRIPTION,
                displayName: attribute.DISPLAY_NAME,
                name: attribute.NAME
            });
        },
        
        getValue: function () {
            var value = this.get('startValue') + this.get('learnedValue');
            
            return value < this.get('maxValue') ? value : this.get('maxValue');
        }

	});
	
	return CharacterAttributeModel;
});