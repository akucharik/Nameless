requirejs.config({
    baseUrl: 'javascript/libraries',
    paths: {
        // libraries
        backbone: 'backbone-min', // v1.1.2
        containerview: 'backbone.containerview.min',
        controller: 'backbone.controller',
        localStorage: 'backbone.localStorage-min', // v1.1.16
        jquery: 'jquery.min', // v2.1.1
        phaser: 'phaser.min', // v2.2.2
        underscore: 'underscore-min', // v1.8.1
        // game
        collections: '../game/collections',
        controllers: '../game/controllers',
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