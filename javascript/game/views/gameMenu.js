// @author      Adam Kucharik <akucharik@gmail.com>
// @copyright   2015 Adam Kucharik
// @license     

define([
	'backbone',
    'constants',
    'jquery'
], function (
    Backbone,
    constants,
    $
) {
    
    'use strict';

	var GameMenuView = Backbone.View.extend({
		
		initialize: function (options) {
            this.options = options;
            this.template = _.template($(this.options.template).html());
            
            this.listenTo(this.model, 'change:state', this.render);
            this.render();
		},
        
        events: {
            'click #quit': 'onQuit'
        },
        
        onQuit: function () {
            this.model.set('state', constants.home.state.MAIN_MENU);
            
            return this;
        },
        
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            
            if (this.model.get('state') === constants.home.state.PLAY) { 
                this.$el.show();
            }
            else {
                this.$el.hide();
            }
            
            return this;
        }
        
	});
	
	return GameMenuView;
});