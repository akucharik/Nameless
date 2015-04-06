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
    
	var CharacterProficiencyModel = Backbone.Model.extend({
		defaults: {
            associatedAttributeKey: '',
            description: '',
            enabled: false,
            key: '',
            maxValue: 0,
            name: '',
            requiredAttributePoints: 0,
            value: 0
		},
        
        initialize: function (options) {
            var proficiency = constants.character.proficiency[this.get('key')]
            
            this.set({
                associatedAttributeKey: proficiency.ASSOCIATED_ATTRIBUTE_KEY,
                description: proficiency.DESCRIPTION,
                name: proficiency.NAME, 
                requiredAttributePoints: proficiency.REQUIRED_ATTRIBUTE_POINTS
            });
        }

	});
	
	return CharacterProficiencyModel;
});