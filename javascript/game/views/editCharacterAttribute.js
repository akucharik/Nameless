define([
    // libraries
	'backbone',
    'jquery',
    // game
    'game/constants',
    // views
    'views/editCharacterSkill'
], function(
    // libraries
    Backbone,
    $,
    // game
    constants,
    // views
    EditCharacterSkillView
) {

	var EditCharacterAttributeView = Backbone.View.extend({
		
		initialize: function (options) {
            this.character = options.character;
            this.template = _.template($(options.template).html());
            this.$el.html(this.template(this.model.toJSON()));
            
            this.$attributeValue = this.$('.attribute-value');
            this.$increaseValue = this.$('[data-attribute-change="+"]');
            this.$decreaseValue = this.$('[data-attribute-change="-"]');
            this.$skills = this.$('.skills');
            
            // create skill views
            this.character.get('skills').where({ associatedAttributeKey: this.model.get('key') }).forEach(function (skill) {
                var skillView = new EditCharacterSkillView({
                    model: skill,
                    tagName: 'li',
                    template: '#editCharacterSkillTemplate'
                });

                this.$skills.append(skillView.render().el);
            }, this);
            
            this.listenTo(this.character, 'change:availableAttributePoints', this.render);
		},
        
        events: {
            'click [data-attribute-change]': 'changeAttribute'
        },
        
        changeAttribute: function (event) {
            var targetData = event.target.dataset;
            
            if (targetData.attributeChange === '+') {
                if (this.model.get('value') < this.model.get('maxValue') && 
                    this.character.get('availableAttributePoints') > 0) {
                    this.model.set('value', this.model.get('value') + 1);
                    this.character.set('availableAttributePoints', this.character.get('availableAttributePoints') - 1);
                }
            }
            else {
                if (this.model.get('value') > this.model.get('minValue')) {
                    this.model.set('value', this.model.get('value') - 1);
                    this.character.set('availableAttributePoints', this.character.get('availableAttributePoints') + 1);
                }
            }
        },
        
        render: function () {
            this.$attributeValue.html(this.model.get('value'));
            this.model.get('value') === this.model.get('maxValue') || this.character.get('availableAttributePoints') === 0 ? this.$increaseValue.prop('disabled', true) : this.$increaseValue.prop('disabled', false);
            this.model.get('value') === this.model.get('minValue') ? this.$decreaseValue.prop('disabled', true) : this.$decreaseValue.prop('disabled', false);
            
            return this;
        }
	});
	
	return EditCharacterAttributeView;
});