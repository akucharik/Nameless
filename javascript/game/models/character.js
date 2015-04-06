define([
    // libraries
	'backbone',
    // game
    'game/constants',
    //collections
    'collections/characterAttribute',
    'collections/characterProficiency',
    'collections/characterSkill'
], function(
    // libraries
    Backbone,
    // game
    constants,
    // collections
    CharacterAttributeCollection,
    CharacterProficiencyCollection,
    CharacterSkillCollection
) {
    
	var CharacterModel = Backbone.Model.extend({
		defaults: function () {
            return {
                // Basic
                name: '',
                gender: constants.character.gender.MALE,
                type: constants.character.type.STOCK,

                // Attributes
                attributes: new CharacterAttributeCollection(),
                availableAttributePoints: 0,

                // Proficiencies
                proficiencies: new CharacterProficiencyCollection(),
                
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
            
            // initialize proficiencies
            if (options.proficiencies && _.isArray(options.proficiencies)) {
                this.set('proficiencies', new CharacterProficiencyCollection(options.proficiencies));
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
            
            if (response.proficiencies && this.get('proficiencies') instanceof Backbone.Collection) {
                this.get('proficiencies').reset(response.proficiencies);
                delete response.proficiencies;
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