define([
	'backbone',
    'localStorage',
    // models
    'models/character'
], function(
    Backbone,
    LocalStorage,
    // models
    CharacterModel
) {
    
	var CharacterCollection = Backbone.Collection.extend({
        
        comparator: function (character) {
            return character.get('name').toLowerCase();
        },
        
        localStorage: new Backbone.LocalStorage("Characters"),
        
        model: CharacterModel,
        
        save: function () {
            this.each(function (model) { 
                model.save();
            }, this);
        }
        
	});
	
	return CharacterCollection;
});