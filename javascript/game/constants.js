define(function() {

    var constants = {
        
        canvas: {
//            height: 720,
//            width: 1080
            HEIGHT: 504,
            WIDTH: 720
        },
        
        character: {
            attribute: {
                strength: { 
                    NAME: 'Strength',
                    DISPLAY_NAME: 'STR',
                    PROPERTY_NAME: 'str'
                },
                intelligence: { 
                    NAME: 'Intelligence',
                    DISPLAY_NAME: 'INT',
                    PROPERTY_NAME: 'int'
                },
                charisma: { 
                    NAME: 'Charisma',
                    DISPLAY_NAME: 'CHR',
                    PROPERTY_NAME: 'chr'
                }
            },
            skill: {
                level: {
                    level1: {
                        REQUIRED_ATTRIBUTE_POINTS: 5    
                    },
                    level2: {
                        REQUIRED_ATTRIBUTE_POINTS: 7
                    },
                    level3: {
                        REQUIRED_ATTRIBUTE_POINTS: 9
                    },
                    level4: {
                        REQUIRED_ATTRIBUTE_POINTS: 10
                    }
                }
                
            },
            DEFAULT_ATTRIBUTE_VALUE: 5,
            DEFAULT_ATTRIBUTE_MAX: 8,
            ATTRIBUTE_MAX: 10,
            ATTRIBUTE_MIN: 1,
            DEFAULT_AVAILABLE_ATTRIBUTE_POINTS: 7
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