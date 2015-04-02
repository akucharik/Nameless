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
            associatedAttributeKey: '',
            cost: 0,
            description: '',
            enabled: false,
            key: '',
            name: '',
            requiredAttributePoints: 0,
            value: 0
		},
        
        initialize: function (options) {
            var skill = constants.character.skill[this.get('key')]
            
            this.set({
                associatedAttributeKey: skill.ASSOCIATED_ATTRIBUTE_KEY,
                cost: skill.COST,
                description: skill.DESCRIPTION,
                name: skill.NAME, 
                requiredAttributePoints: skill.REQUIRED_ATTRIBUTE_POINTS
            });
        }

	});
	
	return CharacterSkillModel;
});