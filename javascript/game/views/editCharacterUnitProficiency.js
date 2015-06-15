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

	var EditCharacterUnitProficiencyView = Backbone.View.extend({
		
		initialize: function (options) {
            this.options = options;
            this.template = _.template($(this.options.template).html());
            this.$el.html(this.template(this.model.toJSON()));
            this.$unitProficiency = this.$('.unitProficiency');
            this.$unitProficiencyValue = this.$('.unitProficiencyValue');
            this.$unitProficiencyMaxValue = this.$('.unitProficiencyMaxValue');
            
            this.listenTo(this.model, 'change', this.render);
		},
        
        render: function () {
            if (this.model.get('enabled') === true) {
                this.$el.addClass('selected')
            } 
            else {
                this.$el.removeClass('selected');
            }
            
            this.$unitProficiencyValue.html(this.model.getValue());
            this.$unitProficiencyMaxValue.html(this.model.get('maxValue'));
            
            return this;
        }
        
	});
	
	return EditCharacterUnitProficiencyView;
});