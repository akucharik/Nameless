define([
    // libraries
    'backbone',
    'jquery',
    'phaser',
    // game
    'game/constants',
    // views
    'views/gameMenu'
], function(
    // libraries
    Backbone,
    $,
    Phaser,
    // game
    constants,
    // views
    GameMenuView
) {

    var GameView = Backbone.View.extend({
        initialize: function (options) {
            this.options = options;
            this.elParent = this.options.elParent;
            this.listenTo(this.model, 'change:state', this.onGameStateChange);
            
            this.model.set('playState', constants.play.state.PLAY);
            
            this.gameMenuView = new GameMenuView({
                className: 'game-menu-view',
                elGameMenu: '#gameMenu',
                elParent: this.elParent,
                id: 'gameMenuView',
                model: this.model,
                tagName: 'div',
                template: '#gameMenuTemplate'
            });
            
            this.game = new Phaser.Game(
                constants.canvas.WIDTH, 
                constants.canvas.HEIGHT, 
                Phaser.AUTO, 
                this.el, 
                { 
                    preload: this.preload, 
                    create: this.create 
                }
            );
            
            this.map = null;
            this.layer = null;
            
            this.render();
		},
        
        preload: function () {
            this.game.load.image('logo', 'images/phaser.png');
            this.game.load.tilemap('desert', 'tilemaps/tilemap.json', null, Phaser.Tilemap.TILED_JSON);
            this.game.load.image('tiles', 'images/tmw_desert_spacing.png');
        },

        create: function () {
            this.map = this.game.add.tilemap('desert');
            this.map.addTilesetImage('Desert', 'tiles');
            this.layer = this.map.createLayer('Ground');
            this.layer.resizeWorld();
        },
        
        onGameStateChange: function () {
            if (this.model.get('state') !== constants.app.state.GAME) { 
                this.remove();
            }
            
            return this;
        },
        
        remove: function () {
            this.game.destroy();
            Backbone.View.prototype.remove.call(this);
        },
        
        render: function () {
            this.$el.appendTo(this.elParent);
        }
        
    });
        
	return GameView;
});