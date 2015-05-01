define([
    // libraries
	'backbone',
    // game
    'game/config'
], function(
    // libraries
    Backbone,
    // game
    config
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
            var characterClass = config.character.characterClass[this.get('key')];
            
            this.set({
                associatedAttributeKey: characterClass.associatedAttributeKey,
                description: characterClass.description,
                name: characterClass.name,
                // attribute start values
                strengthMaxStartValue: characterClass.strength.maxStartValue,
                strengthStartValue: characterClass.strength.startValue,
                intelligenceMaxStartValue: characterClass.intelligence.maxStartValue,
                intelligenceStartValue: characterClass.intelligence.startValue,
                charismaMaxStartValue: characterClass.charisma.maxStartValue,
                charismaStartValue: characterClass.charisma.startValue,
                availableAttributePointsStartValue: characterClass.availableAttributePoints.startValue
            });
        }

	});
	
	return CharacterClassModel;
});