define([
	// libraries
    'controller',
    // game
    'game/constants'
], function(
    // libraries
    Controller,
    // game
    constants
) {

	var CharacterController = Controller.extend({
		
		initialize: function () {
            this.listenTo(this.model.get('attributes'), 'change:value', this.onAttributeChange);
		},
        
        onAttributeChange: function (attribute) {
            this.model.get('proficiencies').where({ associatedAttributeKey: attribute.get('key') }).forEach(this.updateProficiency, this);
            this.model.get('skills').where({ associatedAttributeKey: attribute.get('key') }).forEach(this.updateSkill, this);
        },
        
        updateProficiency: function (proficiency) {
            var attribute = this.model.get('attributes').findWhere({ key: proficiency.get('associatedAttributeKey') });
            
            proficiency.set({
                enabled: attribute.get('value') >= proficiency.get('requiredAttributePoints') ? true : false,
                maxValue: attribute.get('value') * 10,
                value: attribute.get('value')
            });
        },
        
        updateSkill: function (skill) {
            var attribute = this.model.get('attributes').findWhere({ key: skill.get('associatedAttributeKey') });
            
            skill.set({
                enabled: attribute.get('value') >= skill.get('requiredAttributePoints') ? true : false,
                maxValue: attribute.get('value') * 10,
                value: this.calculateSkillValue(skill, attribute)
            });
        },
        
        calculateSkillValue: function (skill, attribute) {
            if (attribute.get('maxValue') === constants.character.ATTRIBUTE_MAX_VALUE) {
                switch (skill.get('level')) {
                    case constants.character.skillLevel.level1.KEY:
                        return attribute.get('value') * 4 + 10;
                    case constants.character.skillLevel.level2.KEY:
                        return Math.floor(attribute.get('value') * 2 + 10);
                    case constants.character.skillLevel.level3.KEY:
                        return attribute.get('value') + 10;
                    case constants.character.skillLevel.level4.KEY:
                        return Math.floor(attribute.get('value') * 0 + 10);
                }
            }
            else {
                switch (skill.get('level')) {
                    case constants.character.skillLevel.level1.KEY:
                        return attribute.get('value') * 2;
                    case constants.character.skillLevel.level2.KEY:
                        return Math.floor(attribute.get('value') * 1.5);
                    case constants.character.skillLevel.level3.KEY:
                        return attribute.get('value');
                    case constants.character.skillLevel.level4.KEY:
                        return Math.floor(attribute.get('value') * 0.5);
                }
            }
            
            
        }
        
	});
	
	return CharacterController;
});