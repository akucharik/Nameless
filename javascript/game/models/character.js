define([
    // libraries
	'backbone',
    // game
    'game/constants'
], function(
    // libraries
    Backbone,
    // game
    constants
) {
    
	var CharacterModel = Backbone.Model.extend({
		defaults: {
            // Basic
            name: '',
            
            // Attributes
            availableAttributePoints: constants.character.DEFAULT_AVAILABLE_ATTRIBUTE_POINTS,
            str: constants.character.DEFAULT_ATTRIBUTE_VALUE,
            strMax: constants.character.DEFAULT_ATTRIBUTE_MAX_VALUE,
            int: constants.character.DEFAULT_ATTRIBUTE_VALUE,
            intMax: constants.character.DEFAULT_ATTRIBUTE_MAX_VALUE,
            chr: constants.character.DEFAULT_ATTRIBUTE_VALUE,
            chrMax: constants.character.DEFAULT_ATTRIBUTE_MAX_VALUE,
            
            // Health
            health: 6890,
            maxHealth: 10000,
            
            // Skill values
            attackRange: 4,
            movementRange: 4,
            maxMovementRange: 4,
            
            // Combat
            target: null,
            
            // Position
            currentTile: null,
            path: null,
            velocity: 200,
            x: null,
            y: null,
            
            // Control
            controlType: constants.entity.controlType.PLAYER,
            
            // Rendering
            spritesheet: document.getElementById('spritesheet'),
            spriteX: 0,
            spriteY: 0,
            spriteWidth: 0,
            spriteHeight: 0,
            time: null,
            
            // States
            isChangingHealth: false
		},
        
        initialize: function () {
            
        }

	});
	
	return CharacterModel;
});