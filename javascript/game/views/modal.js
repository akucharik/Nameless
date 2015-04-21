define([
	'backbone',
    'jquery'
], function(
    Backbone,
    $
) {

	var ModalView = Backbone.View.extend({
		
		initialize: function (options) {
            this.modalTemplate = _.template($(options.modalTemplate).html());
            this.$el.html(this.modalTemplate(this.model.toJSON()));
            this.modalContent = this.$('#modalContent');
		},
        
        events: {
            'click #modalClose': 'close',
        },
        
        initializeModal: function (modal, arguments) {
            modal.prototype.initialize.apply(this, arguments);
        },
        
        inheritModalEvents: function (modal) {
            var modalEvents = modal.prototype.events;
            
            if(_.isFunction(modalEvents)) {
                modalEvents = modalEvents();
            }
            
            this.events = _.extend({}, modalEvents, this.events);
        },
        
        close: function () {
            this.remove();
        }
        
	});
	
	return ModalView;
});