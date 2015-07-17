define([
    // libraries
    'marionette',
    'underscore',
    //game
    'game/constants',
    // models
    'models/editCharacter',
    // views
    'views/characters',
    'views/editCharacter',
    'views/mainMenu',
    // templates
    'text!templates/editCharacter.html',
    'text!templates/mainMenu.html'
], function(
    // libraries
    Marionette,
    _,
    //game
    constants,
    // models
    EditCharacterModel,
    // views
    CharactersView,
    EditCharacterView,
    MainMenuView,
    // templates
    editCharacterTemplate,
    mainMenuTemplate
) {

    'use strict';
    
    var AppLayoutView = Marionette.LayoutView.extend({
        initialize: function () {
            this.listenTo(this.model, 'change:state', this.onRender);
        },

        onRender: function () {
            switch (this.model.get('state')) {
                case constants.app.state.CHARACTERS:
                    this.showChildView('main', 
                        new CharactersView({
                            gameContainer: '#gameContainer',
                            listContainer: '#characterList',
                            model: this.model,
                            tableBody: '#characterListItems',
                            template: '#charactersTemplate',
                            window: window
                        })
                    );
                    break;
                    
                case constants.app.state.EDIT_CHARACTER:
                    this.showChildView('main', 
                        new EditCharacterView({
                            actionsId: 'editCharacterManagerActions',
                            contentId: 'editCharacterManagerContent',
                            model: new EditCharacterModel({
                                gameModel: this.model,
                                savedCharacters: this.model.get('savedCharacters'),
                                source: constants.editCharacter.source.CHARACTERS
                            }),
                            template: editCharacterTemplate
                        })
                    );
                    break;

                case constants.app.state.NEW_CHARACTER:
                    this.showChildView('main', 
                        new EditCharacterView({
                            actionsId: 'editCharacterManagerActions',
                            contentId: 'editCharacterManagerContent',
                            model: new EditCharacterModel({
                                gameModel: this.model,
                                savedCharacters: this.model.get('savedCharacters'),
                                source: constants.editCharacter.source.MAIN
                            }),
                            template: editCharacterTemplate
                        })
                    );
                    break;

                case constants.app.state.GAMES:
                    alert('Render games');
                    break;

                case constants.app.state.MAIN:
                    this.showChildView('main', 
                        new MainMenuView({
                            template: _.template(mainMenuTemplate)
                        })
                    );
                    break;

                case constants.app.state.GAME:
                    alert('Render play');
                    break;
            }
        }
    });
	
	return AppLayoutView;
});