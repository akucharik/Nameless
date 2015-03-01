requirejs.config({
    baseUrl: 'javascript/libraries',
    paths: {
        // libraries
        backbone: 'backbone-min', // v1.1.2
        containerview: 'backbone.containerview.min',
        jquery: 'jquery.min', // v2.1.1
        phaser: 'phaser.min', // v2.2.2
        underscore: 'underscore-min', // v1.8.1
        // game
        game: '../game',
        models: '../game/models',
        views: '../game/views'
    },
    shim: {
        'phaser': {
            exports: 'Phaser'
        }
    },
    urlArgs: 'bust=' + new Date().getTime()
});