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
            this.elParent = this.options.elParent;
            this.$el.html(this.template(this.model.toJSON()));
            this.$gameMenu = this.$(this.options.elGameMenu);
            
            this.listenTo(this.model, 'change:playState', this.render);
            this.$el.appendTo(this.elParent);
		},
        
        events: {
            'click #gameMenuButton': 'onMenuOpen',
            'click #quitGame': 'onQuit',
            'click #resumeGame': 'onMenuClose',
            'click #saveGame': 'onSave'
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
            this.remove();
            
            return this;
        },
        
        onSave: function () {
            alert('Save game');
        },
        
        render: function () {
            this.model.get('playState') === constants.play.state.MENU ? this.$gameMenu.show() : this.$gameMenu.hide();
            
            return this;
        }
        
	});
	
	return GameMenuView;
});