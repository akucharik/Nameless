define([
    // libraries
	'backbone',
    'jquery'
], function(
    // libraries
    Backbone,
    $
) {

	var EditCharacterClassDescriptionView = Backbone.View.extend({
		
		initialize: function (options) {
            this.template = _.template(options.template);
		},
        
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            
            return this;
        }
        
	});
	
	return EditCharacterClassDescriptionView;
});