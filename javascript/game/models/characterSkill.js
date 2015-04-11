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
            level: '',
            name: '',
            requiredAttributePoints: 0,
            // values
            attributeValue: 0,
            bonusValue: 0,
            learnedValue: 0,
            maxValue: 0
		},
        
        initialize: function (options) {
            var skill = constants.character.skill[this.get('key')]
            
            this.set({
                associatedAttributeKey: skill.ASSOCIATED_ATTRIBUTE_KEY,
                cost: skill.COST,
                description: skill.DESCRIPTION,
                level: skill.LEVEL,
                name: skill.NAME, 
                requiredAttributePoints: skill.REQUIRED_ATTRIBUTE_POINTS
            });
        },
        
        getValue: function () {
            var value = this.get('attributeValue') + this.get('bonusValue') + this.get('learnedValue');
            
            return value < this.get('maxValue') ? value : this.get('maxValue');
        }

	});
	
	return CharacterSkillModel;
});