require(['./config'], function (config) {
    require(['game/app'], function (App) {
        var app = new App();
        app.start(); 
    });
});