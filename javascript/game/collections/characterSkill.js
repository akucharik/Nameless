define([
	// libraries
    'backbone',
    // game
    'game/constants',
    // models
    'models/characterSkill'
], function(
    // libraries
    Backbone,
    // game
    constants,
    // models
    CharacterSkillModel
) {
    
	var CharacterSkillCollection = Backbone.Collection.extend({
        
        initialize: function (models) {
            if (!models) {
                for (var skill in constants.character.skill) {
                    this.add(new CharacterSkillModel({ 
                        key: skill
                    }));
                }
            }
        },
        
        model: CharacterSkillModel
        
	});
	
	return CharacterSkillCollection;
});