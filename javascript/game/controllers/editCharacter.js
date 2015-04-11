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

	var EditCharacterController = Controller.extend({
		
		initialize: function () {
            this.characterClass = characterClasses.findWhere({ key: this.model.get('characterClass') });
            this.listenTo(this.model, 'change:characterClass', this.onCharacterClassChange);
            this.listenTo(this.model.get('attributes'), 'change:value', this.onAttributeChange);
		},
        
        onAttributeChange: function (attribute) {
            this.model.get('unitProficiencies').where({ associatedAttributeKey: attribute.get('key') }).forEach(this.updateUnitProficiency, this);
            this.model.get('skills').where({ associatedAttributeKey: attribute.get('key') }).forEach(this.updateSkill, this);
        },
        
        onCharacterClassChange: function (model) {
            this.characterClass = characterClasses.findWhere({ key: this.model.get('characterClass') });
            
            this.model.get('attributes').each(function (attribute) {
                attribute.set('maxValue', this.characterClass.get([attribute.get('key')] + 'MaxStartValue'));
                attribute.set('value', this.characterClass.get([attribute.get('key')] + 'StartValue'));
            }, this);
            
            this.model.set('availableAttributePoints', this.characterClass.get('availableAttributePointsStartValue'));
        },
        
        // unit proficiencies
        updateUnitProficiency: function (unitProficiency) {
            var attribute = this.model.get('attributes').findWhere({ key: unitProficiency.get('associatedAttributeKey') });
            
            unitProficiency.set({
                enabled: attribute.get('value') >= unitProficiency.get('requiredAttributePoints') ? true : false,
                maxValue: attribute.get('value') * 10,
                value: this.calculateUnitProficiencyValue(attribute, this.characterClass)
            });
        },
        
        calculateUnitProficiencyValue: function (attribute, characterClass) {
            return Math.floor(attribute.get('value') * this.getUnitProficiencyValueCharacterClassModifier(characterClass));
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
        },
        
        // skills
        updateSkill: function (skill) {
            var associatedAttribute = this.model.get('attributes').findWhere({ key: skill.get('associatedAttributeKey') });
            
            skill.set({
                enabled: associatedAttribute.get('value') >= skill.get('requiredAttributePoints') ? true : false,
                maxValue: associatedAttribute.get('value') * 10,
                value: this.calculateSkillValue(skill, associatedAttribute, this.characterClass)
            });
        },
        
        calculateSkillValue: function (skill, associatedAttribute, characterClass) {
            return Math.floor(associatedAttribute.get('value') * this.getSkillValueSkillLevelModifier(skill.get('level'))) + this.getSkillValueCharacterClassModifier(characterClass, associatedAttribute);
        },
        
        getSkillValueSkillLevelModifier: function (skillLevel) {
            switch (skillLevel) {
                case constants.character.skillLevel.level1.KEY:
                    return 4;
                case constants.character.skillLevel.level2.KEY:
                    return 3;
                case constants.character.skillLevel.level3.KEY:
                    return 2;
                case constants.character.skillLevel.level4.KEY:
                    return 1;
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
                return -10;
            }
        }
        
        
	});
	
	return EditCharacterController;
});