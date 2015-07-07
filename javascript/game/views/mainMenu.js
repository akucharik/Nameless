define([
    // libraries
	'backbone',
    'jquery',
    'marionette',
    // game
    'game/constants'
], function(
    // libraries
    Backbone,
    $,
    Marionette,
    // game
    constants
) {

	var MainMenuView = Marionette.ItemView.extend({
        
        ui: {
            characters: '#characters',
            continueGame: '#continueGame',
            newCharacter: '#newCharacter',
            newGame: '#newGame'
        },
        
        events: {
            'click @ui.continueGame': 'continueGame',
            'click @ui.newGame': 'newGame',
            'click @ui.characters': 'characters',
            'click @ui.newCharacter': 'newCharacter'
        },
        
        onRender: function () {
            this.model.get('savedGames').length > 0 ? this.ui.continueGame.show() : this.ui.continueGame.hide();
            this.model.get('savedCharacters').length > 0 ? this.ui.newCharacter.show() : this.ui.newCharacter.hide();
        },
        
        characters: function () {
            this.model.set('state', constants.home.state.CHARACTERS);
        },
        
        continueGame: function () {
            this.model.set('state', constants.home.state.GAMES);
        },
        
        newCharacter: function () {
            this.model.set('editCharacterSource', constants.editCharacter.source.MAIN_MENU);
            this.model.set('state', constants.home.state.EDIT_CHARACTER);
        },
        
        newGame: function () {
            this.model.set('state', constants.home.state.PLAY);
        }
        
	});
	
	return MainMenuView;
});