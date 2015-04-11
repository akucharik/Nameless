define([
    // libraries
    'backbone',
    'containerview',
    'jquery',
    //game
    'game/constants',
    'game/eventLog',
    // controllers
    'controllers/savedCharacters',
    // models
    'models/character',
    'models/home',
    // views
    'views/characters',
    'views/editCharacterClass',
    'views/editCharacter',
    'views/game',
    'views/mainMenu'
], function(
    // libraries
    Backbone,
    ContainerView,
    $,
    // game
    constants,
    eventLog,
    // controllers
    SavedCharactersController,
    // models
    CharacterModel,
    HomeModel,
    // views
    CharactersView,
    EditCharacterClassView,
    EditCharacterView,
    GameView,
    MainMenuView
) {
    
    var game = {};
    game.initialize = function () {
        
        var homeModel = new HomeModel();
        homeModel.set('savedCharactersController', new SavedCharactersController({
            collection: homeModel.get('savedCharacters')
        }));
        
        // initialize starting game data
        if (!localStorage.Characters) {
            homeModel.get('savedCharacters').add([
                new CharacterModel({ name: 'Test'}),
                new CharacterModel({ name: 'Aaron', attributes: [{ key: 'strength', value: 8 }, { key: 'intelligence', value: 7 }, { key: 'charisma', value: 9 }]}),
                new CharacterModel({ name: 'Chris', attributes: [{ key: 'strength', value: 8 }, { key: 'intelligence', value: 9 }, { key: 'charisma', value: 7 }]}),
//                new CharacterModel({ name: 'Adam', strength: 8, intelligence: 9, charisma: 7 }),
//                new CharacterModel({ name: 'Sun Ce', strength: 9, intelligence: 9, charisma: 8 }),
//                new CharacterModel({ name: 'Cao Cao', strength: 7, intelligence: 9, charisma: 5 }),
//                new CharacterModel({ name: 'Liu Bei', strength: 6, intelligence: 9, charisma: 9 }),
//                new CharacterModel({ name: 'Dong Zhuo', strength: 7, intelligence: 8, charisma: 3 }),
//                new CharacterModel({ name: 'Sun Jian', strength: 8, intelligence: 9, charisma: 6 }),
//                new CharacterModel({ name: 'Guan Yu', strength: 9, intelligence: 8, charisma: 8 }),
//                new CharacterModel({ name: 'Zhuge Liang', strength: 6, intelligence: 9, charisma: 6 }),
//                new CharacterModel({ name: 'Cao Ren', strength: 8, intelligence: 5, charisma: 5 }),
//                new CharacterModel({ name: 'Lu Bu', strength: 10, intelligence: 2, charisma: 3 }),
//                new CharacterModel({ name: 'Ma Chao', strength: 9, intelligence: 6, charisma: 4 }),
//                new CharacterModel({ name: 'Taishi Ci', strength: 9, intelligence: 8, charisma: 7 }),
//                new CharacterModel({ name: 'Zhang Liao', strength: 9, intelligence: 7, charisma: 6 }),
//                new CharacterModel({ name: 'Zhou Yu', strength: 7, intelligence: 9, charisma: 8 })
            ]);
            
        }
        else {
            //console.log('about to fetch');
            homeModel.get('savedCharacters').fetch();
            //console.log('Characters after load: ', homeModel.get('savedCharacters'));
            //console.log(localStorage);
        }
        
        

//        var homeController = {};
//        _.extend(homeController, Backbone.Events);
//
//        homeController.newGame = function () {
//            var gameView = new GameView({
//                elParent: '#homeContainer',
//                className: 'canvas',
//                id: 'gameView',
//                model: homeModel,
//                tagName: 'div'
//            });
//        };
//
//        homeController.onStateChange = function (model) {
//            switch (model.get('state')) {
//                case constants.home.state.PLAY:
//                    homeController.newGame();
//                    break;
//            }
//        };
//
//        homeController.listenTo(homeModel, 'change:state', homeController.onStateChange);

        var GameView = ContainerView.extend({
            initialize: function () {
                this.listenTo(this.model, 'change:state', this.render);
                this.render();
            },
            
            render: function () {
                switch (this.model.get('state')) {
                    case constants.home.state.CHARACTERS:
                        this.open(new CharactersView({
                            className: 'characters-view',
                            gameContainer: '#gameContainer',
                            listContainer: '#characterList',
                            model: this.model,
                            tableBody: '#characterListItems',
                            template: '#charactersTemplate',
                            window: window
                        })).contentView.resizeTableScrollHeight();
                        break;
                        
                    case constants.home.state.EDIT_CHARACTER_CLASS:
                        this.open(new EditCharacterClassView({
                            className: 'edit-character-class-view',
                            model: this.model,
                            template: '#editCharacterClassTemplate'
                        }));
                        break;
                        
                    case constants.home.state.EDIT_CHARACTER:
                        this.open(new EditCharacterView({
                            className: 'edit-character-view',
                            model: this.model,
                            template: '#editCharacterTemplate'
                        }));
                        break;
                        
                    case constants.home.state.GAMES:
                        alert('Render games');
                        break;
                        
                    case constants.home.state.MAIN_MENU:
                        this.open(new MainMenuView({
                            className: 'main-menu-view',
                            model: this.model,
                            template: '#mainMenuTemplate'
                        }));
                        break;
                        
                    case constants.home.state.PLAY:
                        alert('Render play');
                        break;
                }
            }
        });
        
        var gameView = new GameView({
            el: '#homeContainer',
            model: homeModel
        });

        // TODO: remove exposed objects after development is complete
        window.homeModel = homeModel;
    }
    
    return game;
        
});