define([
	'backbone',
    'jquery',
    'constants'
], function(
    Backbone,
    $,
    constants
) {

	var MainMenuView = Backbone.View.extend({
		
		initialize: function (options) {
            this.options = options;
            this.template = _.template($(this.options.template).html());
            
            this.listenTo(this.model, 'change:state', this.render);
            this.render();
		},
        
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            this.$continueGame = this.$el.find('#continueGame');
            this.$editCharacter = this.$el.find('#editCharacter');
            this.model.get('savedGames').length > 0 ? this.$continueGame.show() : this.$continueGame.hide();
            this.model.get('savedCharacters').length > 0 ? this.$editCharacter.show() : this.$editCharacter.hide();
            
            if (this.model.get('state') === constants.home.state.MAIN_MENU) { 
                this.$el.show();
            }
            else {
                this.$el.hide();
            }
            
            return this;
        },
        
        events: {
            'click #continueGame': 'continueGame',
            'click #newGame': 'newGame',
            'click #editCharacter': 'editCharacter',
            'click #newCharacter': 'newCharacter'
        },
        
        continueGame: function () {
            //window.location.href = 'game.html';
        },
        
        newGame: function () {
            //window.location.href = 'game.html';
        },
        
        editCharacter: function () {
            this.model.set('state', constants.home.state.CHARACTERS);
        },
        
        newCharacter: function () {
            this.model.set('state', constants.home.state.CHARACTERS);
        }
        
	});
	
	return MainMenuView;
});