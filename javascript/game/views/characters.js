define([
	// libraries
    'backbone',
    'jquery',
    // game
    'game/constants',
    // views
    'views/characterList'
], function(
    // libraries
    Backbone,
    $,
    // game
    constants,
    // views
    CharacterListView
) {

	var charactersView = Backbone.View.extend({
		
		initialize: function (options) {
            this.options = options;
            this.characterListView = null;
            this.template = _.template($(this.options.template).html());
            this.$gameContainer = $(this.options.gameContainer);
            this.$listContainer = null;
            this.$tableBody = null;
            this.$window = $(this.options.window);
            
            this.listenTo(this.model, 'change:state', this.update);
            this.resizeTableScrollHeight = this.resizeTableScrollHeight.bind(this);
            this.$window.on('resize', this.resizeTableScrollHeight);
            this.render();
		},
        
        events: {
            'click #mainMenu': 'onMainMenuClick',
            'click #newCharacter': 'onNewCharacterClick'
        },
        
        onMainMenuClick: function () {
            this.model.set('state', constants.home.state.MAIN_MENU);
        },
        
        onNewCharacterClick: function () {
            alert('Create new character');
        },
        
        remove: function () {
            this.$window.off('resize', this.resizeTableScrollHeight);
            Backbone.View.prototype.remove.apply(this, arguments);
        },
        
        render: function () {
            this.$el.html(this.template());
            
            this.characterListView = new CharacterListView({
                collection: this.model.get('savedCharacters'),
                tagName: 'tbody'
            });
            
            this.$listContainer = $(this.options.listContainer);
            this.$listContainer.append(this.characterListView.el);
            this.$tableBody = this.$(this.characterListView.tagName);
            
            return this;
        },
        
        resizeTableScrollHeight: function () {
            if (this.$el.css('display') === 'block') {
                this.$tableBody.height(this.$window.height() - this.$tableBody.offset().top - (this.$gameContainer.outerHeight() - this.$tableBody.offset().top - this.$tableBody.height()));
            }
        },
        
        update: function () {
            if (this.model.get('state') === constants.home.state.CHARACTERS) { 
                this.$el.show();
                this.resizeTableScrollHeight();
            }
            else {
                this.$el.hide();
            }
        }
        
	});
	
	return charactersView;
});