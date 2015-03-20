define([
    // libraries
	'backbone',
    // game
    'game/constants',
    // models
    'models/characterAttribute',
    'models/characterSkill'
], function(
    // libraries
    Backbone,
    // game
    constants,
    // models
    CharacterAttributeModel,
    CharacterSkillModel
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
            // initialize attributes
            this.set('attributes', new Backbone.Collection([], {
                model: CharacterAttributeModel
            }));
            
            for (var prop in constants.character.attribute) {
                var attribute = constants.character.attribute[prop];
                
                this.get('attributes').add(new CharacterAttributeModel({
                    name: attribute.NAME,
                    displayName: attribute.DISPLAY_NAME,
                    description: attribute.DESCRIPTION,
                    id: attribute.ID
                }));
            }
            
            // initialize skills
            this.set('skills', new Backbone.Collection([], {
                model: CharacterSkillModel
            }));
            
            for (var prop in constants.character.skill) {
                var skill = constants.character.skill[prop];
                
                this.get('skills').add(new CharacterSkillModel({
                    name: skill.NAME,
                    associatedAttribute: this.get('attributes').findWhere({ id: skill.ASSOCIATED_ATTRIBUTE }),
                    cost: skill.COST,
                    description: skill.DESCRIPTION,
                    requiredAttributePoints: skill.REQUIRED_ATTRIBUTE_POINTS
                }));
            }
        }

	});
	
	return CharacterModel;
});