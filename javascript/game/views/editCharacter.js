define([
    // libraries
	'backbone',
    'jquery',
    // game
    'game/constants',
    // models
    'models/character',
    // views
    'views/editCharacterAttribute'
], function(
    // libraries
    Backbone,
    $,
    // game
    constants,
    // models
    CharacterModel,
    // views
    EditCharacterAttributeView
) {

	var EditCharacterView = Backbone.View.extend({
		
		initialize: function (options) {
            this.options = options;
            this.template = _.template($(this.options.template).html());
            this.$el.html(this.template(this.model.toJSON()));
            
            this.character = this.model.get('newCharacter');
            
            this.$name = this.$('#name');
            this.$availableAttributePoints = this.$('#availableAttributePoints');
            this.$attributes = this.$('#attributes');
            
            // create attribute views
            this.character.get('attributes').each(function (attribute) {
                var attributeView = new EditCharacterAttributeView({
                    character: this.character,
                    model: attribute,
                    tagName: 'li',
                    template: '#editCharacterAttributeTemplate'
                });
                this.$attributes.append(attributeView.render().el);
            }, this);
            
            this.listenTo(this.character, 'change:availableAttributePoints', this.render);
		},
        
        render: function () {
            this.$availableAttributePoints.html(this.character.get('availableAttributePoints'));
            
            return this;
        },
        
        events: {
            'click #back': 'back',
            'click #save': 'save'
        },
        
        back: function () {
            this.model.set('state', constants.home.state.CHARACTER_TYPE);
        },
        
        save: function () {
            this.character.set('name', this.$name.val());
            this.model.get('savedCharacters').add(this.character);
            this.model.set('state', constants.home.state.CHARACTERS);
        }
        
	});
	
	return EditCharacterView;
});