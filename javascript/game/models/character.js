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
            attributes: null,
            availableAttributePoints: constants.character.DEFAULT_AVAILABLE_ATTRIBUTE_POINTS,
            
            // Skills
            skills: null,
            
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
            
            var strength = this.get('attributes').add(new CharacterAttributeModel({ 
                name: 'Strength',
                displayName: 'STR',
                description: 'Strength helps in battle.',
                id: constants.character.attribute.STRENGTH
            }));
            
            var intelligence = this.get('attributes').add(new CharacterAttributeModel({ 
                name: 'Intelligence',
                displayName: 'INT',
                description: 'Intelligence helps execute ideas.',
                id: constants.character.attribute.INTELLIGENCE
            }));
            
            var charisma = this.get('attributes').add(new CharacterAttributeModel({ 
                name: 'Charisma',
                displayName: 'CHR',
                description: 'Charisma helps influence people.',
                id: constants.character.attribute.CHARISMA
            }));
            
            
            // initialize skills
            this.set('skills', new Backbone.Collection([], {
                model: CharacterSkillModel
            }));
            
            this.get('skills').add([
                new CharacterSkillModel({ 
                    name: 'Scare', 
                    associatedAttribute: strength,
                    associatedAttributeId: strength.get('id'), 
                    cost: constants.character.skill.level1.COST,
                    description: 'Add a description',
                    requiredAttributePoints: constants.character.skill.level1.REQUIRED_ATTRIBUTE_POINTS,
                    value: strength.get('value')
                }),
                new CharacterSkillModel({ 
                    name: 'Charge', 
                    associatedAttribute: strength,
                    associatedAttributeId: strength.get('id'), 
                    cost: constants.character.skill.level2.COST,
                    description: 'Add a description',
                    requiredAttributePoints: constants.character.skill.level2.REQUIRED_ATTRIBUTE_POINTS,
                    value: strength.get('value')
                }),
                new CharacterSkillModel({ 
                    name: 'Coordinate', 
                    associatedAttribute: strength,
                    associatedAttributeId: strength.get('id'), 
                    cost: constants.character.skill.level3.COST,
                    description: 'Add a description',
                    requiredAttributePoints: constants.character.skill.level3.REQUIRED_ATTRIBUTE_POINTS,
                    value: strength.get('value')
                }),
                new CharacterSkillModel({ 
                    name: 'Overpower', 
                    associatedAttribute: strength,
                    associatedAttributeId: strength.get('id'), 
                    cost: constants.character.skill.level4.COST,
                    description: 'Add a description',
                    requiredAttributePoints: constants.character.skill.level4.REQUIRED_ATTRIBUTE_POINTS,
                    value: strength.get('value')
                }),
                new CharacterSkillModel({ 
                    name: 'Spy', 
                    associatedAttribute: intelligence,
                    associatedAttributeId: intelligence.get('id'), 
                    cost: constants.character.skill.level1.COST,
                    description: 'Add a description',
                    requiredAttributePoints: constants.character.skill.level1.REQUIRED_ATTRIBUTE_POINTS,
                    value: intelligence.get('value')
                }),
                new CharacterSkillModel({ 
                    name: 'Confuse', 
                    associatedAttribute: intelligence,
                    associatedAttributeId: intelligence.get('id'), 
                    cost: constants.character.skill.level2.COST,
                    description: 'Add a description',
                    requiredAttributePoints: constants.character.skill.level2.REQUIRED_ATTRIBUTE_POINTS,
                    value: intelligence.get('value')
                }),
                new CharacterSkillModel({ 
                    name: 'Medic', 
                    associatedAttribute: intelligence,
                    associatedAttributeId: intelligence.get('id'), 
                    cost: constants.character.skill.level3.COST,
                    description: 'Add a description',
                    requiredAttributePoints: constants.character.skill.level3.REQUIRED_ATTRIBUTE_POINTS,
                    value: intelligence.get('value')
                }),
                new CharacterSkillModel({ 
                    name: 'Predict', 
                    associatedAttribute: intelligence,
                    associatedAttributeId: intelligence.get('id'), 
                    cost: constants.character.skill.level4.COST,
                    description: 'Add a description',
                    requiredAttributePoints: constants.character.skill.level4.REQUIRED_ATTRIBUTE_POINTS,
                    value: intelligence.get('value')
                }),
                new CharacterSkillModel({ 
                    name: 'Rally', 
                    associatedAttribute: charisma,
                    associatedAttributeId: charisma.get('id'), 
                    cost: constants.character.skill.level1.COST,
                    description: 'Add a description',
                    requiredAttributePoints: constants.character.skill.level1.REQUIRED_ATTRIBUTE_POINTS,
                    value: charisma.get('value')
                }),
                new CharacterSkillModel({ 
                    name: 'Recruit', 
                    associatedAttribute: charisma,
                    associatedAttributeId: charisma.get('id'), 
                    cost: constants.character.skill.level2.COST,
                    description: 'Add a description',
                    requiredAttributePoints: constants.character.skill.level2.REQUIRED_ATTRIBUTE_POINTS,
                    value: charisma.get('value')
                }),
                new CharacterSkillModel({ 
                    name: 'Command', 
                    associatedAttribute: charisma,
                    associatedAttributeId: charisma.get('id'), 
                    cost: constants.character.skill.level3.COST,
                    description: 'Add a description',
                    requiredAttributePoints: constants.character.skill.level3.REQUIRED_ATTRIBUTE_POINTS,
                    value: charisma.get('value')
                }),
                new CharacterSkillModel({ 
                    name: 'Turn', 
                    associatedAttribute: charisma,
                    associatedAttributeId: charisma.get('id'), 
                    cost: constants.character.skill.level4.COST,
                    description: 'Add a description',
                    requiredAttributePoints: constants.character.skill.level4.REQUIRED_ATTRIBUTE_POINTS,
                    value: charisma.get('value')
                })
            ]);
        }

	});
	
	return CharacterModel;
});