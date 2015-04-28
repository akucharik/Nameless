define([
    // libraries
	'backbone',
    'jquery',
    // game
    'game/constants',
    // templates
    'text!templates/selectListItem.html'
], function(
    // libraries
    Backbone,
    $,
    // game
    constants,
    // templates
    selectListItemTemplate
) {

	var selectListItemView = Backbone.View.extend({
		
		initialize: function (options) {
            this.template = _.template(selectListItemTemplate);
            
            // animations
            this.animateInLeftClass = options.animateInLeftClass || 'scrolling-selector-animate-in-left';
            this.animateInRightClass = options.animateInRightClass || 'scrolling-selector-animate-in-right';
            this.animateOutLeftClass = options.animateOutLeftClass || 'scrolling-selector-animate-out-left';
            this.animateOutRightClass = options.animateOutRightClass || 'scrolling-selector-animate-out-right';
            
            this.selectedClass = 'selected';
            
            this.setElement(document.createElement('li'));
            this.listenTo(this.model, 'change:animation', this.setAnimationClass);
            this.listenTo(this.model, 'change:selected', this.setSelectedClass);
		},
        
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            
            return this;
        },
        
        // events
        setAnimationClass: function () {
            var animationClass = '';
            
            switch (this.model.get('animation')) {
                case constants.animation.IN_LEFT:
                    animationClass = this.animateInLeftClass;
                    break;
                case constants.animation.IN_RIGHT:
                    animationClass = this.animateInRightClass;
                    break;
                case constants.animation.OUT_LEFT:
                    animationClass = this.animateOutLeftClass;
                    break;
                case constants.animation.OUT_RIGHT:
                    animationClass = this.animateOutRightClass;
                    break;
            }
            
            this.$el.removeClass();
            this.$el.addClass(animationClass);
        },
        
        setSelectedClass: function () {
            if (this.model.get('selected')) {
                this.$el.addClass(this.selectedClass);
            }
        }
        
	});
	
	return selectListItemView;
});