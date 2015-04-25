define([
    // libraries
	'backbone',
    'jquery'
], function(
    // libraries
    Backbone,
    $
) {

	var EditCharacterClassView = Backbone.View.extend({
		
		initialize: function (options) {
            this.template = _.template($(options.template).html());
		},
        
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            
            return this;
        },
        
        // events
        events: {
            'click [data-character-class]': 'selectCharacterClass'
        },
        
        selectCharacterClass: function (event) {
            this.model.set('characterClass', event.target.dataset.characterClass);
        }
        
	});
	
	return EditCharacterClassView;
});