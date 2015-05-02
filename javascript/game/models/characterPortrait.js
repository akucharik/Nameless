define([
    // libraries
	'backbone'
], function(
    // libraries
    Backbone
) {
    
	var CharacterPortraitModel = Backbone.Model.extend({
		defaults: {
            gender: null,
            id: null,
            x: 0,
            y: 0
		}

	});
	
	return CharacterPortraitModel;
});