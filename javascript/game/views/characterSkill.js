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

	var CharacterSkillView = Backbone.View.extend({
		
		initialize: function (options) {
            this.options = options;
            this.template = _.template($(this.options.template).html());
            this.$el.html(this.template(this.model.toJSON()));
            
            this.listenTo(this.model.get('associatedAttribute'), 'change', this.render);
            this.render();
		},
        
        render: function () {
            this.update();
            this.model.get('enabled') ? this.$el.addClass('selected') : this.$el.removeClass('selected');
            
            return this;
        },
        
        update: function () {
            this.model.set('enabled', this.model.get('associatedAttribute').get('value') >= this.model.get('requiredAttributePoints') ? true : false);
            
            return this;
        }
        
	});
	
	return CharacterSkillView;
});