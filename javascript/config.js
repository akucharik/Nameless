requirejs.config({
    baseUrl: 'javascript/game',
    paths: {
        backbone: '../libraries/backbone.min', // v1.1.2
        jquery: '../libraries/jquery.min', // v2.1.1
        phaser: '../libraries/phaser.min', // v2.2.2
        underscore: '../libraries/underscore.min' // v1.6.0
    },
    shim: {
        'phaser': {
            exports: 'Phaser'
        }
    },
    urlArgs: 'bust=' + new Date().getTime()
});