require([
    './config'
], function (
    config
) {
    require([
        'game/game'
    ], function (
        game
        ) {
           game.initialize(); 
    });
});