define([
    // libraries
	'backbone',
    'containerview',
    'jquery',
    // game
    'game/constants',
    // views
    'views/selectListItem',
    // templates
    'text!templates/scrollingSelector.html'
], function(
    // libraries
    Backbone,
    ContainerView,
    $,
    // game
    constants,
    // views
    SelectListItemView,
    // templates
    scrollingSelectorTemplate
) {

	var ScrollingSelectorView = ContainerView.extend({
		
		initialize: function (options) {
            this.template = _.template(scrollingSelectorTemplate);
            this.listSelector = options.listSelector || '.scrollingSelectorList';
            
            // animations
            this.isAnimating = false;
            
            // list item view
            this.list = null;
            this.ListItemView = options.listItemView || SelectListItemView;
		},
        
        render: function () {
            this.$el.html(this.template());
            
            this.list = this.createSubcontainer(this.listSelector);
            
            if (this.collection.length) {
                if (_.isFunction(this.ListItemView)) {
                    this.list.open(this.ListItemView, this.collection);
                }
                else {
                    try {
                        throw new Error('listItemView is not a function');
                    }
                    catch (error) {
                        console.error(error.message);
                    }
                }
            }
            
            if (_.isUndefined(this.getSelectedItem())) {
                this.collection.at(0).set('selected', true);
            }
            
            return this;
        },
        
        getSelectedItem: function () {
            return this.collection.findWhere({ selected: true });
        },
        
        getPrevItem: function () {
            return (this.collection.indexOf(this.getSelectedItem()) - 1) >= 0 ? (this.collection.at(this.collection.indexOf(this.getSelectedItem()) - 1)) : (this.collection.at(this.collection.length - 1));
        },
        
        getNextItem: function () {
            return (this.collection.indexOf(this.getSelectedItem()) + 1) <= (this.collection.length - 1) ? (this.collection.at(this.collection.indexOf(this.getSelectedItem()) + 1)) : this.collection.at(0);
        },
        
        // events
        events: {
            'click .scrollingSelectorPrev': 'prev',
            'click .scrollingSelectorNext': 'next',
            
            // animations
            'webkitAnimationStart': 'onAnimationStart',
            'webkitAnimationEnd': 'onAnimationEnd',
            'animationstart': 'onAnimationStart',
            'animationend': 'onAnimationEnd',
        },
        
        prev: function () {
            if (!this.isAnimating) {
                var prevItem = this.getPrevItem();
                
                this.getSelectedItem().set({
                    animation: constants.animation.OUT_RIGHT,
                    selected: false
                });
                prevItem.set({
                    animation: constants.animation.IN_LEFT,
                    selected: true
                });
            }
        },
        
        next: function () {
            if (!this.isAnimating) {
                var nextItem = this.getNextItem();
                
                this.getSelectedItem().set({
                    animation: constants.animation.OUT_LEFT,
                    selected: false
                });
                nextItem.set({
                    animation: constants.animation.IN_RIGHT,
                    selected: true
                });
            }
        },
        
        onAnimationStart: function () {
            this.isAnimating = true;
        },
        
        onAnimationEnd: function () {
            this.isAnimating = false;
        }
        
	});
	
	return ScrollingSelectorView;
});