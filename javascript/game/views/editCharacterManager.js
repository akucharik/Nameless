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
    'views/editCharacterBasics',
    'views/editCharacterClassActions',
    'views/editCharacterDetails',
    'views/editCharacterActions',
    // controllers
    'controllers/character',
    // templates
    'text!templates/editCharacterBasics.html',
    'text!templates/editCharacterDetails.html'
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
    EditCharacterBasicsView,
    EditCharacterClassActionsView,
    EditCharacterDetailsView,
    EditCharacterActionsView,
    // controllers
    CharacterController,
    // templates
    editCharacterBasicsTemplate,
    editCharacterDetailsTemplate
) {

	var EditCharacterManagerView = ContainerView.extend({
		
		initialize: function (options) {
            this.actionsId = options.actionsId;
            this.actionsSelector = '#' + this.actionsId;
            this.contentId = options.contentId;
            this.contentSelector = '#' + this.contentId;
            this.template = _.template($(options.template).html());

            this.characterController = new CharacterController({
                model: this.model.get('character')
            });
            
            // listen to events
            this.listenTo(this.model, 'change:state', this.update);
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
            if (this.model.get('state') === constants.editCharacter.state.DETAILS) {
                this.swapIn(new EditCharacterBasicsView({
                    className: 'animate-screen-in',
                    id: this.contentId,
                    model: this.model.get('character'),
                    template: editCharacterBasicsTemplate
                }), this.contentSelector);
                
                this.swapIn(new EditCharacterClassActionsView({
                    className: 'menu menu-horizontal screen-actions clear-fix animate-screen-in',
                    id: this.actionsId,
                    model: this.model,
                    tagName: 'ul',
                    template: '#editCharacterClassActionsTemplate'
                }), this.actionsSelector);
            }
            else {
                this.swapIn(new EditCharacterDetailsView({
                    className: 'animate-screen-in',
                    id: this.contentId,
                    model: this.model.get('character'),
                    template: editCharacterDetailsTemplate
                }), this.contentSelector);
                
                this.swapIn(new EditCharacterActionsView({
                    className: 'menu menu-horizontal screen-actions clear-fix animate-screen-in',
                    id: this.actionsId,
                    model: this.model,
                    tagName: 'ul',
                    template: '#editCharacterActionsTemplate'
                }), this.actionsSelector);
                
                this.model.set('isDirty', true);
            }
            
            return this;
        },
        
        // events
        events: {
            // character class
            'click #nextCharacterClass': 'nextCharacterClass',
            'click #cancelCharacterClass': 'cancelCharacterClass',
            'blur #editCharacterName': 'setCharacterName',
            
            // character detail
            'click #cancelCharacterDetail': 'cancelCharacterDetail',
            'click #editCharacterClass': 'editCharacterClass',
            'click #save': 'save'
        },
        
        setCharacterName: function (event) {
            this.model.get('character').set('name', event.target.value);
        },
        
        nextCharacterClass: function () {
            this.model.set('state', constants.editCharacter.state.ATTRIBUTES);
        },
        
        cancelCharacterClass: function () {
            if (this.model.get('source') === constants.editCharacter.source.MAIN_MENU && !this.model.get('isDirty')) {
                this.model.get('gameModel').set('state', constants.home.state.MAIN_MENU);
            }
            else if (this.model.get('source') === constants.editCharacter.source.CHARACTERS && !this.model.get('isDirty')) {
                this.model.get('gameModel').set('state', constants.home.state.CHARACTERS);
            }
            else {
                this.model.get('character').set('characterClass', this.model.get('character').previousAttributes().characterClass);
                this.model.set('state', constants.editCharacter.state.ATTRIBUTES);
            }
        },
        
        cancelCharacterDetail: function () {
            if (this.model.get('source') === constants.editCharacter.source.MAIN_MENU) {
                this.model.get('gameModel').set('state', constants.home.state.MAIN_MENU);
            }
            else {
                this.model.get('gameModel').set('state', constants.home.state.CHARACTERS);
            }
        },
        
        editCharacterClass: function () {
            this.model.set('state', constants.editCharacter.state.DETAILS);
        },
        
        save: function () {
            this.model.get('character').set('name', this.$name.val());
            this.model.get('savedCharacters').add(this.model.get('character'));
            this.model.get('gameModel').set('state', constants.home.state.CHARACTERS);
        }
        
	});
	
	return EditCharacterManagerView;
});