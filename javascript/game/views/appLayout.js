define([
    // libraries
	'backbone',
    'jquery',
    'marionette',
    //game
    'game/constants',
    // models
    'models/editCharacter',
    // views
    'views/characters',
    'views/editCharacter',
    'views/mainMenu',
    // templates
    'text!templates/editCharacter.html'
], function(
    // libraries
    Backbone,
    $,
    Marionette,
    //game
    constants,
    // models
    EditCharacterModel,
    // views
    CharactersView,
    EditCharacterView,
    MainMenuView,
    // templates
    editCharacterTemplate
) {

    'use strict';
    
    var AppLayoutView = Marionette.LayoutView.extend({
        initialize: function () {
            this.listenTo(this.model, 'change:state', this.onRender);
        },

        onRender: function () {
            switch (this.model.get('state')) {
                case constants.home.state.CHARACTERS:
                    this.showChildView('main', 
                        new CharactersView({
                            className: 'characters-view',
                            gameContainer: '#gameContainer',
                            listContainer: '#characterList',
                            model: this.model,
                            tableBody: '#characterListItems',
                            template: '#charactersTemplate',
                            window: window
                        })
                    );
                    break;

                case constants.home.state.EDIT_CHARACTER:
                    this.showChildView('main', 
                        new EditCharacterView({
                            actionsId: 'editCharacterManagerActions',
                            contentId: 'editCharacterManagerContent',
                            model: new EditCharacterModel({
                                gameModel: this.model,
                                savedCharacters: this.model.get('savedCharacters'),
                                source: this.model.get('editCharacterSource')
                            }),
                            template: editCharacterTemplate
                        })
                    );
                    break;

                case constants.home.state.GAMES:
                    alert('Render games');
                    break;

                case constants.home.state.MAIN_MENU:
                    this.showChildView('main', 
                        new MainMenuView({
                            className: 'main-menu-view',
                            model: this.model,
                            template: '#mainMenuTemplate'
                        })
                    );
                    break;

                case constants.home.state.PLAY:
                    alert('Render play');
                    break;
            }
        }
    });
	
	return AppLayoutView;
});