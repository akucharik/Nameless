define([
    // libraries
	'backbone',
    'jquery',
    // game
    'game/constants',
    // views
    'views/editCharacterAttribute'
], function(
    // libraries
    Backbone,
    $,
    // game
    constants,
    // views
    EditCharacterAttributeView
) {

	var EditCharacterView = Backbone.View.extend({
		
		initialize: function (options) {
            this.template = _.template($(options.template).html());
            this.$el.html(this.template(this.model.toJSON()));
            
            this.$name = this.$('#name');
            this.$availableAttributePoints = this.$('#availableAttributePoints');
            this.$attributes = this.$('#attributes');
            
            // create attribute views
            this.model.get('newCharacter').get('attributes').each(function (attribute) {
                var attributeView = new EditCharacterAttributeView({
                    character: this.model.get('newCharacter'),
                    model: attribute,
                    tagName: 'li',
                    template: '#editCharacterAttributeTemplate'
                });
                this.$attributes.append(attributeView.render().el);
            }, this);
            
            this.listenTo(this.model.get('newCharacter'), 'change:availableAttributePoints', this.render);
		},
        
        render: function () {
            this.$availableAttributePoints.html(this.model.get('newCharacter').get('availableAttributePoints'));
            
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
            this.model.get('newCharacter').set('name', this.$name.val());
            this.model.get('savedCharacters').add(this.model.get('newCharacter'));
            this.model.get('savedCharacterControllers').push(this.model.get('newCharacterController'));
            this.model.set('state', constants.home.state.CHARACTERS);
        }
        
	});
	
	return EditCharacterView;
});