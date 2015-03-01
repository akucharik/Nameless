define([
    // libraries
	'backbone',
    // game
    'game/constants'
], function(
    // libraries
    Backbone,
    // game
    constants
) {
    
	var LogItemModel = Backbone.Model.extend({
		defaults: {
            cssClass: null,
            message: '',
            type: constants.log.item.type.DEFAULT
		},
        
        initialize: function () {
            switch (this.get('type')) {
                case constants.log.item.type.DEFAULT:
                    this.set('cssClass', constants.log.item.cssClass.DEFAULT);
                    break;
            }
        }

	});
	
	return LogItemModel;
});