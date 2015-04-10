define([
    // libraries
	'backbone',
    // collections
    'collections/characterClass',
    // models
    'models/characterClass'
], function(
    // libraries
    Backbone,
    // collections
    CharacterClassCollection,
    // models
    CharacterClassModel
) {
    
    //'use strict';
    
    var characterClasses = new CharacterClassCollection();
    
    return characterClasses;
});