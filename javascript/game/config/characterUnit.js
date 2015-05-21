define(function() {
    
    var characterUnit = {
        levels: {
            level1: {
                key: 'level1',
                maxValues: [  0,  10,  20,  30,  40,  50,  60,  70,  80,  90, 100],
                values:    [-10,  -5,   0,   5,  10,  15,  20,  25,  30,  35,  40]
            },
            level2: {
                key: 'level2',
                maxValues: [  0,   0,  10,  20,  30,  40,  50,  60,  70,  80,  90],
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
    
	return characterUnit;
});