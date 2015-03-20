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
    
	var CharacterSkillModel = Backbone.Model.extend({
		defaults: {
            associatedAttribute: null,
            cost: 0,
            description: '',
            enabled: false,
            name: '',
            requiredAttributePoint: 0,
            value: 0
		}

	});
	
	return CharacterSkillModel;
});