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

	var SkillView = Backbone.View.extend({
		
		initialize: function (options) {
            this.options = options;
            this.characterModel = this.options.characterModel;
            this.template = _.template($(this.options.template).html());
            
            this.listenTo(this.characterModel, 'change', this.render);
            this.render();
		},
        
        render: function () {
            this.update();
            this.model.get('enabled') ? this.$el.addClass('selected') : this.$el.removeClass('selected');
            this.$el.html(this.template(this.model.toJSON()));
            
            return this;
        },
        
        update: function () {
            this.model.set('enabled', this.characterModel.get(this.model.get('associatedAttribute').PROPERTY_NAME) >= this.model.get('rank').requiredAttributePoints ? true : false);
            
            return this;
        }
        
	});
	
	return SkillView;
});