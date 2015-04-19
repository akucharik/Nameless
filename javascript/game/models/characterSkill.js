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
    
	var CharacterSkillModel = Backbone.Model.extend({
		defaults: {
            associatedAttributeKey: '',
            cost: 0,
            description: '',
            enabled: false,
            key: '',
            levelKey: '',
            name: '',
            requiredAttributePoints: 0,
            // values
            attributeValue: 0,
            bonusValue: 0,
            learnedValue: 0,
            maxValue: 0
		},
        
        initialize: function (options) {
            var skill = config.character.skills[this.get('key')]
            
            this.set({
                associatedAttributeKey: skill.associatedAttributeKey,
                cost: skill.cost,
                description: skill.description,
                levelKey: skill.levelKey,
                name: skill.name, 
                requiredAttributePoints: skill.requiredAttributePoints
            });
        },
        
        getValue: function () {
            var value = this.get('attributeValue') + this.get('learnedValue') + this.get('bonusValue');
            
            return value < this.get('maxValue') ? value : this.get('maxValue');
        }

	});
	
	return CharacterSkillModel;
});