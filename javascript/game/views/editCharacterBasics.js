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
    'views/editCharacterClass',
    'views/scrollingSelector',
    // templates
    'text!templates/editCharacterClass.html',
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
    EditCharacterClassView,
    ScrollingSelectorView,
    // templates
    editCharacterClassTemplate
) {

	var EditCharacterBasicsView = ContainerView.extend({
		
		initialize: function (options) {
            this.template = _.template(options.template);
            
            this.characterGenderList = new SelectListItemCollection(ScrollingSelectorView.prototype.mapSelectListItems(gameObjects.character.genders, {
                text: 'name',
                value: 'key'
            }));
            
            this.characterPortraitList = new SelectListItemCollection(ScrollingSelectorView.prototype.mapSelectListItems(gameObjects.character.portraits, {
                text: 'url',
                value: 'url'
            }));
		},
        
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            
            this.swapIn(new ScrollingSelectorView({
                    collection: this.characterGenderList,
                    model: this.model,
                    attribute: 'gender'
                }), '#editCharacterGender');
            
            this.swapIn(new EditCharacterClassView({
                selectorId: 'editCharacterClassSelector',
                descriptionId: 'editCharacterClassDescription',
                model: this.model,
                template: editCharacterClassTemplate
            }), '#editCharacterClass');
            
            this.swapIn(new ScrollingSelectorView({
                    collection: this.characterPortraitList,
                    model: this.model,
                    attribute: 'portrait'
                }), '#editCharacterPortrait');
            
            return this;
        }
        
	});
	
	return EditCharacterBasicsView;
});