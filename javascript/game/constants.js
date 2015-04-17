define(function() {

    var constants = {
        
        canvas: {
//            height: 720,
//            width: 1080
            HEIGHT: 504,
            WIDTH: 720
        },
        
        character: {
            ATTRIBUTE_MAX_VALUE: 10,
            ATTRIBUTE_MIN_VALUE: 1,
            DEFAULT_ATTRIBUTE_MAX_VALUE: 7,
            DEFAULT_ATTRIBUTE_VALUE: 4,
            DEFAULT_AVAILABLE_ATTRIBUTE_POINTS: 7,
            UNIT_PROFICIENCY_MAX_VALUE: 100,
            UNIT_PROFICIENCY_MIN_VALUE: 0,
            SKILL_MAX_VALUE: 100,
            SKILL_MIN_VALUE: 0,
            attribute: {
                strength: {
                    DESCRIPTION: 'Strength helps in battle.',
                    DISPLAY_NAME: 'STR',
                    KEY: 'strength',
                    NAME: 'Strength'
                },
                intelligence: {
                    DESCRIPTION: 'Intelligence helps execute ideas.',
                    DISPLAY_NAME: 'INT',
                    KEY: 'intelligence',
                    NAME: 'Intelligence'
                },
                charisma: {
                    DESCRIPTION: 'Charisma helps influence people.',
                    DISPLAY_NAME: 'CHR',
                    KEY: 'charisma',
                    NAME: 'Charisma'
                }
            },
            gender: {
                MALE: 0,
                FEMALE: 1
            },
            // TODO: refactor to use this config structure
            skillValue: {
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
            },
            skillLevel: {
                level1: {
                    COST: 10,
                    KEY: 'level1',
                    REQUIRED_ATTRIBUTE_POINTS: 5,
                    maxValues: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 100],
                    values:    [ 0,  0,  0,  5, 10, 15, 20, 25, 30,  35,  40]
                },
                level2: {
                    COST: 20,
                    KEY: 'level2',
                    REQUIRED_ATTRIBUTE_POINTS: 6,
                    maxValues: [ 0, 10, 20, 30, 40, 50, 60, 70, 80,  90, 100],
                    values:    [ 0,  0,  0,  0,  0,  5, 10, 15, 20,  25,  30]
                },
                level3: {
                    COST: 30,
                    KEY: 'level3',
                    REQUIRED_ATTRIBUTE_POINTS: 8,
                    maxValues: [ 0,  0,  0, 10, 20, 30, 40, 50, 60,  70,  80],
                    values:    [ 0,  0,  0,  0,  0,  0,  0,  5, 10,  15,  20]
                },
                level4: {
                    COST: 40,
                    KEY: 'level4',
                    REQUIRED_ATTRIBUTE_POINTS: 9,
                    maxValues: [ 0,  0,  0,  0, 10, 20, 30, 40, 50,  60,  70],
                    values:    [ 0,  0,  0,  0,  0,  0,  0,  0,  0,   5,  10]
                }
            },
            type: {
                STOCK: 0,
                CUSTOM: 1
            },
            // TODO: refactor to use this config structure
            unitProficiencyValue: {
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
            }
        },
        
        entity: {
            controlType: {
                NPC: 0,
                PLAYER: 1
            }
        },
        
        grid: {
            FOCUSED_BORDER_FILL_STYLE: 'rgba(255, 255, 50, 1.0)',
            FOCUSED_BORDER_WIDTH: 2,
            FOCUSED_INDENT: 6,
            FOCUSED_OUTER_BORDER_FILL_STYLE: 'rgba(0, 0, 0, 0.3)',
            FOCUSED_OUTER_BORDER_INDENT: 3,
            FOCUSED_OUTER_BORDER_WIDTH: 1,
            
            PATH_BORDER_FILL_STYLE: 'rgba(255, 255, 50, 1.0)',
            PATH_BORDER_WIDTH: 2,
            PATH_INDENT: 6,
            PATH_OUTER_BORDER_FILL_STYLE: 'rgba(0, 0, 0, 0.3)',
            PATH_OUTER_BORDER_INDENT: 3,
            PATH_OUTER_BORDER_WIDTH: 1,
            
            RANGE_BORDER_FILL_STYLE:  'rgba(255, 255, 255, 0.8)',
            RANGE_BORDER_WIDTH: 2,
            RANGE_INDENT: 6,
            RANGE_OUTER_BORDER_FILL_STYLE: 'rgba(0, 0, 0, 0.3)',
            RANGE_OUTER_BORDER_INDENT: 3,
            RANGE_OUTER_BORDER_WIDTH: 1,
            
            SELECTED_BORDER_FILL_STYLE: 'rgba(0, 0, 0, 0.3)',
            SELECTED_BORDER_WIDTH: 1,
            SELECTED_FILL_STYLE: 'rgba(255, 255, 50, 0.5)',
            SELECTED_INDENT: 3,
            
            TILE_SIZE: 72
        },
        
        characterTurn: {
            primaryAction: {
                ATTACK: 1,
                END_TURN: 2,
                MOVE: 3,
                TACTIC: 4,
                WAIT: 5
            }
        },
        
        tile: {
            cost: {
                BASE: 1,
                OBSTACLE: 100,
                TREE: 3
            },
            type: {
                BASE: 1,
                OBSTACLE: 2,
                TREE: 3
            },
            fillStyle: {
                BASE: 'rgba(100, 200, 100, 1.0)',
                OBSTACLE: 'rgba(100, 100, 100, 1.0)',
                TREE: 'rgba(50, 150, 50, 1.0)'
            }
        },
        
        home: {
            state: {
                MAIN_MENU: 0,
                CHARACTERS: 1,
                EDIT_CHARACTER_CLASS: 2,
                EDIT_CHARACTER: 3,
                GAMES: 4,
                PLAY: 5
            }
        },
        
        play: {
            state: {
                DEAD: 0,
                PLAY: 1,
                MENU: 2
            }
        },
        
        log: {
            item: {
                cssClass: {
                    DEFAULT: 'log-item-default'
                },
                type: {
                    DEFAULT: 0
                }
            }
            
        }
        
    }
    
    // TODO: Refactor into a config file. Stop using constants as configuration.
    constants.character.characterClass = {
        average: {
            ASSOCIATED_ATTRIBUTE_KEY: '',
            DESCRIPTION: 'Well-rounded and adept at all skills, but lacks a truly outstanding strength.',
            KEY: 'average',
            NAME: 'Average',
            // attribute start values
            STRENGTH_MAX_START_VALUE: constants.character.DEFAULT_ATTRIBUTE_MAX_VALUE,
            STRENGTH_START_VALUE: constants.character.DEFAULT_ATTRIBUTE_VALUE,
            INTELLIGENCE_MAX_START_VALUE: constants.character.DEFAULT_ATTRIBUTE_MAX_VALUE,
            INTELLIGENCE_START_VALUE: constants.character.DEFAULT_ATTRIBUTE_VALUE,
            CHARISMA_MAX_START_VALUE: constants.character.DEFAULT_ATTRIBUTE_MAX_VALUE,
            CHARISMA_START_VALUE: constants.character.DEFAULT_ATTRIBUTE_VALUE,
            AVAILABLE_ATTRIBUTE_POINTS_START_VALUE: constants.character.DEFAULT_AVAILABLE_ATTRIBUTE_POINTS,
            strength: {
                MAX_START_VALUE: 8,
                START_VALUE: 5
            },
            intelligence: {
                MAX_START_VALUE: 8,
                START_VALUE: 4
            },
            charisma: {
                MAX_START_VALUE: 8,
                START_VALUE: 4
            }
        },
        soldier: {
            ASSOCIATED_ATTRIBUTE_KEY: constants.character.attribute.strength.KEY,
            DESCRIPTION: 'Highly skilled in the art of combat. A force to be reckoned with on the battlefield.',
            KEY: 'soldier',
            NAME: 'Soldier',
            // attribute start values
            STRENGTH_MAX_START_VALUE: constants.character.ATTRIBUTE_MAX_VALUE - 1,
            STRENGTH_START_VALUE: constants.character.DEFAULT_ATTRIBUTE_VALUE + 2,
            INTELLIGENCE_MAX_START_VALUE: constants.character.DEFAULT_ATTRIBUTE_MAX_VALUE - 1,
            INTELLIGENCE_START_VALUE: constants.character.DEFAULT_ATTRIBUTE_VALUE - 1,
            CHARISMA_MAX_START_VALUE: constants.character.DEFAULT_ATTRIBUTE_MAX_VALUE - 1,
            CHARISMA_START_VALUE: constants.character.DEFAULT_ATTRIBUTE_VALUE - 1,
            AVAILABLE_ATTRIBUTE_POINTS_START_VALUE: constants.character.DEFAULT_AVAILABLE_ATTRIBUTE_POINTS - 2,
            strength: {
                MAX_START_VALUE: 10,
                START_VALUE: 7
            },
            intelligence: {
                MAX_START_VALUE: 7,
                START_VALUE: 4
            },
            charisma: {
                MAX_START_VALUE: 7,
                START_VALUE: 4
            }
        },
        genius: {
            ASSOCIATED_ATTRIBUTE_KEY: constants.character.attribute.intelligence.KEY,
            DESCRIPTION: 'Intellect is unmatched among peers. Strategies are highly successful and effective.',
            KEY: 'genius',
            NAME: 'Genius',
            // attribute start values
            STRENGTH_MAX_START_VALUE: constants.character.DEFAULT_ATTRIBUTE_MAX_VALUE - 1,
            STRENGTH_START_VALUE: constants.character.DEFAULT_ATTRIBUTE_VALUE - 1,
            INTELLIGENCE_MAX_START_VALUE: constants.character.ATTRIBUTE_MAX_VALUE - 1,
            INTELLIGENCE_START_VALUE: constants.character.DEFAULT_ATTRIBUTE_VALUE + 2,
            CHARISMA_MAX_START_VALUE: constants.character.DEFAULT_ATTRIBUTE_MAX_VALUE - 1,
            CHARISMA_START_VALUE: constants.character.DEFAULT_ATTRIBUTE_VALUE - 1,
            AVAILABLE_ATTRIBUTE_POINTS_START_VALUE: constants.character.DEFAULT_AVAILABLE_ATTRIBUTE_POINTS - 2,
            strength: {
                MAX_START_VALUE: 7,
                START_VALUE: 4
            },
            intelligence: {
                MAX_START_VALUE: 10,
                START_VALUE: 7
            },
            charisma: {
                MAX_START_VALUE: 7,
                START_VALUE: 4
            }
        },
        mesmer: {
            ASSOCIATED_ATTRIBUTE_KEY: constants.character.attribute.charisma.KEY,
            DESCRIPTION: 'A magnetic personality that is convincing and extremely influential. Ideas are easily accepted, and others follow.',
            KEY: 'mesmer',
            NAME: 'Mesmer',
            STRENGTH_MAX_START_VALUE: constants.character.DEFAULT_ATTRIBUTE_MAX_VALUE - 1,
            STRENGTH_START_VALUE: constants.character.DEFAULT_ATTRIBUTE_VALUE - 1,
            INTELLIGENCE_MAX_START_VALUE: constants.character.DEFAULT_ATTRIBUTE_MAX_VALUE - 1,
            INTELLIGENCE_START_VALUE: constants.character.DEFAULT_ATTRIBUTE_VALUE - 1,
            CHARISMA_MAX_START_VALUE: constants.character.ATTRIBUTE_MAX_VALUE - 1,
            CHARISMA_START_VALUE: constants.character.DEFAULT_ATTRIBUTE_VALUE + 2,
            AVAILABLE_ATTRIBUTE_POINTS_START_VALUE: constants.character.DEFAULT_AVAILABLE_ATTRIBUTE_POINTS - 2,
            strength: {
                MAX_START_VALUE: 7,
                START_VALUE: 4
            },
            intelligence: {
                MAX_START_VALUE: 7,
                START_VALUE: 4
            },
            charisma: {
                MAX_START_VALUE: 10,
                START_VALUE: 7
            }
        }
    };
    
    constants.character.unitProficiency = {
        foot: {
            NAME: 'Foot',
            ASSOCIATED_ATTRIBUTE_KEY: constants.character.attribute.strength.KEY,
            DESCRIPTION: '',
            KEY: 'foot',
            ORDER: 0,
            REQUIRED_ATTRIBUTE_POINTS: 0,
            MAX_VALUES: [ 10,  20,  30,  40,  50,  60,  70,  80,  90, 100, 100],
            VALUES:     [-10,  -5,   0,   5,  10,  15,  20,  25,  30,  35,  40]
        },
        bow: {
            NAME: 'Bow',
            ASSOCIATED_ATTRIBUTE_KEY: constants.character.attribute.strength.KEY,
            DESCRIPTION: '',
            KEY: 'bow',
            ORDER: 1,
            REQUIRED_ATTRIBUTE_POINTS: 0,
            MAX_VALUES: [  0,  10,  20,  30,  40,  50,  60,  70,  80,  90, 100],
            VALUES:     [-20, -15, -10,  -5,   0,   5,  10,  15,  20,  25,  30]
        },
        horse: {
            NAME: 'Horse',
            ASSOCIATED_ATTRIBUTE_KEY: constants.character.attribute.strength.KEY,
            DESCRIPTION: '',
            KEY: 'horse',
            ORDER: 2,
            REQUIRED_ATTRIBUTE_POINTS: 0,
            MAX_VALUES: [  0,   0,  10,  20,  30,  40,  50,  60,  70,  80,  90],
            VALUES:     [-30, -25, -20, -15, -10,  -5,   0,   5,  10,  15,  20]
        }
    };
    
    constants.character.skill = {
        scare: {
            NAME: 'Scare',
            ASSOCIATED_ATTRIBUTE_KEY: constants.character.attribute.strength.KEY,
            COST: constants.character.skillLevel.level1.COST,
            DESCRIPTION: '',
            KEY: 'scare',
            LEVEL: constants.character.skillLevel.level1.KEY,
            REQUIRED_ATTRIBUTE_POINTS: constants.character.skillLevel.level1.REQUIRED_ATTRIBUTE_POINTS
        },
        charge: {
            NAME: 'Charge',
            ASSOCIATED_ATTRIBUTE_KEY: constants.character.attribute.strength.KEY,
            COST: constants.character.skillLevel.level2.COST,
            DESCRIPTION: '',
            KEY: 'charge',
            LEVEL: constants.character.skillLevel.level2.KEY,
            REQUIRED_ATTRIBUTE_POINTS: constants.character.skillLevel.level2.REQUIRED_ATTRIBUTE_POINTS
        },
        coordinate: {
            NAME: 'Coordinate',
            ASSOCIATED_ATTRIBUTE_KEY: constants.character.attribute.strength.KEY,
            COST: constants.character.skillLevel.level3.COST,
            DESCRIPTION: '',
            KEY: 'coordinate',
            LEVEL: constants.character.skillLevel.level3.KEY,
            REQUIRED_ATTRIBUTE_POINTS: constants.character.skillLevel.level3.REQUIRED_ATTRIBUTE_POINTS
        },
        overpower: {
            NAME: 'Overpower',
            ASSOCIATED_ATTRIBUTE_KEY: constants.character.attribute.strength.KEY,
            COST: constants.character.skillLevel.level4.COST,
            DESCRIPTION: '',
            KEY: 'overpower',
            LEVEL: constants.character.skillLevel.level4.KEY,
            REQUIRED_ATTRIBUTE_POINTS: constants.character.skillLevel.level4.REQUIRED_ATTRIBUTE_POINTS
        },
        spy: {
            NAME: 'Spy',
            ASSOCIATED_ATTRIBUTE_KEY: constants.character.attribute.intelligence.KEY,
            COST: constants.character.skillLevel.level1.COST,
            DESCRIPTION: '',
            KEY: 'spy',
            LEVEL: constants.character.skillLevel.level1.KEY,
            REQUIRED_ATTRIBUTE_POINTS: constants.character.skillLevel.level1.REQUIRED_ATTRIBUTE_POINTS
        },
        confuse: {
            NAME: 'Confuse',
            ASSOCIATED_ATTRIBUTE_KEY: constants.character.attribute.intelligence.KEY,
            COST: constants.character.skillLevel.level2.COST,
            DESCRIPTION: '',
            KEY: 'confuse',
            LEVEL: constants.character.skillLevel.level2.KEY,
            REQUIRED_ATTRIBUTE_POINTS: constants.character.skillLevel.level2.REQUIRED_ATTRIBUTE_POINTS
        },
        medic: {
            NAME: 'Medic',
            ASSOCIATED_ATTRIBUTE_KEY: constants.character.attribute.intelligence.KEY,
            COST: constants.character.skillLevel.level3.COST,
            DESCRIPTION: '',
            KEY: 'medic',
            LEVEL: constants.character.skillLevel.level3.KEY,
            REQUIRED_ATTRIBUTE_POINTS: constants.character.skillLevel.level3.REQUIRED_ATTRIBUTE_POINTS
        },
        predict: {
            NAME: 'Predict',
            ASSOCIATED_ATTRIBUTE_KEY: constants.character.attribute.intelligence.KEY,
            COST: constants.character.skillLevel.level4.COST,
            DESCRIPTION: '',
            KEY: 'predict',
            LEVEL: constants.character.skillLevel.level4.KEY,
            REQUIRED_ATTRIBUTE_POINTS: constants.character.skillLevel.level4.REQUIRED_ATTRIBUTE_POINTS
        },
        rally: {
            NAME: 'Rally',
            ASSOCIATED_ATTRIBUTE_KEY: constants.character.attribute.charisma.KEY,
            COST: constants.character.skillLevel.level1.COST,
            DESCRIPTION: '',
            KEY: 'rally',
            LEVEL: constants.character.skillLevel.level1.KEY,
            REQUIRED_ATTRIBUTE_POINTS: constants.character.skillLevel.level1.REQUIRED_ATTRIBUTE_POINTS
        },
        recruit: {
            NAME: 'Recruit',
            ASSOCIATED_ATTRIBUTE_KEY: constants.character.attribute.charisma.KEY,
            COST: constants.character.skillLevel.level2.COST,
            DESCRIPTION: '',
            KEY: 'recruit',
            LEVEL: constants.character.skillLevel.level2.KEY,
            REQUIRED_ATTRIBUTE_POINTS: constants.character.skillLevel.level2.REQUIRED_ATTRIBUTE_POINTS,
        },
        command: {
            NAME: 'Command',
            ASSOCIATED_ATTRIBUTE_KEY: constants.character.attribute.charisma.KEY,
            COST: constants.character.skillLevel.level3.COST,
            DESCRIPTION: '',
            KEY: 'command',
            LEVEL: constants.character.skillLevel.level3.KEY,
            REQUIRED_ATTRIBUTE_POINTS: constants.character.skillLevel.level3.REQUIRED_ATTRIBUTE_POINTS,
        },
        turn: {
            NAME: 'Turn',
            ASSOCIATED_ATTRIBUTE_KEY: constants.character.attribute.charisma.KEY,
            COST: constants.character.skillLevel.level4.COST,
            DESCRIPTION: '',
            KEY: 'turn',
            LEVEL: constants.character.skillLevel.level4.KEY,
            REQUIRED_ATTRIBUTE_POINTS: constants.character.skillLevel.level4.REQUIRED_ATTRIBUTE_POINTS,
        }
    };
    
	return constants;
});