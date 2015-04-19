define([
	// libraries
    'backbone',
    // game
    'game/config',
    // models
    'models/characterSkill'
], function(
    // libraries
    Backbone,
    // game
    config,
    // models
    CharacterSkillModel
) {
    
	var CharacterSkillCollection = Backbone.Collection.extend({
        
        initialize: function (models) {
            if (!models) {
                for (var skill in config.character.skills) {
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