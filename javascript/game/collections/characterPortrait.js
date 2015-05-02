define([
	// libraries
    'backbone',
    // game
    'game/config',
    // models
    'models/characterPortrait'
], function(
    // libraries
    Backbone,
    // game
    config,
    // models
    CharacterPortraitModel
) {
    
	var CharacterPortraitCollection = Backbone.Collection.extend({
        
        initialize: function (models) {
            if (!models) {
                config.character.portraits.forEach(function (portrait) {
                    this.add(new CharacterPortraitModel({ 
                        gender: portrait.gender,
                        id: portrait.id,
                        x: portrait.x,
                        y: portrait.y
                    }));
                }, this);
            }
        },
        
        model: CharacterPortraitModel
        
	});
	
	return CharacterPortraitCollection;
});