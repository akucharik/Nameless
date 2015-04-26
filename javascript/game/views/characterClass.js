define([
	'backbone',
    'jquery'
], function(
    Backbone,
    $
) {

	var CharacterClassView = Backbone.View.extend({
		
		initialize: function (options) {
            this.template = _.template($(options.template).html());
		},
        
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            
            return this;
        }
        
	});
	
	return CharacterClassView;
});