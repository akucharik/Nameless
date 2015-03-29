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
            DEFAULT_ATTRIBUTE_MAX_VALUE: 8,
            DEFAULT_ATTRIBUTE_VALUE: 5,
            DEFAULT_AVAILABLE_ATTRIBUTE_POINTS: 7,
//            attribute: {
//                STRENGTH: 0,
//                INTELLIGENCE: 1,
//                CHARISMA: 2,
//            },
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
            skillLevel: {
                level1: {
                    COST: 10,
                    REQUIRED_ATTRIBUTE_POINTS: 5
                },
                level2: {
                    COST: 20,
                    REQUIRED_ATTRIBUTE_POINTS: 7
                },
                level3: {
                    COST: 30,
                    REQUIRED_ATTRIBUTE_POINTS: 9
                },
                level4: {
                    COST: 40,
                    REQUIRED_ATTRIBUTE_POINTS: 10
                }
            },
            type: {
                AVERAGE: 0,
                STRENGTH: 1,
                INTELLIGENCE: 2,
                CHARISMA: 3
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
                CHARACTER_TYPE: 2,
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
    
    constants.character.skill = {
        scare: {
            NAME: 'Scare',
            ASSOCIATED_ATTRIBUTE_KEY: constants.character.attribute.strength.KEY,
            COST: constants.character.skillLevel.level1.COST,
            DESCRIPTION: '',
            KEY: 'scare',
            REQUIRED_ATTRIBUTE_POINTS: constants.character.skillLevel.level1.REQUIRED_ATTRIBUTE_POINTS
        },
        charge: {
            NAME: 'Charge',
            ASSOCIATED_ATTRIBUTE_KEY: constants.character.attribute.strength.KEY,
            COST: constants.character.skillLevel.level2.COST,
            DESCRIPTION: '',
            KEY: 'charge',
            REQUIRED_ATTRIBUTE_POINTS: constants.character.skillLevel.level2.REQUIRED_ATTRIBUTE_POINTS
        },
        coordinate: {
            NAME: 'Coordinate',
            ASSOCIATED_ATTRIBUTE_KEY: constants.character.attribute.strength.KEY,
            COST: constants.character.skillLevel.level3.COST,
            DESCRIPTION: '',
            KEY: 'coordinate',
            REQUIRED_ATTRIBUTE_POINTS: constants.character.skillLevel.level3.REQUIRED_ATTRIBUTE_POINTS
        },
        overpower: {
            NAME: 'Overpower',
            ASSOCIATED_ATTRIBUTE_KEY: constants.character.attribute.strength.KEY,
            COST: constants.character.skillLevel.level4.COST,
            DESCRIPTION: '',
            KEY: 'overpower',
            REQUIRED_ATTRIBUTE_POINTS: constants.character.skillLevel.level4.REQUIRED_ATTRIBUTE_POINTS
        },
        spy: {
            NAME: 'Spy',
            ASSOCIATED_ATTRIBUTE_KEY: constants.character.attribute.intelligence.KEY,
            COST: constants.character.skillLevel.level1.COST,
            DESCRIPTION: '',
            KEY: 'spy',
            REQUIRED_ATTRIBUTE_POINTS: constants.character.skillLevel.level1.REQUIRED_ATTRIBUTE_POINTS
        },
        confuse: {
            NAME: 'Confuse',
            ASSOCIATED_ATTRIBUTE_KEY: constants.character.attribute.intelligence.KEY,
            COST: constants.character.skillLevel.level2.COST,
            DESCRIPTION: '',
            KEY: 'confuse',
            REQUIRED_ATTRIBUTE_POINTS: constants.character.skillLevel.level2.REQUIRED_ATTRIBUTE_POINTS
        },
        medic: {
            NAME: 'Medic',
            ASSOCIATED_ATTRIBUTE_KEY: constants.character.attribute.intelligence.KEY,
            COST: constants.character.skillLevel.level3.COST,
            DESCRIPTION: '',
            KEY: 'medic',
            REQUIRED_ATTRIBUTE_POINTS: constants.character.skillLevel.level3.REQUIRED_ATTRIBUTE_POINTS
        },
        predict: {
            NAME: 'Predict',
            ASSOCIATED_ATTRIBUTE_KEY: constants.character.attribute.intelligence.KEY,
            COST: constants.character.skillLevel.level4.COST,
            DESCRIPTION: '',
            KEY: 'predict',
            REQUIRED_ATTRIBUTE_POINTS: constants.character.skillLevel.level4.REQUIRED_ATTRIBUTE_POINTS
        },
        rally: {
            NAME: 'Rally',
            ASSOCIATED_ATTRIBUTE_KEY: constants.character.attribute.charisma.KEY,
            COST: constants.character.skillLevel.level1.COST,
            DESCRIPTION: '',
            KEY: 'rally',
            REQUIRED_ATTRIBUTE_POINTS: constants.character.skillLevel.level1.REQUIRED_ATTRIBUTE_POINTS
        },
        recruit: {
            NAME: 'Recruit',
            ASSOCIATED_ATTRIBUTE_KEY: constants.character.attribute.charisma.KEY,
            COST: constants.character.skillLevel.level2.COST,
            DESCRIPTION: '',
            KEY: 'recruit',
            REQUIRED_ATTRIBUTE_POINTS: constants.character.skillLevel.level2.REQUIRED_ATTRIBUTE_POINTS,
        },
        command: {
            NAME: 'Command',
            ASSOCIATED_ATTRIBUTE_KEY: constants.character.attribute.charisma.KEY,
            COST: constants.character.skillLevel.level3.COST,
            DESCRIPTION: '',
            KEY: 'command',
            REQUIRED_ATTRIBUTE_POINTS: constants.character.skillLevel.level3.REQUIRED_ATTRIBUTE_POINTS,
        },
        turn: {
            NAME: 'Turn',
            ASSOCIATED_ATTRIBUTE_KEY: constants.character.attribute.charisma.KEY,
            COST: constants.character.skillLevel.level4.COST,
            DESCRIPTION: '',
            KEY: 'turn',
            REQUIRED_ATTRIBUTE_POINTS: constants.character.skillLevel.level4.REQUIRED_ATTRIBUTE_POINTS,
        }
    }
    
	return constants;
});