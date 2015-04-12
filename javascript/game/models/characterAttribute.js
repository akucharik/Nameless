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
    
	var CharacterAttributeModel = Backbone.Model.extend({
		defaults: {
            description: '',
            displayName: '',
            key: '',
            name: '',
            // values
            learnedValue: 0,
            maxValue: constants.character.ATTRIBUTE_MAX_VALUE,
            maxStartValue: 0,
            minValue: constants.character.ATTRIBUTE_MIN_VALUE,
            startValue: constants.character.DEFAULT_ATTRIBUTE_VALUE
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