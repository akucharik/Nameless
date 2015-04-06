define([
	// libraries
    'backbone',
    // game
    'game/constants',
    // models
    'models/characterProficiency'
], function(
    // libraries
    Backbone,
    // game
    constants,
    // models
    CharacterProficiencyModel
) {
    
	var CharacterProficiencyCollection = Backbone.Collection.extend({
        
        initialize: function (models) {
            if (!models) {
                for (var proficiency in constants.character.proficiency) {
                    this.add(new CharacterProficiencyModel({ 
                        key: proficiency
                    }));
                }
            }
        },
        
        model: CharacterProficiencyModel
        
	});
	
	return CharacterProficiencyCollection;
});