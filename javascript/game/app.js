define([
    // libraries
    'backbone',
    'jquery',
    'marionette',
    'underscore',
    // controllers
    'controllers/savedCharacters',
    // models
    'models/character',
    'models/home',
    // views
    'views/appLayout',
    // templates
    'text!templates/appLayout.html'
], function(
    // libraries
    Backbone,
    $,
    Marionette,
    _,
    // controllers
    SavedCharactersController,
    // models
    CharacterModel,
    HomeModel,
    // views
    AppLayoutView,
    // templates
    appLayoutTemplate
) {
    
    'use strict';

    var App = Marionette.Application.extend({

        initialize: function (options) {
        
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
//                    new CharacterModel({ name: 'Adam', strength: 8, intelligence: 9, charisma: 7 }),
//                    new CharacterModel({ name: 'Sun Ce', strength: 9, intelligence: 9, charisma: 8 }),
//                    new CharacterModel({ name: 'Cao Cao', strength: 7, intelligence: 9, charisma: 5 }),
//                    new CharacterModel({ name: 'Liu Bei', strength: 6, intelligence: 9, charisma: 9 }),
//                    new CharacterModel({ name: 'Dong Zhuo', strength: 7, intelligence: 8, charisma: 3 }),
//                    new CharacterModel({ name: 'Sun Jian', strength: 8, intelligence: 9, charisma: 6 }),
//                    new CharacterModel({ name: 'Guan Yu', strength: 9, intelligence: 8, charisma: 8 }),
//                    new CharacterModel({ name: 'Zhuge Liang', strength: 6, intelligence: 9, charisma: 6 }),
//                    new CharacterModel({ name: 'Cao Ren', strength: 8, intelligence: 5, charisma: 5 }),
//                    new CharacterModel({ name: 'Lu Bu', strength: 10, intelligence: 2, charisma: 3 }),
//                    new CharacterModel({ name: 'Ma Chao', strength: 9, intelligence: 6, charisma: 4 }),
//                    new CharacterModel({ name: 'Taishi Ci', strength: 9, intelligence: 8, charisma: 7 }),
//                    new CharacterModel({ name: 'Zhang Liao', strength: 9, intelligence: 7, charisma: 6 }),
//                    new CharacterModel({ name: 'Zhou Yu', strength: 7, intelligence: 9, charisma: 8 })
                ]);

            }
            else {
//                console.log('about to fetch');
                homeModel.get('savedCharacters').fetch();
//                console.log('Characters after load: ', homeModel.get('savedCharacters'));
//                console.log(localStorage);
            }
            
            this.layout = new AppLayoutView({
                el: '#app',
                model: homeModel,
                regions: {
                    main: '#main'
                },
                template: _.template(appLayoutTemplate)
            }).render();
            
            // TODO: remove exposed objects after development is complete
            window.homeModel = homeModel;
        }
    });
       
    return App;
        
});