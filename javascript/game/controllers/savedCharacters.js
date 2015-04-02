define([
	// libraries
    'controller'
], function(
    // libraries
    Controller
) {

	var SavedCharactersController = Controller.extend({
		
		initialize: function () {
            this.listenTo(this.collection, 'add', this.update);
		},
        
        update: function (character) {
            character.save();
        }
        
	});
	
	return SavedCharactersController;
});