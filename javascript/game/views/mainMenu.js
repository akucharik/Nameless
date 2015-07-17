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
            this.appCharacters = this.appChannel.request('get:characters');
            this.appGames = this.appChannel.request('get:games');
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
            this.appCharacters.length > 0 ? this.ui.newCharacter.show() : this.ui.newCharacter.hide();
            this.appGames.length > 0 ? this.ui.continueGame.show() : this.ui.continueGame.hide();
        },
        
        characters: function () {
            this.appChannel.request('set:state:characters');
        },
        
        continueGame: function () {
            this.appChannel.request('set:state:games');
        },
        
        newCharacter: function () {
            this.appChannel.request('set:state:newCharacter');
        },
        
        newGame: function () {
            this.appChannel.request('set:state:game');
        }
        
	});
	
	return MainMenuView;
});