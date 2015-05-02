define([
    // libraries
	'backbone'
], function(
    // libraries
    Backbone
) {
    
	var SelectListImageItemModel = Backbone.Model.extend({
		defaults: {
            animation: null,
            selected: false,
            value: null,
            x: 0,
            y: 0
		}
	});
	
	return SelectListImageItemModel;
});