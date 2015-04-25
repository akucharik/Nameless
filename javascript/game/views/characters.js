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
            this.$window = $(this.options.window);
            
            // process template and references that only exist after template is processed
            this.$el.html(this.template());
            this.$tableBody = this.$(this.options.tableBody);
            
            this.resizeTableScrollHeight = this.resizeTableScrollHeight.bind(this);
            this.$window.on('resize', this.resizeTableScrollHeight);
		},
        
        events: {
            'click #mainMenu': 'onMainMenuClick',
            'click #newCharacter': 'onNewCharacterClick'
        },
        
        onMainMenuClick: function () {
            this.model.set('state', constants.home.state.MAIN_MENU);
        },
        
        onNewCharacterClick: function () {
            this.model.set('editCharacterMode', constants.editCharacter.mode.CREATE);
            this.model.set('editCharacterSource', constants.editCharacter.source.CHARACTERS);
            this.model.set('state', constants.home.state.EDIT_CHARACTER);
        },
        
        remove: function () {
            this.$window.off('resize', this.resizeTableScrollHeight);
            Backbone.View.prototype.remove.call(this);
        },
        
        render: function () {
            this.characterListView = new CharacterListView({
                collection: this.model.get('savedCharacters'),
                el: this.$tableBody
            });
            
            return this;
        },
        
        resizeTableScrollHeight: function () {
            this.$tableBody.height(this.$window.height() - this.$tableBody.offset().top - (this.$gameContainer.outerHeight() - this.$tableBody.offset().top - this.$tableBody.height()));
            
            return this;
        }
        
	});
	
	return charactersView;
});