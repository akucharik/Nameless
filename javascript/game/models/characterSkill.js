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
    
	var CharacterSkillModel = Backbone.Model.extend({
		defaults: {
            associatedAttribute: null,
            cost: 0,
            description: '',
            enabled: false,
            level: constants.character.skill.level.level1,
            name: '',
            value: 0
		}

	});
	
	return CharacterSkillModel;
});