define([
    // libraries
    'backbone',
    'containerview',
    'jquery',
    //game
    'game/constants',
    // models
    'models/character',
    'models/home',
    // views
    'views/characters',
    'views/game',
    'views/mainMenu'
], function(
    // libraries
    Backbone,
    ContainerView,
    $,
    // game
    constants,
    // models
    CharacterModel,
    HomeModel,
    // views
    CharactersView,
    GameView,
    MainMenuView
) {
    
    var game = {};
    game.initialize = function () {
        
        var homeModel = new HomeModel();

        homeModel.get('savedCharacters').add([
            new CharacterModel({ name: 'Aaron', strength: 81, intelligence: 92 }),
            new CharacterModel({ name: 'Chris', strength: 80, intelligence: 91 }),
            new CharacterModel({ name: 'Adam', strength: 82, intelligence: 90 }),
            new CharacterModel({ name: 'Sun Ce', strength: 91, intelligence: 90 }),
            new CharacterModel({ name: 'Cao Cao', strength: 79, intelligence: 91 }),
            new CharacterModel({ name: 'Liu Bei', strength: 68, intelligence: 93 }),
            new CharacterModel({ name: 'Dong Zhuo', strength: 78, intelligence: 89 }),
            new CharacterModel({ name: 'Sun Jian', strength: 89, intelligence: 91 }),
            new CharacterModel({ name: 'Guan Yu', strength: 98, intelligence: 80 }),
            new CharacterModel({ name: 'Zhuge Liang', strength: 62, intelligence: 93 }),
            new CharacterModel({ name: 'Cao Ren', strength: 80, intelligence: 54 }),
            new CharacterModel({ name: 'Lu Bu', strength: 100, intelligence: 28 }),
            new CharacterModel({ name: 'Ma Chao', strength: 90, intelligence: 68 }),
            new CharacterModel({ name: 'Taishi Ci', strength: 96, intelligence: 89 }),
            new CharacterModel({ name: 'Zhang Liao', strength: 92, intelligence: 79 }),
            new CharacterModel({ name: 'Zhou Yu', strength: 76, intelligence: 98 }),
        ]);

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
                            gameContainer: '#gameContainer',
                            listContainer: '#characterList',
                            model: this.model,
                            template: '#charactersTemplate',
                            window: window
                        })).contentView.resizeTableScrollHeight();
                        break;
                        
                    case constants.home.state.EDIT_CHARACTER:
                        alert('Render edit character');
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