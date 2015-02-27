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
            this.$el.html(this.template(this.model.toJSON()));
            this.$gameMenu = $(this.options.elGameMenu);
            
            this.listenTo(this.model, 'change:state', this.render);
            this.listenTo(this.model, 'change:playState', this.renderMenu);
            this.render();
		},
        
        events: {
            'click #gameMenuButton': 'onMenuOpen',
            'click #returnToGame': 'onMenuClose',
            'click #quitGame': 'onQuit'
        },
        
        onMenuOpen: function () {
            this.model.set('playState', constants.play.state.MENU);
            
            return this;
        },
        
        onMenuClose: function () {
            this.model.set('playState', constants.play.state.PLAY);
            
            return this;
        },
        
        onQuit: function () {
            this.model.set('state', constants.home.state.MAIN_MENU);
            this.model.set('playState', constants.play.state.DEAD);
            
            return this;
        },
        
        render: function () {
            this.model.get('state') === constants.home.state.PLAY ? this.$el.show() : this.$el.hide();
            
            return this;
        },
        
        renderMenu: function () {
            this.model.get('playState') === constants.play.state.MENU ? this.$gameMenu.show() : this.$gameMenu.hide();
            
            return this;
        }
        
	});
	
	return GameMenuView;
});