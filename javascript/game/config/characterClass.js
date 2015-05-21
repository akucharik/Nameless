define([
    'config/characterAttribute',
    'config/characterAttributes'
], function(
    characterAttribute,
    characterAttributes
) {
    
    var characterClass = {
        average: {
            associatedAttributeKey: '',
            description: 'Well-rounded and adept at all skills, but lacks a truly outstanding strength.',
            key: 'average',
            name: 'Average',
            // attribute start values
            strength: {
                maxStartValue: characterAttribute.defaultMaxValue,
                startValue:    characterAttribute.defaultValue
            },
            intelligence: {
                maxStartValue: characterAttribute.defaultMaxValue,
                startValue:    characterAttribute.defaultValue
            },
            charisma: {
                maxStartValue: characterAttribute.defaultMaxValue,
                startValue:    characterAttribute.defaultValue
            },
            availableAttributePoints: {
                startValue:    characterAttribute.defaultAvailableAttributePoints
            }
        },
        soldier: {
            associatedAttributeKey: characterAttributes.strength.key,
            description: 'Highly skilled in the art of combat. A force to be reckoned with on the battlefield.',
            key: 'soldier',
            name: 'Soldier',
            // attribute start values
            strength: {
                maxStartValue: characterAttribute.defaultMaxValue + 2,
                startValue:    characterAttribute.defaultValue + 2
            },
            intelligence: {
                maxStartValue: characterAttribute.defaultMaxValue - 1,
                startValue:    characterAttribute.defaultValue - 1
            },
            charisma: {
                maxStartValue: characterAttribute.defaultMaxValue - 1,
                startValue:    characterAttribute.defaultValue - 1
            },
            availableAttributePoints: {
                startValue:    characterAttribute.defaultAvailableAttributePoints - 2
            }
        },
        genius: {
            associatedAttributeKey: characterAttributes.intelligence.key,
            description: 'Intellect is unmatched among peers. Strategies are highly successful and effective.',
            key: 'genius',
            name: 'Genius',
            // attribute start values
            strength: {
                maxStartValue: characterAttribute.defaultMaxValue - 1,
                startValue:    characterAttribute.defaultValue - 1
            },
            intelligence: {
                maxStartValue: characterAttribute.defaultMaxValue + 2,
                startValue:    characterAttribute.defaultValue + 2
            },
            charisma: {
                maxStartValue: characterAttribute.defaultMaxValue - 1,
                startValue:    characterAttribute.defaultValue - 1
            },
            availableAttributePoints: {
                startValue:    characterAttribute.defaultAvailableAttributePoints - 2
            }
        },
        mesmer: {
            associatedAttributeKey: characterAttributes.charisma.key,
            description: 'A magnetic personality that is convincing and extremely influential. Ideas are easily accepted, and others follow.',
            key: 'mesmer',
            name: 'Mesmer',
            // attribute start values
            strength: {
                maxStartValue: characterAttribute.defaultMaxValue - 1,
                startValue:    characterAttribute.defaultValue - 1
            },
            intelligence: {
                maxStartValue: characterAttribute.defaultMaxValue - 1,
                startValue:    characterAttribute.defaultValue - 1
            },
            charisma: {
                maxStartValue: characterAttribute.defaultMaxValue + 2,
                startValue:    characterAttribute.defaultValue + 2
            },
            availableAttributePoints: {
                startValue:    characterAttribute.defaultAvailableAttributePoints - 2
            }
        }
    };
    
	return characterClass;
});