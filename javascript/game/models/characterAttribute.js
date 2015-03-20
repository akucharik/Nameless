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
            id: '',
            maxValue: constants.character.ATTRIBUTE_MAX_VALUE,
            minValue: constants.character.ATTRIBUTE_MIN_VALUE,
            name: '',
            value: constants.character.DEFAULT_ATTRIBUTE_VALUE
		}

	});
	
	return CharacterAttributeModel;
});