define([
    // libraries
	'backbone',
    'jquery',
    // game
    'game/constants',
    'game/calculatedConstants',
    // models
    'models/character'
], function(
    // libraries
    Backbone,
    $,
    // game
    constants,
    calculatedConstants,
    // models
    CharacterModel
) {

	var CharacterTypeView = Backbone.View.extend({
		
		initialize: function (options) {
            this.options = options;
            this.template = _.template($(this.options.template).html());
            this.$el.html(this.template(this.model.toJSON()));
            this.character = new CharacterModel();
		},
        
        cancel: function () {
            this.model.set('state', constants.home.state.MAIN_MENU);
        },
        
        events: {
            'click [data-character-type]': 'selectCharacterType',
            'click #cancel': 'cancel'
        },
        
        render: function () {
            
            return this;
        },
        
        selectCharacterType: function (event) {
            this.character.get('attributes').each(function (attribute) {
                attribute.set('value', calculatedConstants.character.type[event.target.dataset.characterType].attribute[attribute.get('id')].DEFAULT_VALUE);
                attribute.set('maxValue', calculatedConstants.character.type[event.target.dataset.characterType].attribute[attribute.get('id')].DEFAULT_MAX_VALUE);
            }, this);
            
            this.character.set('availableAttributePoints', calculatedConstants.character.type[event.target.dataset.characterType].AVAILABLE_ATTRIBUTE_POINTS);
            
            this.model.set('newCharacter', this.character);
            this.model.set('state', constants.home.state.EDIT_CHARACTER);
        }
        
	});
	
	return CharacterTypeView;
});