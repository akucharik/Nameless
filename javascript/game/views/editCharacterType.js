define([
    // libraries
	'backbone',
    'jquery',
    // game
    'game/constants',
    // models
    'models/character'
], function(
    // libraries
    Backbone,
    $,
    // game
    constants,
    // models
    CharacterModel
) {

	var EditCharacterTypeView = Backbone.View.extend({
		
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
            'click #mainMenu': 'onMainMenuClick',
            'click #characters': 'onCharactersClick',
        },
        
        onMainMenuClick: function () {
            this.model.set('state', constants.home.state.MAIN_MENU);
        },
        
        onCharactersClick: function () {
            this.model.set('state', constants.home.state.CHARACTERS);
        },
        
        selectCharacterType: function (event) {
            var characterAttributes = this.character.get('attributes');
            
            switch (parseInt(event.target.dataset.characterType)) {
                case constants.character.type.STRENGTH:
                    characterAttributes.findWhere({ name: 'Strength' }).set('maxValue', constants.character.ATTRIBUTE_MAX_VALUE);
                    characterAttributes.findWhere({ name: 'Strength' }).set('value', constants.character.DEFAULT_ATTRIBUTE_VALUE + 2);
                    characterAttributes.findWhere({ name: 'Intelligence' }).set('maxValue', constants.character.DEFAULT_ATTRIBUTE_MAX_VALUE - 1);
                    characterAttributes.findWhere({ name: 'Intelligence' }).set('value', constants.character.DEFAULT_ATTRIBUTE_VALUE - 1);
                    characterAttributes.findWhere({ name: 'Charisma' }).set('maxValue', constants.character.DEFAULT_ATTRIBUTE_MAX_VALUE - 1);
                    characterAttributes.findWhere({ name: 'Charisma' }).set('value', constants.character.DEFAULT_ATTRIBUTE_VALUE - 1);
                    this.character.set('availableAttributePoints', constants.character.DEFAULT_AVAILABLE_ATTRIBUTE_POINTS - 2);
                    break;
                case constants.character.type.INTELLIGENCE:
                    characterAttributes.findWhere({ name: 'Strength' }).set('maxValue', constants.character.DEFAULT_ATTRIBUTE_MAX_VALUE - 1);
                    characterAttributes.findWhere({ name: 'Strength' }).set('value', constants.character.DEFAULT_ATTRIBUTE_VALUE - 1);
                    characterAttributes.findWhere({ name: 'Intelligence' }).set('maxValue', constants.character.ATTRIBUTE_MAX_VALUE);
                    characterAttributes.findWhere({ name: 'Intelligence' }).set('value', constants.character.DEFAULT_ATTRIBUTE_VALUE + 2);
                    characterAttributes.findWhere({ name: 'Charisma' }).set('maxValue', constants.character.DEFAULT_ATTRIBUTE_MAX_VALUE - 1);
                    characterAttributes.findWhere({ name: 'Charisma' }).set('value', constants.character.DEFAULT_ATTRIBUTE_VALUE - 1);
                    this.character.set('availableAttributePoints', constants.character.DEFAULT_AVAILABLE_ATTRIBUTE_POINTS - 2);
                    break;
                case constants.character.type.CHARISMA:
                    characterAttributes.findWhere({ name: 'Strength' }).set('maxValue', constants.character.DEFAULT_ATTRIBUTE_MAX_VALUE - 1);
                    characterAttributes.findWhere({ name: 'Strength' }).set('value', constants.character.DEFAULT_ATTRIBUTE_VALUE - 1);
                    characterAttributes.findWhere({ name: 'Intelligence' }).set('maxValue', constants.character.DEFAULT_ATTRIBUTE_MAX_VALUE - 1);
                    characterAttributes.findWhere({ name: 'Intelligence' }).set('value', constants.character.DEFAULT_ATTRIBUTE_VALUE - 1);
                    characterAttributes.findWhere({ name: 'Charisma' }).set('maxValue', constants.character.ATTRIBUTE_MAX_VALUE);
                    characterAttributes.findWhere({ name: 'Charisma' }).set('value', constants.character.DEFAULT_ATTRIBUTE_VALUE + 2);
                    this.character.set('availableAttributePoints', constants.character.DEFAULT_AVAILABLE_ATTRIBUTE_POINTS - 2);
                    break;
            }
            
            this.model.set('newCharacter', this.character);
            this.model.set('state', constants.home.state.EDIT_CHARACTER);
        }
        
	});
	
	return EditCharacterTypeView;
});