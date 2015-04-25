define([
    // libraries
	'backbone',
    // game
    'game/constants',
    //collections
    'collections/characterAttribute',
    'collections/characterUnitProficiency',
    'collections/characterSkill'
], function(
    // libraries
    Backbone,
    // game
    constants,
    // collections
    CharacterAttributeCollection,
    CharacterUnitProficiencyCollection,
    CharacterSkillCollection
) {
    
	var CharacterModel = Backbone.Model.extend({
		defaults: function () {
            return {
                // Basic
                characterClass: '',
                gender: constants.character.gender.MALE,
                name: '',
                type: constants.character.type.STOCK,

                // Attributes
                attributes: new CharacterAttributeCollection(),
                availableAttributePoints: 0,

                // Unit proficiencies
                unitProficiencies: new CharacterUnitProficiencyCollection(),
                
                // Skills
                skills: new CharacterSkillCollection(),

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
            }
		},
        
        initialize: function (options) {
            var options = options || {};
            
            // initialize attributes
            if (options.attributes && _.isArray(options.attributes)) {
                this.set('attributes', new CharacterAttributeCollection(options.attributes));
            }
            
            // initialize unit proficiencies
            if (options.unitProficiencies && _.isArray(options.unitProficiencies)) {
                this.set('unitProficiencies', new CharacterUnitProficiencyCollection(options.unitProficiencies));
            }
            
            // initialize skills
            if (options.skills && _.isArray(options.skills)) {
                this.set('skills', new CharacterSkillCollection(options.skills));
            }
            
            return this;
        },
        
        parse: function (response) {
            if (response.attributes && this.get('attributes') instanceof Backbone.Collection) {
                this.get('attributes').reset(response.attributes);
                delete response.attributes;
            }
            
            if (response.unitProficiencies && this.get('unitProficiencies') instanceof Backbone.Collection) {
                this.get('unitProficiencies').reset(response.unitProficiencies);
                delete response.unitProficiencies;
            }
            
            if (response.skills && this.get('skills') instanceof Backbone.Collection) {
                this.get('skills').reset(response.skills);
                delete response.skills;
            }
            
            return response;
        }

	});
	
	return CharacterModel;
});