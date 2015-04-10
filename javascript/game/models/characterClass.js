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
    
	var CharacterClassModel = Backbone.Model.extend({
		defaults: {
            associatedAttributeKey: '',
            description: '',
            key: '',
            name: '',
            // attribute start values
            strengthMaxStartValue: 0,
            strengthStartValue: 0,
            intelligenceMaxStartValue: 0,
            intelligenceStartValue: 0,
            charismaMaxStartValue: 0,
            charismaStartValue: 0,
            availableAttributePointsStartValue: 0
		},
        
        initialize: function (options) {
            var characterClass = constants.character.characterClass[this.get('key')];
            
            this.set({
                associatedAttributeKey: characterClass.ASSOCIATED_ATTRIBUTE_KEY,
                description: characterClass.DESCRIPTION,
                name: characterClass.NAME,
                // attribute start values
                strengthMaxStartValue: characterClass.STRENGTH_MAX_START_VALUE,
                strengthStartValue: characterClass.STRENGTH_START_VALUE,
                intelligenceMaxStartValue: characterClass.INTELLIGENCE_MAX_START_VALUE,
                intelligenceStartValue: characterClass.INTELLIGENCE_START_VALUE,
                charismaMaxStartValue: characterClass.CHARISMA_MAX_START_VALUE,
                charismaStartValue: characterClass.CHARISMA_START_VALUE,
                availableAttributePointsStartValue: characterClass.AVAILABLE_ATTRIBUTE_POINTS_START_VALUE
            });
        }

	});
	
	return CharacterClassModel;
});