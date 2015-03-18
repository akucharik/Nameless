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
    
	var SkillModel = Backbone.Model.extend({
		defaults: {
            associatedAttribute: null,
            enabled: false,
            name: '',
            rank: constants.character.skill.rank.level1
		}

	});
	
	return SkillModel;
});