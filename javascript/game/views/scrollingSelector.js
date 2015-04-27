define([
    // libraries
	'backbone',
    'containerview',
    'jquery',
    // views
    'views/characterClass',
    // templates
    "text!templates/scrollingSelector.html"
], function(
    // libraries
    Backbone,
    ContainerView,
    $,
    // views
    CharacterClassView,
    // templates
    scrollingSelectorTemplate
) {

	var ScrollingSelectorView = ContainerView.extend({
		
		initialize: function (options) {
            this.template = _.template(scrollingSelectorTemplate);
            this.listSelector = options.listSelector || '.scrollingSelectorList';
            
            // animations
            this.animateInLeftClass = options.animateInLeftClass || 'scrolling-selector-animate-in-left';
            this.animateInRightClass = options.animateInRightClass || 'scrolling-selector-animate-in-right';
            this.animateOutLeftClass = options.animateOutLeftClass || 'scrolling-selector-animate-out-left';
            this.animateOutRightClass = options.animateOutRightClass || 'scrolling-selector-animate-out-right';
            this.isAnimating = false;
            
            // list item view
            this.ListItemView = options.listItemView;
            
            // selected item
            this.selectedItemIndex = 0;
            this.selectedItemClass = options.selectedItemClass || 'selected';
            this.selectedItemSelector = '.' + this.selectedItemClass;
		},
        
        render: function () {
            this.$el.html(this.template());
            
            // cache DOM elements
            this.$content = this.$(this.listSelector);
            
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
            
            this.setSelectedItemClass();
            
            return this;
        },
        
        getSelectedItem: function () {
            return this.$content.children().eq(this.selectedItemIndex);
        },
        
        setSelectedItemClass: function () {
            this.getSelectedItem().addClass(this.selectedItemClass);
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
                this.getSelectedItem().addClass(this.animateOutRightClass);
                this.selectedItemIndex = (this.selectedItemIndex - 1) >= 0 ? (this.selectedItemIndex - 1) : (this.collection.length - 1);
                this.getSelectedItem().addClass(this.animateInLeftClass);
            }
        },
        
        next: function () {
            if (!this.isAnimating) {
                this.getSelectedItem().addClass(this.animateOutLeftClass);
                this.selectedItemIndex = (this.selectedItemIndex + 1) <= (this.collection.length - 1) ? (this.selectedItemIndex + 1) : 0;
                this.getSelectedItem().addClass(this.animateInRightClass);
            }
        },
        
        onAnimationStart: function () {
            this.isAnimating = true;
        },
        
        onAnimationEnd: function () {
            this.isAnimating = false;
            $(event.target).removeClass();
            this.setSelectedItemClass();
        }
        
	});
	
	return ScrollingSelectorView;
});