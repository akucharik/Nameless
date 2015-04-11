define([
	// libraries
    'controller',
    // game
    'game/eventLog'
], function(
    // libraries
    Controller,
    // game
    eventLog
) {

	var SavedCharactersController = Controller.extend({
		
		initialize: function () {
            this.listenTo(this.collection, 'add', this.update);
		},
        
        update: function (character) {
            character.save();
            eventLog.add({ message: 'Character added'});
        }
        
	});
	
	return SavedCharactersController;
});