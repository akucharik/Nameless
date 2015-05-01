define([
    // libraries
	'backbone',
    'containerview',
    'jquery',
    // game
    'game/constants',
    // models
    'models/character',
    // views
    'views/editCharacterTraits',
    'views/editCharacterClass',
    'views/editCharacterClassActions',
    'views/editCharacter',
    'views/editCharacterActions',
    // controllers
    'controllers/character'
], function(
    // libraries
    Backbone,
    ContainerView,
    $,
    // game
    constants,
    // models
    CharacterModel,
    // views
    EditCharacterTraitsView,
    EditCharacterClassView,
    EditCharacterClassActionsView,
    EditCharacterView,
    EditCharacterActionsView,
    // controllers
    CharacterController
) {

	var EditCharacterManagerView = ContainerView.extend({
		
		initialize: function (options) {
            this.actionsId = options.actionsId;
            this.actionsSelector = '#' + this.actionsId;
            this.contentId = options.contentId;
            this.contentSelector = '#' + this.contentId;
            this.isDirty = false;
            this.template = _.template($(options.template).html());
            
            // create new character
            this.character = new CharacterModel({
                type: constants.character.type.CUSTOM
            });
            this.characterController = new CharacterController({
                model: this.character
            });
            
            // listen to events
            //this.listenTo(this.character, 'change:characterClass', this.update);
		},
        
        remove: function () {
            this.characterController.remove();
            ContainerView.prototype.remove.call(this);
        },
        
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            this.update();
            
            return this;
        },
        
        update: function () {
            if (true) {
                this.swapIn(new EditCharacterTraitsView({
                    className: 'animate-screen-in',
                    id: this.contentId,
                    model: this.character,
                }), this.contentSelector);
//                this.swapIn(new EditCharacterClassView({
//                    className: 'animate-screen-in',
//                    id: this.contentId,
//                    model: this.character,
//                    template: '#editCharacterClassTemplate'
//                }), this.contentSelector);
                
                this.swapIn(new EditCharacterClassActionsView({
                    className: 'menu menu-horizontal screen-actions clear-fix animate-screen-in',
                    id: this.actionsId,
                    model: this.editCharacterActionsModel,
                    tagName: 'ul',
                    template: '#editCharacterClassActionsTemplate'
                }), this.actionsSelector);
            }
            else {
                this.swapIn(new EditCharacterView({
                    className: 'animate-screen-in',
                    id: this.contentId,
                    model: this.character,
                    template: '#editCharacterTemplate'
                }), this.contentSelector);
                
                this.swapIn(new EditCharacterActionsView({
                    className: 'menu menu-horizontal screen-actions clear-fix animate-screen-in',
                    id: this.actionsId,
                    model: this.editCharacterActionsModel,
                    tagName: 'ul',
                    template: '#editCharacterActionsTemplate'
                }), this.actionsSelector);
                
                this.isDirty = true;
            }
            
            return this;
        },
        
        // events
        events: {
            // character class
            'click #nextCharacterClass': 'nextCharacterClass',
            'click #cancelCharacterClass': 'cancelCharacterClass',
            
            // character detail
            'click #cancelCharacterDetail': 'cancelCharacterDetail',
            'click #editCharacterClass': 'editCharacterClass',
            'click #save': 'save'
        },
        
//        nextCharacterClass: function () {
//            this.model.set('state', constants.home.state.MAIN_MENU);
//        },
        
        cancelCharacterClass: function () {
            if (this.model.get('editCharacterSource') === constants.editCharacter.source.MAIN_MENU && this.isDirty === false) {
                this.model.set('state', constants.home.state.MAIN_MENU);
            }
            else if (this.model.get('editCharacterSource') === constants.editCharacter.source.CHARACTERS && this.isDirty === false) {
                this.model.set('state', constants.home.state.CHARACTERS);
            }
            else {
                this.character.set('characterClass', this.character.previousAttributes().characterClass);
            }
        },
        
        cancelCharacterDetail: function () {
            if (this.model.get('editCharacterSource') === constants.editCharacter.source.MAIN_MENU) {
                this.model.set('state', constants.home.state.MAIN_MENU);
            }
            else {
                this.model.set('state', constants.home.state.CHARACTERS);
            }
        },
        
        editCharacterClass: function () {
            this.character.set('characterClass', '');
        },
        
        save: function () {
            this.character.set('name', this.$name.val());
            this.model.get('savedCharacters').add(this.character);
            this.model.set('state', constants.home.state.CHARACTERS);
        }
        
	});
	
	return EditCharacterManagerView;
});