requirejs.config({
    baseUrl: 'javascript/game',
    paths: {
        libraries: '../libraries',
        backbone: '../libraries/backbone-1.1.2',
        jquery: '../libraries/jquery-2.1.1',
        phaser: '../libraries/phaser-2.2.2',
        underscore: '../libraries/underscore-1.6.0'
    },
    urlArgs: 'bust=' + new Date().getTime()
});