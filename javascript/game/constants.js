define(function() {

    var constants = {
        
        canvas: {
//            height: 720,
//            width: 1080
            HEIGHT: 504,
            WIDTH: 720
        },
        
        character: {
            UNIT_PROFICIENCY_MAX_VALUE: 100,
            UNIT_PROFICIENCY_MIN_VALUE: 0,
            SKILL_MAX_VALUE: 100,
            SKILL_MIN_VALUE: 0,
            gender: {
                MALE: 0,
                FEMALE: 1
            },
            type: {
                STOCK: 0,
                CUSTOM: 1
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
    
	return constants;
});