define([
    // libraries
	'backbone',
    'jquery',
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
    Backbone,
    $,
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
                case constants.home.state.CHARACTERS:
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
                            model: this.model,
                            template: _.template(mainMenuTemplate)
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