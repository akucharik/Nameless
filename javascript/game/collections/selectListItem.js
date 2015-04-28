define([
	// libraries
    'backbone',
    // game
    'game/config',
    // models
    'models/selectListItem'
], function(
    // libraries
    Backbone,
    // game
    config,
    // models
    SelectListItemModel
) {
    
	var SelectListItemCollection = Backbone.Collection.extend({
        
        initialize: function () {

        },
        
        model: SelectListItemModel
        
	});
	
	return SelectListItemCollection;
});