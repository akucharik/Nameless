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
                    NAME: 'Soldier',
                    AVAILABLE_ATTRIBUTE_POINTS: constants.character.DEFAULT_AVAILABLE_ATTRIBUTE_POINTS - 2,
                    ID: 'soldier',
                    attribute: {
                        strength: { 
                            DEFAULT_VALUE: constants.character.DEFAULT_ATTRIBUTE_VALUE + 2,
                            DEFAULT_MAX_VALUE: constants.character.ATTRIBUTE_MAX_VALUE
                        },
                        intelligence: { 
                            DEFAULT_VALUE: constants.character.DEFAULT_ATTRIBUTE_VALUE - 1,
                            DEFAULT_MAX_VALUE: constants.character.DEFAULT_ATTRIBUTE_MAX_VALUE - 1
                        },
                        charisma: { 
                            DEFAULT_VALUE: constants.character.DEFAULT_ATTRIBUTE_VALUE - 1,
                            DEFAULT_MAX_VALUE: constants.character.DEFAULT_ATTRIBUTE_MAX_VALUE - 1
                        }
                    }
                },
                intelligence: {
                    NAME: 'Genius',
                    AVAILABLE_ATTRIBUTE_POINTS: constants.character.DEFAULT_AVAILABLE_ATTRIBUTE_POINTS - 2,
                    ID: 'genius',
                    attribute: {
                        strength: { 
                            DEFAULT_VALUE: constants.character.DEFAULT_ATTRIBUTE_VALUE - 1,
                            DEFAULT_MAX_VALUE: constants.character.DEFAULT_ATTRIBUTE_MAX_VALUE -1
                        },
                        intelligence: { 
                            DEFAULT_VALUE: constants.character.DEFAULT_ATTRIBUTE_VALUE + 2,
                            DEFAULT_MAX_VALUE: constants.character.ATTRIBUTE_MAX_VALUE
                        },
                        charisma: { 
                            DEFAULT_VALUE: constants.character.DEFAULT_ATTRIBUTE_VALUE - 1,
                            DEFAULT_MAX_VALUE: constants.character.DEFAULT_ATTRIBUTE_MAX_VALUE - 1
                        }
                    }
                },
                charisma: {
                    NAME: 'Mesmer',
                    AVAILABLE_ATTRIBUTE_POINTS: constants.character.DEFAULT_AVAILABLE_ATTRIBUTE_POINTS - 2,
                    ID: 'mesmer',
                    attribute: {
                        strength: { 
                            DEFAULT_VALUE: constants.character.DEFAULT_ATTRIBUTE_VALUE - 1,
                            DEFAULT_MAX_VALUE: constants.character.DEFAULT_ATTRIBUTE_MAX_VALUE -1
                        },
                        intelligence: { 
                            DEFAULT_VALUE: constants.character.DEFAULT_ATTRIBUTE_VALUE - 1,
                            DEFAULT_MAX_VALUE: constants.character.DEFAULT_ATTRIBUTE_MAX_VALUE - 1
                        },
                        charisma: { 
                            DEFAULT_VALUE: constants.character.DEFAULT_ATTRIBUTE_VALUE + 2,
                            DEFAULT_MAX_VALUE: constants.character.ATTRIBUTE_MAX_VALUE
                        }
                    }
                },
                average: {
                    NAME: 'Average',
                    AVAILABLE_ATTRIBUTE_POINTS: constants.character.DEFAULT_AVAILABLE_ATTRIBUTE_POINTS,
                    ID: 'average',
                    attribute: {
                        strength: { 
                            DEFAULT_VALUE: constants.character.DEFAULT_ATTRIBUTE_VALUE,
                            DEFAULT_MAX_VALUE: constants.character.DEFAULT_ATTRIBUTE_MAX_VALUE
                        },
                        intelligence: { 
                            DEFAULT_VALUE: constants.character.DEFAULT_ATTRIBUTE_VALUE,
                            DEFAULT_MAX_VALUE: constants.character.DEFAULT_ATTRIBUTE_MAX_VALUE
                        },
                        charisma: { 
                            DEFAULT_VALUE: constants.character.DEFAULT_ATTRIBUTE_VALUE,
                            DEFAULT_MAX_VALUE: constants.character.DEFAULT_ATTRIBUTE_MAX_VALUE
                        }
                    }
                }
            }
        }
        
    }
    
	return calculatedConstants;
});