define(function() {
    
    var characterSkill = {
        levels: {
            level1: {
                cost: 10,
                key: 'level1',
                requiredAttributePoints: 3,
                maxValues: [  0,  10,  20,  30,  40,  50,  60,  70,  80,  90, 100],
                values:    [  0,   0,   0,   5,  10,  15,  20,  25,  30,  35,  40]
            },
            level2: {
                cost: 20,
                key: 'level2',
                requiredAttributePoints: 5,
                maxValues: [  0,   0,  10,  20,  30,  40,  50,  60,  70,  80,  90],
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
    
	return characterSkill;
});