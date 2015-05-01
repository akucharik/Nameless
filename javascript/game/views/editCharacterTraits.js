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
    'views/scrollingSelector'
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
    ScrollingSelectorView
) {

	var EditCharacterTraitsView = ContainerView.extend({
		
		initialize: function () {
            this.characterGenderList = new SelectListItemCollection(ScrollingSelectorView.prototype.mapSelectListItems(gameObjects.character.genders, {
                text: 'name',
                value: 'key'
            }));
            
            this.characterClassList = new SelectListItemCollection(ScrollingSelectorView.prototype.mapSelectListItems(gameObjects.character.classes, {
                description: 'description',
                text: 'name',
                value: 'key'
            }));
            
            this.characterPortraitList = new SelectListItemCollection(ScrollingSelectorView.prototype.mapSelectListItems(gameObjects.character.portraits, {
                text: 'url',
                value: 'url'
            }));
		},
        
        render: function () {
            this.append(new ScrollingSelectorView({
                    collection: this.characterGenderList,
                    model: this.model,
                    attribute: 'gender'
                })
            );
            
            this.append(new ScrollingSelectorView({
                    collection: this.characterClassList,
                    model: this.model,
                    attribute: 'characterClass'
                })
            );
            
            this.append(new ScrollingSelectorView({
                    collection: this.characterPortraitList,
                    model: this.model,
                    attribute: 'portrait'
                })
            );
            
            return this;
        }
        
	});
	
	return EditCharacterTraitsView;
});