define([
    // game
    'game/constants'
], function(
    // game
    constants
) {

    var config = {
        character: {}
    };
    
    config.character.attribute = {
        maxValue: 10,
        minValue: 1,
        // defaults
        defaultMaxValue: 7,
        defaultValue: 4,
        defaultAvailableAttributePoints: 7,
    };
    
    config.character.characterClass = {
        average: {
            associatedAttributeKey: '',
            description: 'Well-rounded and adept at all skills, but lacks a truly outstanding strength.',
            key: 'average',
            name: 'Average',
            // attribute start values
            strength: {
                maxStartValue: config.character.attribute.defaultMaxValue,
                startValue:    config.character.attribute.defaultValue
            },
            intelligence: {
                maxStartValue: config.character.attribute.defaultMaxValue,
                startValue:    config.character.attribute.defaultValue
            },
            charisma: {
                maxStartValue: config.character.attribute.defaultMaxValue,
                startValue:    config.character.attribute.defaultValue
            },
            availableAttributePoints: {
                startValue:    config.character.attribute.defaultAvailableAttributePoints
            }
        },
        soldier: {
            associatedAttributeKey: constants.character.attribute.strength.KEY,
            description: 'Highly skilled in the art of combat. A force to be reckoned with on the battlefield.',
            key: 'soldier',
            name: 'Soldier',
            // attribute start values
            strength: {
                maxStartValue: config.character.attribute.defaultMaxValue + 2,
                startValue:    config.character.attribute.defaultValue + 2
            },
            intelligence: {
                maxStartValue: config.character.attribute.defaultMaxValue - 1,
                startValue:    config.character.attribute.defaultValue - 1
            },
            charisma: {
                maxStartValue: config.character.attribute.defaultMaxValue - 1,
                startValue:    config.character.attribute.defaultValue - 1
            },
            availableAttributePoints: {
                startValue:    config.character.attribute.defaultAvailableAttributePoints - 2
            }
        },
        genius: {
            associatedAttributeKey: constants.character.attribute.intelligence.KEY,
            description: 'Intellect is unmatched among peers. Strategies are highly successful and effective.',
            key: 'genius',
            name: 'Genius',
            // attribute start values
            strength: {
                maxStartValue: config.character.attribute.defaultMaxValue - 1,
                startValue:    config.character.attribute.defaultValue - 1
            },
            intelligence: {
                maxStartValue: config.character.attribute.defaultMaxValue + 2,
                startValue:    config.character.attribute.defaultValue + 2
            },
            charisma: {
                maxStartValue: config.character.attribute.defaultMaxValue - 1,
                startValue:    config.character.attribute.defaultValue - 1
            },
            availableAttributePoints: {
                startValue:    config.character.attribute.defaultAvailableAttributePoints - 2
            }
        },
        mesmer: {
            associatedAttributeKey: constants.character.attribute.charisma.KEY,
            description: 'A magnetic personality that is convincing and extremely influential. Ideas are easily accepted, and others follow.',
            key: 'mesmer',
            name: 'Mesmer',
            // attribute start values
            strength: {
                maxStartValue: config.character.attribute.defaultMaxValue - 1,
                startValue:    config.character.attribute.defaultValue - 1
            },
            intelligence: {
                maxStartValue: config.character.attribute.defaultMaxValue - 1,
                startValue:    config.character.attribute.defaultValue - 1
            },
            charisma: {
                maxStartValue: config.character.attribute.defaultMaxValue + 2,
                startValue:    config.character.attribute.defaultValue + 2
            },
            availableAttributePoints: {
                startValue:    config.character.attribute.defaultAvailableAttributePoints - 2
            }
        }
    };
    
    config.character.skill = {
        levels: {
            level1: {
                cost: 10,
                key: 'level1',
                requiredAttributePoints: 4,
                maxValues: [ 10,  20,  30,  40,  50,  60,  70,  80,  90, 100, 100],
                values:    [  0,   0,   0,   5,  10,  15,  20,  25,  30,  35,  40]
            },
            level2: {
                cost: 20,
                key: 'level2',
                requiredAttributePoints: 5,
                maxValues: [  0,  10,  20,  30,  40,  50,  60,  70,  80,  90, 100],
                values:    [  0,   0,   0,   0,   0,   5,  10,  15,  20,  25,  30]
            },
            level3: {
                cost: 30,
                key: 'level3',
                requiredAttributePoints: 7,
                maxValues: [  0,   0,   0,  10,  20,  30,  40,  50,  60,  70,  80],
                values:    [  0,   0,   0,   0,   0,   0,   0,   5,  10,  15,  20]
            },
            level4: {
                cost: 40,
                key: 'level4',
                requiredAttributePoints: 9,
                maxValues: [  0,   0,   0,   0,  10,  20,  30,  40,  50,  60,  70],
                values:    [  0,   0,   0,   0,   0,   0,   0,   0,   0,   5,  10]
            }
        },
        maxValue: {
            characterClassModifier: {
                positive: 10,
                negative: -10
            },
            value: 100
        },
        minValue: {
            value: 0
        },
        value: {
            characterClassModifier: {
                positive: 5,
                negative: -5
            },
        }
    };
    
    config.character.skills = {
        scare: {
            name: 'Scare',
            associatedAttributeKey: constants.character.attribute.strength.KEY,
            cost: config.character.skill.levels.level1.cost,
            description: '',
            key: 'scare',
            levelKey: config.character.skill.levels.level1.key,
            requiredAttributePoints: config.character.skill.levels.level1.requiredAttributePoints
        },
        charge: {
            name: 'Charge',
            associatedAttributeKey: constants.character.attribute.strength.KEY,
            cost: config.character.skill.levels.level2.cost,
            description: '',
            key: 'charge',
            levelKey: config.character.skill.levels.level2.key,
            requiredAttributePoints: config.character.skill.levels.level2.requiredAttributePoints
        },
        coordinate: {
            name: 'Coordinate',
            associatedAttributeKey: constants.character.attribute.strength.KEY,
            cost: config.character.skill.levels.level3.cost,
            description: '',
            key: 'coordinate',
            levelKey: config.character.skill.levels.level3.key,
            requiredAttributePoints: config.character.skill.levels.level3.requiredAttributePoints
        },
        overpower: {
            name: 'Overpower',
            associatedAttributeKey: constants.character.attribute.strength.KEY,
            cost: config.character.skill.levels.level4.cost,
            description: '',
            key: 'overpower',
            levelKey: config.character.skill.levels.level4.key,
            requiredAttributePoints: config.character.skill.levels.level4.requiredAttributePoints
        },
        spy: {
            name: 'Spy',
            associatedAttributeKey: constants.character.attribute.intelligence.KEY,
            cost: config.character.skill.levels.level1.cost,
            description: '',
            key: 'spy',
            levelKey: config.character.skill.levels.level1.key,
            requiredAttributePoints: config.character.skill.levels.level1.requiredAttributePoints
        },
        confuse: {
            name: 'Confuse',
            associatedAttributeKey: constants.character.attribute.intelligence.KEY,
            cost: config.character.skill.levels.level2.cost,
            description: '',
            key: 'confuse',
            levelKey: config.character.skill.levels.level2.key,
            requiredAttributePoints: config.character.skill.levels.level2.requiredAttributePoints
        },
        medic: {
            name: 'Medic',
            associatedAttributeKey: constants.character.attribute.intelligence.KEY,
            cost: config.character.skill.levels.level3.cost,
            description: '',
            key: 'medic',
            levelKey: config.character.skill.levels.level3.key,
            requiredAttributePoints: config.character.skill.levels.level3.requiredAttributePoints
        },
        predict: {
            name: 'Predict',
            associatedAttributeKey: constants.character.attribute.intelligence.KEY,
            cost: config.character.skill.levels.level4.cost,
            description: '',
            key: 'predict',
            levelKey: config.character.skill.levels.level4.key,
            requiredAttributePoints: config.character.skill.levels.level4.requiredAttributePoints
        },
        rally: {
            name: 'Rally',
            associatedAttributeKey: constants.character.attribute.charisma.KEY,
            cost: config.character.skill.levels.level1.cost,
            description: '',
            key: 'rally',
            levelKey: config.character.skill.levels.level1.key,
            requiredAttributePoints: config.character.skill.levels.level1.requiredAttributePoints
        },
        recruit: {
            name: 'Recruit',
            associatedAttributeKey: constants.character.attribute.charisma.KEY,
            cost: config.character.skill.levels.level2.cost,
            description: '',
            key: 'recruit',
            levelKey: config.character.skill.levels.level2.key,
            requiredAttributePoints: config.character.skill.levels.level2.requiredAttributePoints,
        },
        command: {
            name: 'Command',
            associatedAttributeKey: constants.character.attribute.charisma.KEY,
            cost: config.character.skill.levels.level3.cost,
            description: '',
            key: 'command',
            levelKey: config.character.skill.levels.level3.key,
            requiredAttributePoints: config.character.skill.levels.level3.requiredAttributePoints,
        },
        turn: {
            name: 'Turn',
            associatedAttributeKey: constants.character.attribute.charisma.KEY,
            cost: config.character.skill.levels.level4.cost,
            description: '',
            key: 'turn',
            levelKey: config.character.skill.levels.level4.key,
            requiredAttributePoints: config.character.skill.levels.level4.requiredAttributePoints,
        }
    };
    
    config.character.unit = {
        levels: {
            level1: {
                key: 'level1',
                maxValues: [ 10,  20,  30,  40,  50,  60,  70,  80,  90, 100, 100],
                values:    [-10,  -5,   0,   5,  10,  15,  20,  25,  30,  35,  40]
            },
            level2: {
                key: 'level2',
                maxValues: [  0,  10,  20,  30,  40,  50,  60,  70,  80,  90, 100],
                values:    [-20, -15, -10,  -5,   0,   5,  10,  15,  20,  25,  30]
            },
            level3: {
                key: 'level3',
                maxValues: [  0,   0,   0,  10,  20,  30,  40,  50,  60,  70,  80],
                values:    [-30, -25, -20, -15, -10,  -5,   0,   5,  10,  15,  20]
            },
        },
        maxValue: {
            characterClassModifier: {
                positive: 10,
                negative: 0
            },
            value: 100
        },
        minValue: {
            value: 0
        },
        value: {
            characterClassModifier: {
                positive: 5,
                negative: -5
            },
        }
    };
    
    config.character.units = {
        foot: {
            name: 'Foot',
            associatedAttributeKey: constants.character.attribute.strength.KEY,
            description: '',
            key: 'foot',
            levelKey: config.character.unit.levels.level1.key,
            order: 0,
            requiredAttributePoints: 0
        },
        bow: {
            name: 'Bow',
            associatedAttributeKey: constants.character.attribute.strength.KEY,
            description: '',
            key: 'bow',
            levelKey: config.character.unit.levels.level2.key,
            order: 1,
            requiredAttributePoints: 0
        },
        horse: {
            name: 'Horse',
            associatedAttributeKey: constants.character.attribute.strength.KEY,
            description: '',
            key: 'horse',
            levelKey: config.character.unit.levels.level3.key,
            order: 2,
            requiredAttributePoints: 0
        }
    };
    
	return config;
});