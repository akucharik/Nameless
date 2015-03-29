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
            maxValue: constants.character.DEFAULT_ATTRIBUTE_MAX_VALUE,
            minValue: constants.character.ATTRIBUTE_MIN_VALUE,
            name: '',
            value: constants.character.DEFAULT_ATTRIBUTE_VALUE
		},
        
        initialize: function (options) {
            var attribute = constants.character.attribute[this.get('key')];
            
            this.set({
                description: attribute.DESCRIPTION,
                displayName: attribute.DISPLAY_NAME,
                name: attribute.NAME
            });
        }

	});
	
	return CharacterAttributeModel;
});