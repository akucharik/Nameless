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
            associatedAttribute: '',
            enabled: false,
            rank: constants.character.skill.rank.level1,
            name: ''
		},
        
        initialize: function () {
            
        }

	});
	
	return SkillModel;
});