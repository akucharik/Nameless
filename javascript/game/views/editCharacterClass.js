define([
    // libraries
	'backbone',
    'containerview',
    'jquery',
    // game
    'game/gameObjects',
    // collections
    'collections/selectListItem',
    // views
    'views/editCharacterClassDescription',
    'views/scrollingSelector',
    // templates
    'text!templates/editCharacterClassDescription.html',
], function(
    // libraries
    Backbone,
    ContainerView,
    $,
    // game
    gameObjects,
    // collections
    SelectListItemCollection,
    // views
    EditCharacterClassDescriptionView,
    ScrollingSelectorView,
    // templates
    editCharacterClassDescriptionTemplate
) {

	var EditCharacterClassView = ContainerView.extend({
		
		initialize: function (options) {
            this.template = _.template(options.template);
            
            this.selectorId = options.selectorId;
            this.descriptionId = options.descriptionId;
            this.selectorSelector = '#' + options.selectorId;
            this.descriptionSelector = '#' + options.descriptionId;
            
            this.characterClassList = new SelectListItemCollection(ScrollingSelectorView.prototype.mapSelectListItems(gameObjects.character.classes, {
                description: 'description',
                text: 'name',
                value: 'key'
            }));
            
            this.listenTo(this.characterClassList, 'change:selected', this.update);
		},
        
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            
            this.swapIn(new ScrollingSelectorView({
                collection: this.characterClassList,
                id: this.selectorId,
                model: this.model,
                attribute: 'characterClass'
            }), this.selectorSelector);
            
            return this;
        },
        
        update: function (model) {
            this.swapIn(new EditCharacterClassDescriptionView({
                className: 'animate-screen-in',
                id: this.descriptionId,
                model: model,
                template: editCharacterClassDescriptionTemplate
            }), this.descriptionSelector);
            
            return this;
        }
        
	});
	
	return EditCharacterClassView;
});