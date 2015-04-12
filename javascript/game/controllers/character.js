define([
	// libraries
    'controller',
    // game
    'game/constants',
    'game/characterClasses'
], function(
    // libraries
    Controller,
    // game
    constants,
    characterClasses
) {

	var CharacterController = Controller.extend({
		
		initialize: function () {
            this.characterClass = characterClasses.findWhere({ key: this.model.get('characterClass') });
            this.listenTo(this.model, 'change:characterClass', this.onCharacterClassChange);
            this.listenTo(this.model.get('attributes'), 'change', this.onAttributeChange);
		},
        
        onCharacterClassChange: function (model) {
            this.characterClass = characterClasses.findWhere({ key: this.model.get('characterClass') });
            
            this.model.get('attributes').each(function (attribute) {
                attribute.set({ 
                    maxStartValue: this.characterClass.get([attribute.get('key')] + 'MaxStartValue'),
                    startValue: this.characterClass.get([attribute.get('key')] + 'StartValue')
                });
            }, this);
            
            this.model.set('availableAttributePoints', this.characterClass.get('availableAttributePointsStartValue'));
        },
        
        onAttributeChange: function (attribute) {
            this.model.get('unitProficiencies').where({ associatedAttributeKey: attribute.get('key') }).forEach(this.updateUnitProficiency, this);
            this.model.get('skills').where({ associatedAttributeKey: attribute.get('key') }).forEach(this.updateSkill, this);
        },
        
        // skills
        updateSkill: function (skill) {
            var associatedAttribute = this.model.get('attributes').findWhere({ key: skill.get('associatedAttributeKey') });
            
            skill.set({
                enabled: associatedAttribute.getValue() >= skill.get('requiredAttributePoints') ? true : false,
                maxValue: this.calculateSkillMaxValue(skill, associatedAttribute, this.characterClass), // associatedAttribute.getValue() * 10,
                attributeValue: this.calculateSkillValue(skill, associatedAttribute, this.characterClass)
            });
        },
        
        calculateSkillMaxValue: function (skill, associatedAttribute, characterClass) {
            var calculatedValue = this.getSkillMaxValueSkillLevelModifier(skill.get('level'), associatedAttribute) + this.getSkillMaxValueCharacterClassModifier(characterClass, associatedAttribute) + skill.get('bonusValue');
            
            return calculatedValue < constants.character.SKILL_MAX_VALUE ? calculatedValue : constants.character.SKILL_MAX_VALUE ;
        },
        
        getSkillMaxValueSkillLevelModifier: function (skillLevel, associatedAttribute) {
            switch (skillLevel) {
                case constants.character.skillLevel.level1.KEY:
                    return constants.character.skillLevel.level1.maxValues[associatedAttribute.getValue()];
                case constants.character.skillLevel.level2.KEY:
                    return constants.character.skillLevel.level2.maxValues[associatedAttribute.getValue()];
                case constants.character.skillLevel.level3.KEY:
                    return constants.character.skillLevel.level3.maxValues[associatedAttribute.getValue()];
                case constants.character.skillLevel.level4.KEY:
                    return constants.character.skillLevel.level4.maxValues[associatedAttribute.getValue()];
            }
        },
        
        getSkillMaxValueCharacterClassModifier: function (characterClass, associatedAttribute) {
            if (characterClass.get('associatedAttributeKey') === associatedAttribute.get('key')) {
                return 20;
            }
            else if (characterClass.get('key') === constants.character.characterClass.average.KEY) {
                return 0;
            }
            else {
                return -10;
            }
        },
        
        calculateSkillValue: function (skill, associatedAttribute, characterClass) {
            var calculatedValue = this.getSkillValueSkillLevelModifier(skill.get('level'), associatedAttribute) + this.getSkillValueCharacterClassModifier(characterClass, associatedAttribute) + skill.get('bonusValue');
            
            return calculatedValue > constants.character.SKILL_MIN_VALUE ? calculatedValue : constants.character.SKILL_MIN_VALUE ;
            //return Math.floor(associatedAttribute.getValue() * 5) + this.getSkillValueCharacterClassModifier(characterClass, associatedAttribute);
        },
        
        //this.getSkillValueSkillLevelModifier(skill.get('level'))
        
        getSkillValueSkillLevelModifier: function (skillLevel, associatedAttribute) {
            switch (skillLevel) {
                case constants.character.skillLevel.level1.KEY:
                    return constants.character.skillLevel.level1.values[associatedAttribute.getValue()];
                case constants.character.skillLevel.level2.KEY:
                    return constants.character.skillLevel.level2.values[associatedAttribute.getValue()];
                case constants.character.skillLevel.level3.KEY:
                    return constants.character.skillLevel.level3.values[associatedAttribute.getValue()];
                case constants.character.skillLevel.level4.KEY:
                    return constants.character.skillLevel.level4.values[associatedAttribute.getValue()];
            }
        },
        
        getSkillValueCharacterClassModifier: function (characterClass, associatedAttribute) {
            if (characterClass.get('associatedAttributeKey') === associatedAttribute.get('key')) {
                return 10;
            }
            else if (characterClass.get('key') === constants.character.characterClass.average.KEY) {
                return 0;
            }
            else {
                return -5;
            }
        },
        
        // unit proficiencies
        updateUnitProficiency: function (unitProficiency) {
            var attribute = this.model.get('attributes').findWhere({ key: unitProficiency.get('associatedAttributeKey') });
            
            unitProficiency.set({
                enabled: attribute.getValue() >= unitProficiency.get('requiredAttributePoints') ? true : false,
                maxValue: attribute.getValue() * 10,
                attributeValue: this.calculateUnitProficiencyValue(attribute, this.characterClass)
            });
        },
        
        calculateUnitProficiencyValue: function (attribute, characterClass) {
            return Math.floor(attribute.getValue() * this.getUnitProficiencyValueCharacterClassModifier(characterClass));
        },
        
        getUnitProficiencyValueCharacterClassModifier: function (characterClass) {
            if (characterClass.get('key') === constants.character.characterClass.soldier.KEY) {
                return 3;
            }
            else if (characterClass.get('key') === constants.character.characterClass.average.KEY) {
                return 2;
            }
            else {
                return 1;
            }
        }
        
	});
	
	return CharacterController;
});