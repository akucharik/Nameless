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
            attribute: {
                strength: { 
                    NAME: 'Strength',
                    DISPLAY_NAME: 'STR',
                    DESCRIPTION: 'Strength helps in battle.',
                    ID: 'strength'
                },
                intelligence: { 
                    NAME: 'Intelligence',
                    DISPLAY_NAME: 'INT',
                    DESCRIPTION: 'Intelligence helps execute ideas.',
                    ID: 'intelligence'
                },
                charisma: { 
                    NAME: 'Charisma',
                    DISPLAY_NAME: 'CHR',
                    DESCRIPTION: 'Charisma helps influence people.',
                    ID: 'charisma'
                }
            },
            skill: {
                scare: {
                    NAME: 'Scare',
                    ASSOCIATED_ATTRIBUTE: 'strength',
                    COST: 0,
                    DESCRIPTION: '',
                    ID: 'scare',
                    REQUIRED_ATTRIBUTE_POINTS: 5
                },
                charge: {
                    NAME: 'Charge',
                    ASSOCIATED_ATTRIBUTE: 'strength',
                    COST: 0,
                    DESCRIPTION: '',
                    ID: 'charge',
                    REQUIRED_ATTRIBUTE_POINTS: 7
                },
                coordinate: {
                    NAME: 'Coordinate',
                    ASSOCIATED_ATTRIBUTE: 'strength',
                    COST: 0,
                    DESCRIPTION: '',
                    ID: 'coordinate',
                    REQUIRED_ATTRIBUTE_POINTS: 9
                },
                overpower: {
                    NAME: 'Overpower',
                    ASSOCIATED_ATTRIBUTE: 'strength',
                    COST: 0,
                    DESCRIPTION: '',
                    ID: 'overpower',
                    REQUIRED_ATTRIBUTE_POINTS: 10
                },
                spy: {
                    NAME: 'Spy',
                    ASSOCIATED_ATTRIBUTE: 'intelligence',
                    COST: 0,
                    DESCRIPTION: '',
                    ID: 'spy',
                    REQUIRED_ATTRIBUTE_POINTS: 5
                },
                confuse: {
                    NAME: 'Confuse',
                    ASSOCIATED_ATTRIBUTE: 'intelligence',
                    COST: 0,
                    DESCRIPTION: '',
                    ID: 'confuse',
                    REQUIRED_ATTRIBUTE_POINTS: 7
                },
                medic: {
                    NAME: 'Medic',
                    ASSOCIATED_ATTRIBUTE: 'intelligence',
                    COST: 0,
                    DESCRIPTION: '',
                    ID: 'medic',
                    REQUIRED_ATTRIBUTE_POINTS: 9
                },
                predict: {
                    NAME: 'Predict',
                    ASSOCIATED_ATTRIBUTE: 'intelligence',
                    COST: 0,
                    DESCRIPTION: '',
                    ID: 'predict',
                    REQUIRED_ATTRIBUTE_POINTS: 10
                },
                rally: {
                    NAME: 'Rally',
                    ASSOCIATED_ATTRIBUTE: 'charisma',
                    COST: 0,
                    DESCRIPTION: '',
                    ID: 'rally',
                    REQUIRED_ATTRIBUTE_POINTS: 5
                },
                recruit: {
                    NAME: 'Recruit',
                    ASSOCIATED_ATTRIBUTE: 'charisma',
                    COST: 0,
                    DESCRIPTION: '',
                    ID: 'recruit',
                    REQUIRED_ATTRIBUTE_POINTS: 7
                },
                command: {
                    NAME: 'Command',
                    ASSOCIATED_ATTRIBUTE: 'charisma',
                    COST: 0,
                    DESCRIPTION: '',
                    ID: 'command',
                    REQUIRED_ATTRIBUTE_POINTS: 9
                },
                turn: {
                    NAME: 'Turn',
                    ASSOCIATED_ATTRIBUTE: 'charisma',
                    COST: 0,
                    DESCRIPTION: '',
                    ID: 'turn',
                    REQUIRED_ATTRIBUTE_POINTS: 10
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
    
	return constants;
});