define([
    // libraries
	'backbone',
    'jquery',
    // game
    'game/constants'
], function(
    // libraries
    Backbone,
    $,
    // game
    constants
) {

	var EditCharacterSkillView = Backbone.View.extend({
		
		initialize: function (options) {
            this.options = options;
            this.template = _.template($(this.options.template).html());
            this.$el.html(this.template(this.model.toJSON()));
            
            this.listenTo(this.model, 'change:enabled', this.render);
		},
        
        render: function () {
            this.model.get('enabled') ? this.$el.addClass('selected') : this.$el.removeClass('selected');
            
            return this;
        }
        
	});
	
	return EditCharacterSkillView;
});