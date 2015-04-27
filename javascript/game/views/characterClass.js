define([
    // libraries
	'backbone',
    'jquery',
    // templates
    "text!templates/characterClass.html"
], function(
    // libraries
    Backbone,
    $,
    // templates
    characterClassTemplate
) {

	var CharacterClassView = Backbone.View.extend({
		
		initialize: function () {
            this.template = _.template(characterClassTemplate);
            
            this.setElement(document.createElement('li'));
		},
        
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            
            return this;
        }
        
	});
	
	return CharacterClassView;
});