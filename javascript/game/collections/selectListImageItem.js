define([
	// libraries
    'backbone',
    // models
    'models/selectListImageItem'
], function(
    // libraries
    Backbone,
    // models
    SelectListImageItemModel
) {
    
	var SelectListImageItemCollection = Backbone.Collection.extend({
        
        initialize: function () {

        },
        
        model: SelectListImageItemModel,
        
        mapItems: function (collection, mappings) {
            var items = [];

            for (var i = 0; i < collection.length; i++) {
                items.push(new SelectListImageItemModel({
                    value: collection.at(i).get(mappings.value),
                    x: collection.at(i).get(mappings.x),
                    y: collection.at(i).get(mappings.y)
                }));
            }

            return items;
        },
        
	});
	
	return SelectListImageItemCollection;
});