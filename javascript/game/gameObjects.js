define([
    // libraries
	'backbone',
    // collections
    'collections/characterClass',
    'collections/characterGender',
    'collections/characterPortrait'
], function(
    // libraries
    Backbone,
    // collections
    CharacterClassCollection,
    CharacterGenderCollection,
    CharacterPortraitCollection
) {
    
    //'use strict';
    
    var game = {
        character: {}
    };
    
    game.character.classes = new CharacterClassCollection();
    game.character.genders = new CharacterGenderCollection();
    game.character.portraits = new CharacterPortraitCollection();
    
    return game;
});