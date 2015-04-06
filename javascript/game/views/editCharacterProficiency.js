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

	var EditCharacterProficiencyView = Backbone.View.extend({
		
		initialize: function (options) {
            this.options = options;
            this.template = _.template($(this.options.template).html());
            this.$el.html(this.template(this.model.toJSON()));
            this.$proficiencyProficency = this.$('.proficiencyProficency');
            this.$proficiencyValue = this.$('.proficiencyValue');
            this.$proficiencyMaxValue = this.$('.proficiencyMaxValue');
            
            this.listenTo(this.model, 'change', this.render);
		},
        
        render: function () {
            if (this.model.get('enabled') === true) {
                this.$el.addClass('selected')
                this.$proficiencyProficency.show();
            } 
            else {
                this.$el.removeClass('selected');
                this.$proficiencyProficency.hide();
            }
            
            this.$proficiencyValue.html(this.model.get('value'));
            this.$proficiencyMaxValue.html(this.model.get('maxValue'));
            
            return this;
        }
        
	});
	
	return EditCharacterProficiencyView;
});