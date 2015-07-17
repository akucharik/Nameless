define([
    // libraries
    'marionette',
    'radio',
    'underscore',
    // game
    'game/constants',
    // controllers
    'controllers/savedCharacters',
    // models
    'models/app',
    'models/character',
    // views
    'views/appLayout',
    // templates
    'text!templates/appLayout.html'
], function(
    // libraries
    Marionette,
    Radio,
    _,
    // game
    constants,
    // controllers
    SavedCharactersController,
    // models
    AppModel,
    CharacterModel,
    // views
    AppLayoutView,
    // templates
    appLayoutTemplate
) {
    
    'use strict';

    var App = Marionette.Application.extend({

        initialize: function (options) {
        
            // model
            this.appModel = new AppModel();
            
            this.appModel.set('savedCharactersController', new SavedCharactersController({
                collection: this.appModel.get('savedCharacters')
            }));

            // initialize starting game data
            if (!localStorage.Characters) {
                this.appModel.get('savedCharacters').add([
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
                this.appModel.get('savedCharacters').fetch();
//                console.log('Characters after load: ', this.appModel.get('savedCharacters'));
//                console.log(localStorage);
            }
            
            
            
            
            
            // channel
            this.appChannel = Radio.channel(constants.channel.app);
            
            // channel events
            this.appChannel.on('event:test', function () {
                console.log('channel event tested');
            });
                
            // channel requests
            //this.appChannel.reply('getModel', function () {
            //    return this.appModel;
            //}, this);
            
            this.getCharacters = function () {
                return this.appModel.get('savedCharacters');
            };
            
            this.getGames = function () {
                return this.appModel.get('savedGames');
            };
            
            this.setStateToCharacters = function () {
                console.log('go to characters');
                this.appModel.set('state', constants.app.state.CHARACTERS);
            };
            
            this.setStateToEditCharacter = function () {
                console.log('go to edit character');
                this.appModel.set('state', constants.app.state.EDIT_CHARACTER);
            };
            
            this.setStateToNewCharacter = function () {
                console.log('go to new character');
                this.appModel.set('state', constants.app.state.NEW_CHARACTER);
            };
            
            this.setStateToGame = function () {
                console.log('go to game');
                this.appModel.set('state', constants.app.state.GAME);
            };
            
            this.setStateToGames = function () {
                console.log('go to games');
                this.appModel.set('state', constants.app.state.GAMES);
            };
            
            this.setStateToMain = function () {
                console.log('go to main');
                this.appModel.set('state', constants.app.state.MAIN);
            };
            
            // initialize channel requests
            this.appChannel.reply({
                'get:characters': this.getCharacters,
                'get:games': this.getGames,
                'set:state:characters': this.setStateToCharacters,
                'set:state:editCharacter': this.setStateToEditCharacter,
                'set:state:newCharacter': this.setStateToNewCharacter,
                'set:state:game': this.setStateToGame,
                'set:state:games': this.setStateToGames,
                'set:state:main': this.setStateToMain
            }, this);
            
            
            
            
            
            // layout
            this.layout = new AppLayoutView({
                el: '#app',
                model: this.appModel,
                regions: {
                    main: '#main'
                },
                template: _.template(appLayoutTemplate)
            }).render();
            
            // TODO: remove exposed objects after development is complete
            window.appModel = this.appModel;
        }
    });
       
    return App;
        
});