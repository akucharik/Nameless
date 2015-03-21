define([
    // libraries
	'backbone',
    // game
    'game/constants'
], function(
    // libraries
    Backbone,
    // game
    constants
) {
    
	var CharacterSkillModel = Backbone.Model.extend({
		defaults: {
            associatedAttribute: null,
            associatedAttributeName: '',
            cost: 0,
            description: '',
            enabled: false,
            name: '',
            requiredAttributePoints: 0,
            value: 0
		},
        
        initialize: function () {
            this.update();
            this.listenTo(this.get('associatedAttribute'), 'change:value', this.update);
        },
        
        update: function () {
            this.set('enabled', this.get('associatedAttribute').get('value') >= this.get('requiredAttributePoints') ? true : false);
        }

	});
	
	return CharacterSkillModel;
});