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
        
        render: function () {
            
            return this;
        },
        
        events: {
            'click [data-character-type]': 'selectCharacterType',
            'click #cancel': 'cancel'
        },
        
        selectCharacterType: function (event) {
            switch (event.target.dataset.characterType) {
                case calculatedConstants.character.type.strength.associatedAttribute.NAME:
                    this.character.set('str', calculatedConstants.character.type.strength.DEFAULT_STR);
                    this.character.set('int', calculatedConstants.character.type.strength.DEFAULT_INT);
                    this.character.set('chr', calculatedConstants.character.type.strength.DEFAULT_CHR);
                    this.character.set('strMax', calculatedConstants.character.type.strength.STR_MAX);
                    this.character.set('intMax', calculatedConstants.character.type.strength.INT_MAX);
                    this.character.set('chrMax', calculatedConstants.character.type.strength.CHR_MAX);
                    this.character.set('availableAttributePoints', calculatedConstants.character.type.strength.AVAILABLE_ATTRIBUTE_POINTS);
                    break;
                case calculatedConstants.character.type.intelligence.associatedAttribute.NAME:
                    this.character.set('str', calculatedConstants.character.type.intelligence.DEFAULT_STR);
                    this.character.set('int', calculatedConstants.character.type.intelligence.DEFAULT_INT);
                    this.character.set('chr', calculatedConstants.character.type.intelligence.DEFAULT_CHR);
                    this.character.set('strMax', calculatedConstants.character.type.intelligence.STR_MAX);
                    this.character.set('intMax', calculatedConstants.character.type.intelligence.INT_MAX);
                    this.character.set('chrMax', calculatedConstants.character.type.intelligence.CHR_MAX);
                    this.character.set('availableAttributePoints', calculatedConstants.character.type.intelligence.AVAILABLE_ATTRIBUTE_POINTS);
                    break;
                case calculatedConstants.character.type.charisma.associatedAttribute.NAME:
                    this.character.set('str', calculatedConstants.character.type.charisma.DEFAULT_STR);
                    this.character.set('int', calculatedConstants.character.type.charisma.DEFAULT_INT);
                    this.character.set('chr', calculatedConstants.character.type.charisma.DEFAULT_CHR);
                    this.character.set('strMax', calculatedConstants.character.type.charisma.STR_MAX);
                    this.character.set('intMax', calculatedConstants.character.type.charisma.INT_MAX);
                    this.character.set('chrMax', calculatedConstants.character.type.charisma.CHR_MAX);
                    this.character.set('availableAttributePoints', calculatedConstants.character.type.charisma.AVAILABLE_ATTRIBUTE_POINTS);
                    break;
                default:
                    this.character.set('str', calculatedConstants.character.type.average.DEFAULT_STR);
                    this.character.set('int', calculatedConstants.character.type.average.DEFAULT_INT);
                    this.character.set('chr', calculatedConstants.character.type.average.DEFAULT_CHR);
                    this.character.set('strMax', calculatedConstants.character.type.average.STR_MAX);
                    this.character.set('intMax', calculatedConstants.character.type.average.INT_MAX);
                    this.character.set('chrMax', calculatedConstants.character.type.average.CHR_MAX);
                    this.character.set('availableAttributePoints', calculatedConstants.character.type.average.AVAILABLE_ATTRIBUTE_POINTS);
                    break;
            }
            
            this.model.set('newCharacter', this.character);
            this.model.set('state', constants.home.state.EDIT_CHARACTER);
        },
        
        cancel: function () {
            this.model.set('state', constants.home.state.MAIN_MENU);
        }
        
	});
	
	return CharacterTypeView;
});