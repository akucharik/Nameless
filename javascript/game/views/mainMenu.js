define([
    // libraries
    'marionette',
    'radio',
    // game
    'game/constants'
], function(
    // libraries
    Marionette,
    Radio,
    // game
    constants
) {

	var MainMenuView = Marionette.ItemView.extend({
        
        initialize: function () {
            this.appChannel = Radio.channel(constants.channel.app);
            this.appModel = this.appChannel.request('getModel');
        },
        
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
            this.appModel.get('savedGames').length > 0 ? this.ui.continueGame.show() : this.ui.continueGame.hide();
            this.appModel.get('savedCharacters').length > 0 ? this.ui.newCharacter.show() : this.ui.newCharacter.hide();
        },
        
        characters: function () {
            this.appModel.set('state', constants.app.state.CHARACTERS);
        },
        
        continueGame: function () {
            this.appModel.set('state', constants.app.state.GAMES);
        },
        
        newCharacter: function () {
            this.appModel.set('editCharacterSource', constants.editCharacter.source.MAIN);
            this.appModel.set('state', constants.app.state.CHARACTER);
        },
        
        newGame: function () {
            this.appModel.set('state', constants.app.state.GAME);
        }
        
	});
	
	return MainMenuView;
});