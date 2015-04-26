define([
    // libraries
	'backbone',
    'jquery',
    // views
    'views/characterClass'
], function(
    // libraries
    Backbone,
    $,
    // views
    CharacterClassView
) {

	var ScrollingSelectorView = Backbone.View.extend({
		
		initialize: function (options) {
            this.template = _.template($(options.template).html());
            this.contentSelector = options.contentSelector || '.scrollingSelectorContent';
            
            // animations
            this.animateInLeftClass = options.animateInLeftClass || 'scrolling-selector-animate-in-left';
            this.animateInRightClass = options.animateInRightClass || 'scrolling-selector-animate-in-right';
            this.animateOutLeftClass = options.animateOutLeftClass || 'scrolling-selector-animate-out-left';
            this.animateOutRightClass = options.animateOutRightClass || 'scrolling-selector-animate-out-right';
            this.isAnimating = false;
            
            // item view
            this.ItemView = options.itemView;
            this.itemViewTemplate = options.itemViewTemplate;
            
            // selected item
            this.selectedItemIndex = 0;
            this.selectedItemClass = options.selectedItemClass || 'selected';
            this.selectedItemSelector = '.' + this.selectedItemClass;
		},
        
        render: function () {
            this.$el.html(this.template());
            
            // cache DOM elements
            this.$content = this.$(this.contentSelector);
            
            this.collection.forEach(function (item) {
                if (_.isFunction(this.ItemView)) {
                    var itemView = new this.ItemView({
                        model: item,
                        tagName: 'li',
                        template: this.itemViewTemplate
                    }).render().$el.appendTo(this.$content);
                }
                else {
                    try {
                        throw new Error('itemView is not a function');
                    }
                    catch (error) {
                        console.error(error.message);
                    }
                }
                
            }, this);
            
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