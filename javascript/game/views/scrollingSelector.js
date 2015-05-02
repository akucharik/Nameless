define([
    // libraries
	'backbone',
    'containerview',
    'jquery',
    // game
    'game/constants',
    // models
    'models/selectListItem',
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
    // models
    SelectListItemModel,
    // views
    SelectListItemView,
    // templates
    scrollingSelectorTemplate
) {

	var ScrollingSelectorView = ContainerView.extend({
		
		initialize: function (options) {
            this.attribute = options.attribute;
            this.className = 'scrolling-selector';
            this.listSelector = options.listSelector || '.scrollingSelectorList';
            this.template = _.template(scrollingSelectorTemplate);
            
            // animations
            this.isAnimating = false;
            
            // list item view
            this.list = null;
            this.ListItemView = options.listItemView || SelectListItemView;
            
            this.listenTo(this.collection, 'change:selected', this.setAttribute);
            
            if (this.model.get(this.attribute)) {
                this.collection.findWhere({ value: this.model.get(this.attribute) }).set('selected', true);
            }
            else {
                this.collection.at(0).set('selected', true);
            }
		},
        
        render: function () {
            this.$el.html(this.template());
            this.$el.addClass(this.className);            
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
        
        mapSelectListItems: function (collection, mappings) {
            var items = [];

            for (var i = 0; i < collection.length; i++) {
                items.push(new SelectListItemModel({
                    description: collection.at(i).get(mappings.description),
                    text: collection.at(i).get(mappings.text),
                    value: collection.at(i).get(mappings.value)
                }));
            }

            return items;
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
        },
        
        setAttribute: function () {
            if (this.getSelectedItem()) {
                this.model.set(this.attribute, this.getSelectedItem().get('value'));
            }
        }
        
	});
	
	return ScrollingSelectorView;
});