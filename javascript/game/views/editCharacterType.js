define([
    // libraries
	'backbone',
    'jquery',
    // game
    'game/constants',
    // controllers
    'controllers/character',
    // models
    'models/character'
], function(
    // libraries
    Backbone,
    $,
    // game
    constants,
    // controllers
    CharacterController,
    // models
    CharacterModel
) {

	var EditCharacterTypeView = Backbone.View.extend({
		
		initialize: function (options) {
            this.template = _.template($(options.template).html());
            this.$el.html(this.template(this.model.toJSON()));
            
            this.model.set('newCharacter', new CharacterModel({
                type: constants.character.type.CUSTOM
            }));
            this.model.set('newCharacterController', new CharacterController({
                model: this.model.get('newCharacter')
            }));
		},
        
        cancel: function () {
            this.model.set('state', constants.home.state.MAIN_MENU);
        },
        
        events: {
            'click [data-character-class]': 'selectCharacterType',
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
            var characterAttributes = this.model.get('newCharacter').get('attributes');
            
            switch (parseInt(event.target.dataset.characterClass)) {
                case constants.character.class.AVERAGE:
                    this.model.get('newCharacter').set('availableAttributePoints', constants.character.DEFAULT_AVAILABLE_ATTRIBUTE_POINTS);
                    break;
                case constants.character.class.STRENGTH:
                    characterAttributes.findWhere({ name: 'Strength' }).set('maxValue', constants.character.ATTRIBUTE_MAX_VALUE);
                    characterAttributes.findWhere({ name: 'Strength' }).set('value', constants.character.DEFAULT_ATTRIBUTE_VALUE + 2);
                    characterAttributes.findWhere({ name: 'Intelligence' }).set('maxValue', constants.character.DEFAULT_ATTRIBUTE_MAX_VALUE - 1);
                    characterAttributes.findWhere({ name: 'Intelligence' }).set('value', constants.character.DEFAULT_ATTRIBUTE_VALUE - 1);
                    characterAttributes.findWhere({ name: 'Charisma' }).set('maxValue', constants.character.DEFAULT_ATTRIBUTE_MAX_VALUE - 1);
                    characterAttributes.findWhere({ name: 'Charisma' }).set('value', constants.character.DEFAULT_ATTRIBUTE_VALUE - 1);
                    this.model.get('newCharacter').set('availableAttributePoints', constants.character.DEFAULT_AVAILABLE_ATTRIBUTE_POINTS - 2);
                    console.log('availpoints: ', this.model.get('newCharacter').get('availableAttributePoints'));
                    break;
                case constants.character.class.INTELLIGENCE:
                    characterAttributes.findWhere({ name: 'Strength' }).set('maxValue', constants.character.DEFAULT_ATTRIBUTE_MAX_VALUE - 1);
                    characterAttributes.findWhere({ name: 'Strength' }).set('value', constants.character.DEFAULT_ATTRIBUTE_VALUE - 1);
                    characterAttributes.findWhere({ name: 'Intelligence' }).set('maxValue', constants.character.ATTRIBUTE_MAX_VALUE);
                    characterAttributes.findWhere({ name: 'Intelligence' }).set('value', constants.character.DEFAULT_ATTRIBUTE_VALUE + 2);
                    characterAttributes.findWhere({ name: 'Charisma' }).set('maxValue', constants.character.DEFAULT_ATTRIBUTE_MAX_VALUE - 1);
                    characterAttributes.findWhere({ name: 'Charisma' }).set('value', constants.character.DEFAULT_ATTRIBUTE_VALUE - 1);
                    this.model.get('newCharacter').set('availableAttributePoints', constants.character.DEFAULT_AVAILABLE_ATTRIBUTE_POINTS - 2);
                    break;
                case constants.character.class.CHARISMA:
                    characterAttributes.findWhere({ name: 'Strength' }).set('maxValue', constants.character.DEFAULT_ATTRIBUTE_MAX_VALUE - 1);
                    characterAttributes.findWhere({ name: 'Strength' }).set('value', constants.character.DEFAULT_ATTRIBUTE_VALUE - 1);
                    characterAttributes.findWhere({ name: 'Intelligence' }).set('maxValue', constants.character.DEFAULT_ATTRIBUTE_MAX_VALUE - 1);
                    characterAttributes.findWhere({ name: 'Intelligence' }).set('value', constants.character.DEFAULT_ATTRIBUTE_VALUE - 1);
                    characterAttributes.findWhere({ name: 'Charisma' }).set('maxValue', constants.character.ATTRIBUTE_MAX_VALUE);
                    characterAttributes.findWhere({ name: 'Charisma' }).set('value', constants.character.DEFAULT_ATTRIBUTE_VALUE + 2);
                    this.model.get('newCharacter').set('availableAttributePoints', constants.character.DEFAULT_AVAILABLE_ATTRIBUTE_POINTS - 2);
                    break;
            }
            
            this.model.set('state', constants.home.state.EDIT_CHARACTER);
        }
        
	});
	
	return EditCharacterTypeView;
});