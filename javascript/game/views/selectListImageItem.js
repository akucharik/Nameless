define([
    // libraries
	'backbone',
    'jquery',
    // views
    'views/selectListItem',
    // templates
    'text!templates/selectListImageItem.html'
], function(
    // libraries
    Backbone,
    $,
    // views
    SelectListItemView,
    // templates
    selectListImageItemTemplate
) {

	var selectListImageItemView = SelectListItemView.extend({
		
		initialize: function (options) {
            this.inheritAncestor(SelectListItemView, arguments);
            this.template = _.template(selectListImageItemTemplate);
		}
        
	});
	
	return selectListImageItemView;
});