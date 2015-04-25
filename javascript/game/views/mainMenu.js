define([
    // libraries
	'backbone',
    'jquery',
    // game
    'game/constants'
], function(
    // libraries
    Backbone,
    $,
    // game
    constants
) {

	var MainMenuView = Backbone.View.extend({
		
		initialize: function (options) {
            this.options = options;
            this.template = _.template($(this.options.template).html());
		},
        
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            this.$continueGame = this.$el.find('#continueGame');
            this.$editCharacter = this.$el.find('#editCharacter');
            this.model.get('savedGames').length > 0 ? this.$continueGame.show() : this.$continueGame.hide();
            this.model.get('savedCharacters').length > 0 ? this.$editCharacter.show() : this.$editCharacter.hide();
            
            return this;
        },
        
        events: {
            'click #continueGame': 'continueGame',
            'click #newGame': 'newGame',
            'click #characters': 'onCharactersClick',
            'click #newCharacter': 'newCharacter'
        },
        
        continueGame: function () {
            this.model.set('state', constants.home.state.GAMES);
        },
        
        newGame: function () {
            this.model.set('state', constants.home.state.PLAY);
        },
        
        onCharactersClick: function () {
            this.model.set('state', constants.home.state.CHARACTERS);
        },
        
        newCharacter: function () {
            this.model.set('editCharacterMode', constants.editCharacter.mode.CREATE);
            this.model.set('editCharacterSource', constants.editCharacter.source.MAIN_MENU);
            this.model.set('state', constants.home.state.EDIT_CHARACTER);
        }
        
	});
	
	return MainMenuView;
});