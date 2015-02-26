define([
	'backbone',
    'jquery',
    'constants'
], function(
    Backbone,
    $,
    constants
) {

    var GameView = Backbone.View.extend({
        initialize: function () {
            this.listenTo(this.model, 'change:state', this.render);
		},
        
        events: {
            'click #quitGame': 'quitGame'
        },
        
        quitGame: function () {
            this.model.set('state', constants.home.state.MAIN_MENU);
        },
        
        render: function () {
            if (this.model.get('state') === constants.home.state.GAME) { 
                this.$el.show();
            }
            else {
                this.$el.hide();
            }
            
            return this;
        }
    });
        
	return GameView;
});