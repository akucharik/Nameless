define([
    // libraries
	'backbone'
], function(
    // libraries
    Backbone
) {
    
	var CharacterPortraitModel = Backbone.Model.extend({
		defaults: {
            gender: '',
            url: '',
		}

	});
	
	return CharacterPortraitModel;
});