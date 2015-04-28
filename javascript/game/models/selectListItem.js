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
    
	var SelectListItemModel = Backbone.Model.extend({
		defaults: {
            animation: null,
            description: '',
            selected: false,
            text: '',
            value: null
		}
	});
	
	return SelectListItemModel;
});