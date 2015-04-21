define([
    // libraries
	'backbone',
    'jquery',
    // game
    'game/config',
    // views
    'views/modal'
], function(
    // libraries
    Backbone,
    $,
    // game
    config,
    // views
    ModalView
) {

	var EditCharacterGenderView = ModalView.extend({
		
		initialize: function (options) {
            this.initializeModal(ModalView, arguments);
            this.inheritModalEvents(ModalView);
            
            this.template = _.template($(options.template).html());
		},
        
        render: function () {
            this.modalContent.html(this.template(this.model.toJSON()));
            
            return this;
        },
        
        events: {
            'click .editCharacterGenderOption': 'selectGender'
        },
        
        selectGender: function (event) {
            this.model.set('gender', event.target.dataset.gender);
            this.close();
        }
        
	});
	
	return EditCharacterGenderView;
});