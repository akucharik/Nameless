define([
    'config/characterAttributes',
    'config/characterUnit'
], function(
    characterAttributes,
    characterUnit
) {
    
    var characterUnits = {
        foot: {
            name: 'Foot',
            associatedAttributeKey: characterAttributes.strength.key,
            description: '',
            key: 'foot',
            levelKey: characterUnit.levels.level1.key,
            order: 0,
            requiredAttributePoints: 0
        },
        bow: {
            name: 'Bow',
            associatedAttributeKey: characterAttributes.strength.key,
            description: '',
            key: 'bow',
            levelKey: characterUnit.levels.level2.key,
            order: 1,
            requiredAttributePoints: 0
        },
        horse: {
            name: 'Horse',
            associatedAttributeKey: characterAttributes.strength.key,
            description: '',
            key: 'horse',
            levelKey: characterUnit.levels.level3.key,
            order: 2,
            requiredAttributePoints: 0
        }
    };
    
	return characterUnits;
});