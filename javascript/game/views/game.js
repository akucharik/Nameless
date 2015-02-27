define([
	'backbone',
    'constants',
    'jquery',
    'phaser'
], function(
    Backbone,
    constants,
    $,
    Phaser
) {

    var GameView = Backbone.View.extend({
        initialize: function () {
            this.listenTo(this.model, 'change:state', this.onStateChange);
            
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
        
        onStateChange: function () {
            if (this.model.get('state') !== constants.home.state.PLAY) { 
                this.remove();
            }
            
            return this;
        },
        
        remove: function () {
            this.game.destroy();
            Backbone.View.prototype.remove.call(this);
        }
        
    });
        
	return GameView;
});