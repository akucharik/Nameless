define([
    'backbone',
    'constants',
    'jquery', 
    'phaser',
    // models
    'models/character',
    'models/home',
    // views
    'views/characters',
    'views/game',
    'views/mainMenu'
], function(
    Backbone,
    constants,
    $, 
    Phaser,
    // models
    CharacterModel,
    HomeModel,
    // views
    CharactersView,
    GameView,
    MainMenuView
) {
    
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
    
    var homeController = {};
    _.extend(homeController, Backbone.Events);
    
    homeController.newGame = function () {
        var gameView = new GameView({
            elParent: '#homeContainer',
            className: 'canvas',
            id: 'gameView',
            model: homeModel,
            tagName: 'div'
        });
    };
    
    homeController.onStateChange = function (model) {
        switch (model.get('state')) {
            case constants.home.state.PLAY:
                homeController.newGame();
                break;
        }
    };
    
    homeController.listenTo(homeModel, 'change:state', homeController.onStateChange);
    
    var mainMenuView = new MainMenuView({
        el: '#mainMenuView',
        model: homeModel,
        template: '#mainMenuTemplate'
    });
    
    var charactersView = new CharactersView({
        el: '#charactersView',
        gameContainer: '#gameContainer',
        listContainer: '#characterList',
        model: homeModel,
        template: '#charactersTemplate',
        window: window
    });
    
    // TODO: remove exposed objects after development is complete
    window.homeModel = homeModel;
        
});