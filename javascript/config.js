requirejs.config({
    baseUrl: 'javascript/libraries',
    paths: {
        // libraries
        backbone: 'backbone-min', // v1.1.2
        containerview: 'backbone.containerview.min',
        controller: 'backbone.controller',
        localStorage: 'backbone.localStorage-min', // v1.1.16
        marionette: 'backbone.marionette.min', // v2.4.1
        radio: 'backbone.radio.min', // v1.0.0
        jquery: 'jquery.min', // v2.1.1
        jqueryUIEffects: 'jquery-ui.effects.min', // v1.11.4
        phaser: 'phaser.min', // v2.2.2
        underscore: 'underscore-min', // v1.8.1
        // game
        collections: '../game/collections',
        config: '../game/config',
        controllers: '../game/controllers',
        game: '../game',
        models: '../game/models',
        templates: '../game/templates',
        views: '../game/views'
    },
    shim: {
        'phaser': {
            exports: 'Phaser'
        }
    },
    urlArgs: 'bust=' + new Date().getTime()
});