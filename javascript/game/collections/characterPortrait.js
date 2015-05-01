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
                config.character.portrait.forEach(function (portrait) {
                    this.add(new CharacterPortraitModel({ 
                        gender: portrait.gender,
                        url: portrait.url
                    }));
                }, this);
            }
        },
        
        model: CharacterPortraitModel
        
	});
	
	return CharacterPortraitCollection;
});