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
            this.$skillRatio = this.$('.skillRatio');
            this.$skillValue = this.$('.skillValue');
            this.$skillMaxValue = this.$('.skillMaxValue');
            this.$skillProgressBarValue = this.$('.skillProgressBarValue');
            this.$skillProgressBarMaxValue = this.$('.skillProgressBarMaxValue');
            
            this.listenTo(this.model, 'change', this.render);
		},
        
        render: function () {
            if (this.model.get('enabled') === true) {
                this.$el.addClass('selected')
                this.$skillRatio.css('visibility', 'visible');
                this.$skillValue.html(this.model.getValue());
                this.$skillMaxValue.html(this.model.get('maxValue'));
                this.$skillProgressBarValue.width(this.model.getValue() + '%');
                this.$skillProgressBarMaxValue.width(this.model.get('maxValue') + '%');
            } 
            else {
                this.$el.removeClass('selected');
                this.$skillRatio.css('visibility', 'hidden');
                //this.$skillValue.html(0);
                //this.$skillMaxValue.html(0);
                this.$skillProgressBarValue.width(0 + '%');
                this.$skillProgressBarMaxValue.width(0 + '%');    
            }
            
            return this;
        }
        
	});
	
	return EditCharacterSkillView;
});