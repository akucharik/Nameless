define([
	// libraries
    'controller',
    // game
    'game/constants',
    'game/characterClasses',
    'game/eventLog'
], function(
    // libraries
    Controller,
    // game
    constants,
    characterClasses,
    eventLog
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
                }, {
                    silent: true
                });
            }, this);
            
            this.model.set('availableAttributePoints', this.characterClass.get('availableAttributePointsStartValue'));
            this.model.get('skills').forEach(this.updateSkill, this);
            this.model.get('unitProficiencies').forEach(this.updateUnitProficiency, this);
        },
        
        onAttributeChange: function (attribute, options) {
            eventLog.add({ message: attribute.get('name') + (attribute.get('startValue') > attribute.previous('startValue') ? ' increased' : ' decreased') + ' by ' + Math.abs(attribute.get('startValue') - attribute.previous('startValue'))});
            
            this.model.get('unitProficiencies').where({ associatedAttributeKey: attribute.get('key') }).forEach(this.updateUnitProficiency, this);
            this.model.get('skills').where({ associatedAttributeKey: attribute.get('key') }).forEach(this.updateSkill, this);
        },
        
        // skills
        updateSkill: function (skill) {
            var associatedAttribute = this.model.get('attributes').findWhere({ key: skill.get('associatedAttributeKey') });
            
            skill.set({
                enabled: associatedAttribute.getValue() >= skill.get('requiredAttributePoints') ? true : false,
                maxValue: this.calculateSkillMaxValue(skill, associatedAttribute, this.characterClass),
                attributeValue: this.calculateSkillValue(skill, associatedAttribute, this.characterClass)
            });
        },
        
        calculateSkillMaxValue: function (skill, associatedAttribute, characterClass) {
            var calculatedValue = this.getSkillMaxValueSkillLevelModifier(skill.get('level'), associatedAttribute) 
                                + this.getProficiencyCharacterClassModifier(characterClass, associatedAttribute, constants.character.skillValue.maxValue.characterClassModifier.positive, constants.character.skillValue.maxValue.characterClassModifier.negative) 
                                + skill.get('bonusValue');
            
            return this.getBoundedValue(calculatedValue, constants.character.SKILL_MAX_VALUE, constants.character.SKILL_MIN_VALUE);
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
        
        calculateSkillValue: function (skill, associatedAttribute, characterClass) {
            var calculatedValue = this.getSkillValueSkillLevelModifier(skill.get('level'), associatedAttribute) 
                                + this.getProficiencyCharacterClassModifier(characterClass, associatedAttribute, constants.character.skillValue.value.characterClassModifier.positive, constants.character.skillValue.value.characterClassModifier.negative) 
                                + skill.get('bonusValue');
            
            return this.getBoundedValue(calculatedValue, constants.character.SKILL_MAX_VALUE, constants.character.SKILL_MIN_VALUE);
        },
        
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
        
        // unit proficiencies
        updateUnitProficiency: function (unitProficiency) {
            var associatedAttribute = this.model.get('attributes').findWhere({ key: unitProficiency.get('associatedAttributeKey') });
            
            unitProficiency.set({
                enabled: associatedAttribute.getValue() >= unitProficiency.get('requiredAttributePoints') ? true : false,
                maxValue: this.calculateUnitProficiencyMaxValue(unitProficiency, associatedAttribute, this.characterClass),
                attributeValue: this.calculateUnitProficiencyValue(unitProficiency, associatedAttribute, this.characterClass)
            });
        },
        
        calculateUnitProficiencyMaxValue: function (unitProficiency, associatedAttribute, characterClass) {
            var calculatedValue = unitProficiency.get('maxValues')[associatedAttribute.getValue()] 
                                + this.getProficiencyCharacterClassModifier(characterClass, associatedAttribute, constants.character.unitProficiencyValue.maxValue.characterClassModifier.positive, constants.character.unitProficiencyValue.maxValue.characterClassModifier.negative) 
                                + unitProficiency.get('bonusValue');
            
            return this.getBoundedValue(calculatedValue, constants.character.UNIT_PROFICIENCY_MAX_VALUE, constants.character.UNIT_PROFICIENCY_MIN_VALUE);
        },
        
        calculateUnitProficiencyValue: function (unitProficiency, associatedAttribute, characterClass) {
            var calculatedValue = unitProficiency.get('values')[associatedAttribute.getValue()] 
                                + this.getProficiencyCharacterClassModifier(characterClass, associatedAttribute, constants.character.unitProficiencyValue.value.characterClassModifier.positive, constants.character.unitProficiencyValue.value.characterClassModifier.negative) 
                                + unitProficiency.get('bonusValue');
            
            return this.getBoundedValue(calculatedValue, constants.character.UNIT_PROFICIENCY_MAX_VALUE, constants.character.UNIT_PROFICIENCY_MIN_VALUE);
        },
        
        getBoundedValue: function (value, maxValue, minValue) {
            if (value <= maxValue && value >= minValue) {
                 return value;
            }
            else if (value > maxValue) {
                 return maxValue;
            }
            else {
                 return minValue;
            }
        },
        
        getProficiencyCharacterClassModifier: function (characterClass, associatedAttribute, positiveModifier, negativeModifier) {
            if (characterClass.get('associatedAttributeKey') === associatedAttribute.get('key')) {
                return positiveModifier;
            }
            else if (characterClass.get('key') === constants.character.characterClass.average.KEY) {
                return 0;
            }
            else {
                return negativeModifier;
            }
        }
        
	});
	
	return CharacterController;
});