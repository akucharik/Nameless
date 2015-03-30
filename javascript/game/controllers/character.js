define([
	// libraries
    'controller'
], function(
    // libraries
    Controller
) {

	var CharacterController = Controller.extend({
		
		initialize: function () {
            this.listenTo(this.model, 'change:attributes', this.updateSkills);
		},
        
        updateSkills: function () {
            // for each attribute that was changed:
            // - get all skills related to that attribute
            // - update if they are enabled
            //this.set('enabled', this.get('associatedAttribute').get('value') >= this.get('requiredAttributePoints') ? true : false);
        }
        
	});
	
	return CharacterController;
});