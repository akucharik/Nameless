define([
	// libraries
    'controller'
], function(
    // libraries
    Controller
) {

	var CharacterController = Controller.extend({
		
		initialize: function () {
            this.listenTo(this.model.get('attributes'), 'change:value', this.updateSkills);
		},
        
        updateSkills: function (attribute) {
            this.model.get('skills').where({ associatedAttributeKey: attribute.get('key') }).forEach(function (skill) {
                skill.set('enabled', this.model.get('attributes').findWhere({ key: skill.get('associatedAttributeKey') }).get('value') >= skill.get('requiredAttributePoints') ? true : false);
            }, this);
        }
        
	});
	
	return CharacterController;
});