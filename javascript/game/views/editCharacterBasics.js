define([
    // libraries
	'backbone',
    'containerview',
    'jquery',
    // game
    'game/gameObjects',
    // collections
    'collections/selectListImageItem',
    'collections/selectListItem',
    // views
    'views/editCharacterClass',
    'views/selectListImageItem',
    'views/scrollingSelector',
    // templates
    'text!templates/editCharacterClass.html',
    'text!templates/portraitSelector.html'
], function(
    // libraries
    Backbone,
    ContainerView,
    $,
    // game
    gameObjects,
    // collections
    SelectListImageItemCollection,
    SelectListItemCollection,
    // views
    EditCharacterClassView,
    SelectListImageItemView,
    ScrollingSelectorView,
    // templates
    editCharacterClassTemplate,
    portraitSelectorTemplate
) {

	var EditCharacterBasicsView = ContainerView.extend({
		
		initialize: function (options) {
            this.template = _.template(options.template);
            
            this.characterGenderList = new SelectListItemCollection(ScrollingSelectorView.prototype.mapSelectListItems(gameObjects.character.genders, {
                text: 'name',
                value: 'key'
            }));
            
            this.characterPortraitList = new SelectListImageItemCollection(SelectListImageItemCollection.prototype.mapItems(gameObjects.character.portraits, {
                value: 'id',
                x: 'x',
                y: 'y'
            }));
		},
        
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            
            this.swapIn(new ScrollingSelectorView({
                attribute: 'gender',
                collection: this.characterGenderList,
                model: this.model
            }), '#editCharacterGender');
            
            this.swapIn(new EditCharacterClassView({
                selectorId: 'editCharacterClassSelector',
                descriptionId: 'editCharacterClassDescription',
                model: this.model,
                template: editCharacterClassTemplate
            }), '#editCharacterClass');
            
            this.swapIn(new ScrollingSelectorView({
                attribute: 'portrait',
                collection: this.characterPortraitList,
                model: this.model,
                listItemView: SelectListImageItemView,
                template: portraitSelectorTemplate
            }), '#editCharacterPortrait');
            
            return this;
        }
        
	});
	
	return EditCharacterBasicsView;
});