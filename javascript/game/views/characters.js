define([
	'backbone',
    'jquery',
    'constants',
    'views/characterList'
], function(
    Backbone,
    $,
    constants,
    CharacterListView
) {

	var charactersView = Backbone.View.extend({
		
		initialize: function (options) {
            this.options = options;
            this.template = _.template($(this.options.template).html());
            
            this.listenTo(this.model, 'change:state', this.render);
            $(window).on('resize', this.resizeTableScrollHeight);
            this.render();
		},
        
        render: function () {
            this.$el.html(this.template());
            
            this.characterListView = new CharacterListView({
                collection: this.model.get('savedCharacters'),
                tagName: 'tbody'
            });
            
            this.$('#characterList').append(this.characterListView.el);
            
            if (this.model.get('state') === constants.home.state.CHARACTERS) { 
                this.$el.show();
            }
            else {
                this.$el.hide();
            }
            
            this.resizeTableScrollHeight();
            
            return this;
        },
        
        events: {
            'click #mainMenu': 'onMainMenuClick',
        },
        
        onMainMenuClick: function () {
            this.model.set('state', constants.home.state.MAIN_MENU);
        },
        
        resizeTableScrollHeight: function () {
            // must get after the template is rendered
            this.$tableBody = this.$('tbody');
            
            this.$tableBody.height($(window).height() - this.$tableBody.offset().top - $('.home-container-footer').height());
        }
        
	});
	
	return charactersView;
});