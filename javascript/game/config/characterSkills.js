define([
    'config/characterAttributes',
    'config/characterSkill'
], function(
    characterAttributes,
    characterSkill
) {
    
    var characterSkills = {
        scare: {
            name: 'Scare',
            associatedAttributeKey: characterAttributes.strength.key,
            cost: characterSkill.levels.level1.cost,
            description: '',
            key: 'scare',
            levelKey: characterSkill.levels.level1.key,
            requiredAttributePoints: characterSkill.levels.level1.requiredAttributePoints
        },
        charge: {
            name: 'Charge',
            associatedAttributeKey: characterAttributes.strength.key,
            cost: characterSkill.levels.level2.cost,
            description: '',
            key: 'charge',
            levelKey: characterSkill.levels.level2.key,
            requiredAttributePoints: characterSkill.levels.level2.requiredAttributePoints
        },
        coordinate: {
            name: 'Coordinate',
            associatedAttributeKey: characterAttributes.strength.key,
            cost: characterSkill.levels.level3.cost,
            description: '',
            key: 'coordinate',
            levelKey: characterSkill.levels.level3.key,
            requiredAttributePoints: characterSkill.levels.level3.requiredAttributePoints
        },
        overpower: {
            name: 'Overpower',
            associatedAttributeKey: characterAttributes.strength.key,
            cost: characterSkill.levels.level4.cost,
            description: '',
            key: 'overpower',
            levelKey: characterSkill.levels.level4.key,
            requiredAttributePoints: characterSkill.levels.level4.requiredAttributePoints
        },
        spy: {
            name: 'Spy',
            associatedAttributeKey: characterAttributes.intelligence.key,
            cost: characterSkill.levels.level1.cost,
            description: '',
            key: 'spy',
            levelKey: characterSkill.levels.level1.key,
            requiredAttributePoints: characterSkill.levels.level1.requiredAttributePoints
        },
        confuse: {
            name: 'Confuse',
            associatedAttributeKey: characterAttributes.intelligence.key,
            cost: characterSkill.levels.level2.cost,
            description: '',
            key: 'confuse',
            levelKey: characterSkill.levels.level2.key,
            requiredAttributePoints: characterSkill.levels.level2.requiredAttributePoints
        },
        medic: {
            name: 'Medic',
            associatedAttributeKey: characterAttributes.intelligence.key,
            cost: characterSkill.levels.level3.cost,
            description: '',
            key: 'medic',
            levelKey: characterSkill.levels.level3.key,
            requiredAttributePoints: characterSkill.levels.level3.requiredAttributePoints
        },
        predict: {
            name: 'Predict',
            associatedAttributeKey: characterAttributes.intelligence.key,
            cost: characterSkill.levels.level4.cost,
            description: '',
            key: 'predict',
            levelKey: characterSkill.levels.level4.key,
            requiredAttributePoints: characterSkill.levels.level4.requiredAttributePoints
        },
        rally: {
            name: 'Rally',
            associatedAttributeKey: characterAttributes.charisma.key,
            cost: characterSkill.levels.level1.cost,
            description: '',
            key: 'rally',
            levelKey: characterSkill.levels.level1.key,
            requiredAttributePoints: characterSkill.levels.level1.requiredAttributePoints
        },
        recruit: {
            name: 'Recruit',
            associatedAttributeKey: characterAttributes.charisma.key,
            cost: characterSkill.levels.level2.cost,
            description: '',
            key: 'recruit',
            levelKey: characterSkill.levels.level2.key,
            requiredAttributePoints: characterSkill.levels.level2.requiredAttributePoints,
        },
        command: {
            name: 'Command',
            associatedAttributeKey: characterAttributes.charisma.key,
            cost: characterSkill.levels.level3.cost,
            description: '',
            key: 'command',
            levelKey: characterSkill.levels.level3.key,
            requiredAttributePoints: characterSkill.levels.level3.requiredAttributePoints,
        },
        turn: {
            name: 'Turn',
            associatedAttributeKey: characterAttributes.charisma.key,
            cost: characterSkill.levels.level4.cost,
            description: '',
            key: 'turn',
            levelKey: characterSkill.levels.level4.key,
            requiredAttributePoints: characterSkill.levels.level4.requiredAttributePoints,
        }
    };
    
	return characterSkills;
});