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
            this.$skillProficency = this.$('.skillProficency');
            this.$skillValue = this.$('.skillValue');
            this.$skillMaxValue = this.$('.skillMaxValue');
            
            this.listenTo(this.model, 'change', this.render);
		},
        
        render: function () {
            if (this.model.get('enabled') === true) {
                this.$el.addClass('selected')
                this.$skillProficency.show();
            } 
            else {
                this.$el.removeClass('selected');
                this.$skillProficency.hide();
            }
            
            this.$skillValue.html(this.model.getValue());
            this.$skillMaxValue.html(this.model.get('maxValue'));
            
            return this;
        }
        
	});
	
	return EditCharacterSkillView;
});