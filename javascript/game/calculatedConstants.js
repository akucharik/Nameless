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
                    DEFAULT_STR: constants.character.DEFAULT_ATTRIBUTE_VALUE + 2,
                    DEFAULT_INT: constants.character.DEFAULT_ATTRIBUTE_VALUE - 2,
                    DEFAULT_CHR: constants.character.DEFAULT_ATTRIBUTE_VALUE,
                    STR_MAX: constants.character.ATTRIBUTE_MAX,
                    INT_MAX: constants.character.DEFAULT_ATTRIBUTE_MAX - 2,
                    CHR_MAX: constants.character.DEFAULT_ATTRIBUTE_MAX,
                    AVAILABLE_ATTRIBUTE_POINTS: constants.character.DEFAULT_AVAILABLE_ATTRIBUTE_POINTS - 1
                },
                intelligence: {
                    DEFAULT_STR: constants.character.DEFAULT_ATTRIBUTE_VALUE - 2,
                    DEFAULT_INT: constants.character.DEFAULT_ATTRIBUTE_VALUE + 2,
                    DEFAULT_CHR: constants.character.DEFAULT_ATTRIBUTE_VALUE,
                    STR_MAX: constants.character.DEFAULT_ATTRIBUTE_MAX - 2,
                    INT_MAX: constants.character.ATTRIBUTE_MAX,
                    CHR_MAX: constants.character.DEFAULT_ATTRIBUTE_MAX,
                    AVAILABLE_ATTRIBUTE_POINTS: constants.character.DEFAULT_AVAILABLE_ATTRIBUTE_POINTS - 1
                },
                charisma: {
                    DEFAULT_STR: constants.character.DEFAULT_ATTRIBUTE_VALUE - 1,
                    DEFAULT_INT: constants.character.DEFAULT_ATTRIBUTE_VALUE - 1,
                    DEFAULT_CHR: constants.character.DEFAULT_ATTRIBUTE_VALUE + 2,
                    STR_MAX: constants.character.DEFAULT_ATTRIBUTE_MAX - 1,
                    INT_MAX: constants.character.DEFAULT_ATTRIBUTE_MAX - 1,
                    CHR_MAX: constants.character.ATTRIBUTE_MAX,
                    AVAILABLE_ATTRIBUTE_POINTS: constants.character.DEFAULT_AVAILABLE_ATTRIBUTE_POINTS - 1
                },
                average: {
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