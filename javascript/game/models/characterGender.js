define([
    // libraries
	'backbone',
    // game
    'game/config'
], function(
    // libraries
    Backbone,
    // game
    config
) {
    
	var CharacterGenderModel = Backbone.Model.extend({
		defaults: {
            key: '',
            name: '',
		},
        
        initialize: function () {
            var gender = config.character.gender[this.get('key')];
            
            this.set({
                name: gender.name
            });
        }

	});
	
	return CharacterGenderModel;
});