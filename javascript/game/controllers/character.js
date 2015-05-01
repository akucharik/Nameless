define([
	// libraries
    'controller',
    // game
    'game/config',
    'game/constants',
    'game/eventLog',
    'game/gameObjects'
], function(
    // libraries
    Controller,
    // game
    config,
    constants,
    eventLog,
    gameObjects
) {

	var CharacterController = Controller.extend({
		
		initialize: function () {
            this.characterClass = gameObjects.character.classes.findWhere({ key: this.model.get('characterClass') });
            this.listenTo(this.model, 'change:characterClass', this.onCharacterClassChange);
            this.listenTo(this.model, 'change', this.onChange);
            this.listenTo(this.model.get('attributes'), 'change', this.onAttributeChange);
		},
        
        onCharacterClassChange: function (model) {
            if (this.model.get('characterClass').length && this.model.get('characterClass').length > 0) {
                this.characterClass = gameObjects.character.classes.findWhere({ key: this.model.get('characterClass') });

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
            }
        },
        
        onChange: function () {
            var changedAttributes = this.model.changedAttributes()
            
            for (var attribute in changedAttributes) {
                eventLog.add({ message: '<span class="attribute">' + attribute + '</span>' + ' changed to ' + changedAttributes[attribute] });
            }
        },
        
        onAttributeChange: function (attribute) {
            eventLog.add({ message: '<span class="attribute">' + attribute.get('key') + '</span>' + (attribute.get('startValue') > attribute.previous('startValue') ? ' increased' : ' decreased') + ' by ' + Math.abs(attribute.get('startValue') - attribute.previous('startValue')) });
            
            //eventLog.add({ message: attribute.get('name') + (attribute.get('startValue') > attribute.previous('startValue') ? ' increased' : ' decreased') + ' by ' + Math.abs(attribute.get('startValue') - attribute.previous('startValue'))});
            
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
            var calculatedValue = this.getProficiencyLevelValue(config.character.skill.levels, skill.get('levelKey'), 'maxValues', associatedAttribute) 
                                + this.getProficiencyCharacterClassModifier(characterClass, associatedAttribute, config.character.skill.maxValue.characterClassModifier.positive, config.character.skill.maxValue.characterClassModifier.negative) 
                                + skill.get('bonusValue');
            
            return this.getBoundedValue(calculatedValue, config.character.skill.maxValue.value, config.character.skill.minValue.value);
        },
        
        calculateSkillValue: function (skill, associatedAttribute, characterClass) {
            var calculatedValue = this.getProficiencyLevelValue(config.character.skill.levels, skill.get('levelKey'), 'values', associatedAttribute) 
                                + this.getProficiencyCharacterClassModifier(characterClass, associatedAttribute, config.character.skill.value.characterClassModifier.positive, config.character.skill.value.characterClassModifier.negative) 
                                + skill.get('bonusValue');
            
            return this.getBoundedValue(calculatedValue, config.character.skill.maxValue.value, config.character.skill.minValue.value);
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
            var calculatedValue = this.getProficiencyLevelValue(config.character.unit.levels, unitProficiency.get('levelKey'), 'maxValues', associatedAttribute) 
                                + this.getProficiencyCharacterClassModifier(characterClass, associatedAttribute, config.character.unit.maxValue.characterClassModifier.positive, config.character.unit.maxValue.characterClassModifier.negative) 
                                + unitProficiency.get('bonusValue');
            
            return this.getBoundedValue(calculatedValue, config.character.unit.maxValue.value, config.character.unit.minValue.value);
        },
        
        calculateUnitProficiencyValue: function (unitProficiency, associatedAttribute, characterClass) {
            var calculatedValue = this.getProficiencyLevelValue(config.character.unit.levels, unitProficiency.get('levelKey'), 'values', associatedAttribute) 
                                + this.getProficiencyCharacterClassModifier(characterClass, associatedAttribute, config.character.unit.value.characterClassModifier.positive, config.character.unit.value.characterClassModifier.negative)
                                + unitProficiency.get('bonusValue');
            
            return this.getBoundedValue(calculatedValue, config.character.unit.maxValue.value, config.character.unit.minValue.value);
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
        
        getProficiencyLevelValue: function (levels, levelKey, valuesKey, associatedAttribute) {
            for (var level in levels) {
                if (levels[level].key === levelKey) {
                    return levels[level][valuesKey][associatedAttribute.getValue()];
                }
            }
        },
        
        getProficiencyCharacterClassModifier: function (characterClass, associatedAttribute, positiveModifier, negativeModifier) {
            if (characterClass.get('associatedAttributeKey') === associatedAttribute.get('key')) {
                return positiveModifier;
            }
            else if (characterClass.get('key') === gameObjects.character.classes.findWhere({ key: 'average'}).get('key')) {
                return 0;
            }
            else {
                return negativeModifier;
            }
        }
        
	});
	
	return CharacterController;
});