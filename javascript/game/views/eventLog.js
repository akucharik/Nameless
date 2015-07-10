define([
    // libraries
	'backbone',
    'jquery',
    'jqueryUIEffects',
    'marionette',
    'underscore',
    // views
    'views/eventLogItem',
    // templates
    'text!templates/eventLogItem.html'
], function(
    // libraries
    Backbone,
    $,
    jqueryUIEffects,
    Marionette,
    _,
    // views
    EventLogItemView,
    // templates
    eventLogItemTemplate
) {

	var EventLogView = Marionette.CollectionView.extend({
        
        onAddChild: function (childView) {
            if (this.el.scrollHeight > this.el.clientHeight) {
                this.$el.animate({
                    scrollTop: this.el.scrollHeight - this.el.clientHeight
                }, {
                    duration: 200,
                    easing: 'easeOutQuad'
                }).promise().done(
                    _.bind(this.animateChildView, this, childView)
                );
            }
            else {
                this.animateChildView(childView);
            }
        },
        
        add: function (model) {
            this.collection.add(model);
        },
        
        animateChildView: function (childView) {
            childView.$el.addClass('log-item-animate-in');
        }
        
	});
	
	return EventLogView;
});