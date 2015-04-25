define([
    // libraries
	'backbone',
    'jquery'
], function(
    // libraries
    Backbone,
    $
) {

	var EditCharacterClassActionsView = Backbone.View.extend({
		
		initialize: function (options) {
            this.template = _.template($(options.template).html());
		},
        
        render: function () {
            this.$el.html(this.template());
        }
        
	});
	
	return EditCharacterClassActionsView;
});