define([
    // game
    'game/constants'
], function(
    // game
    constants
) {

    var calculatedConstants = {
        
        character: {
            type: {
                strength: {
                    associatedAttribute: constants.character.attribute.strength,
                    NAME: 'Soldier',
                    DEFAULT_STR: constants.character.DEFAULT_ATTRIBUTE_VALUE + 2,
                    DEFAULT_INT: constants.character.DEFAULT_ATTRIBUTE_VALUE - 1,
                    DEFAULT_CHR: constants.character.DEFAULT_ATTRIBUTE_VALUE - 1,
                    STR_MAX: constants.character.ATTRIBUTE_MAX,
                    INT_MAX: constants.character.DEFAULT_ATTRIBUTE_MAX - 1,
                    CHR_MAX: constants.character.DEFAULT_ATTRIBUTE_MAX - 1,
                    AVAILABLE_ATTRIBUTE_POINTS: constants.character.DEFAULT_AVAILABLE_ATTRIBUTE_POINTS - 2
                },
                intelligence: {
                    associatedAttribute: constants.character.attribute.intelligence,
                    NAME: 'Genius',
                    DEFAULT_STR: constants.character.DEFAULT_ATTRIBUTE_VALUE - 1,
                    DEFAULT_INT: constants.character.DEFAULT_ATTRIBUTE_VALUE + 2,
                    DEFAULT_CHR: constants.character.DEFAULT_ATTRIBUTE_VALUE - 1,
                    STR_MAX: constants.character.DEFAULT_ATTRIBUTE_MAX -1,
                    INT_MAX: constants.character.ATTRIBUTE_MAX,
                    CHR_MAX: constants.character.DEFAULT_ATTRIBUTE_MAX -1,
                    AVAILABLE_ATTRIBUTE_POINTS: constants.character.DEFAULT_AVAILABLE_ATTRIBUTE_POINTS - 2
                },
                charisma: {
                    associatedAttribute: constants.character.attribute.charisma,
                    NAME: 'Mesmer',
                    DEFAULT_STR: constants.character.DEFAULT_ATTRIBUTE_VALUE - 1,
                    DEFAULT_INT: constants.character.DEFAULT_ATTRIBUTE_VALUE - 1,
                    DEFAULT_CHR: constants.character.DEFAULT_ATTRIBUTE_VALUE + 2,
                    STR_MAX: constants.character.DEFAULT_ATTRIBUTE_MAX - 1,
                    INT_MAX: constants.character.DEFAULT_ATTRIBUTE_MAX - 1,
                    CHR_MAX: constants.character.ATTRIBUTE_MAX,
                    AVAILABLE_ATTRIBUTE_POINTS: constants.character.DEFAULT_AVAILABLE_ATTRIBUTE_POINTS - 2
                },
                average: {
                    associatedAttribute: null,
                    NAME: 'Average',
                    DEFAULT_STR: constants.character.DEFAULT_ATTRIBUTE_VALUE,
                    DEFAULT_INT: constants.character.DEFAULT_ATTRIBUTE_VALUE,
                    DEFAULT_CHR: constants.character.DEFAULT_ATTRIBUTE_VALUE,
                    STR_MAX: constants.character.DEFAULT_ATTRIBUTE_MAX,
                    INT_MAX: constants.character.DEFAULT_ATTRIBUTE_MAX,
                    CHR_MAX: constants.character.DEFAULT_ATTRIBUTE_MAX,
                    AVAILABLE_ATTRIBUTE_POINTS: constants.character.DEFAULT_AVAILABLE_ATTRIBUTE_POINTS
                }
            }
        }
        
    }
    
	return calculatedConstants;
});