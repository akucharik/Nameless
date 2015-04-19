define([
    // libraries
	'backbone',
    'jquery',
    // game
    'game/constants',
    // views
    'views/editCharacterUnitProficiency',
    'views/editCharacterSkill'
], function(
    // libraries
    Backbone,
    $,
    // game
    constants,
    // views
    EditCharacterUnitProficiencyView,
    EditCharacterSkillView
) {

	var EditCharacterAttributeView = Backbone.View.extend({
		
		initialize: function (options) {
            this.character = options.character;
            this.template = _.template($(options.template).html());
            this.$el.html(this.template(this.model.toJSON()));
            
            this.$attributeValue = this.$('.attributeValue');
            this.$increaseValue = this.$('[data-attribute-change="+"]');
            this.$decreaseValue = this.$('[data-attribute-change="-"]');
//            this.$unitProficiencies = this.$('.unitProficiencies');
//            this.$skills = this.$('.skillProficiencies');
            
            // create unit proficiency views
//            this.character.get('unitProficiencies').where({ associatedAttributeKey: this.model.get('key') }).forEach(function (unitProficiency) {
//                var unitProficiencyView = new EditCharacterUnitProficiencyView({
//                    model: unitProficiency,
//                    tagName: 'li',
//                    template: '#editCharacterUnitProficiencyTemplate'
//                });
//
//                this.$unitProficiencies.append(unitProficiencyView.render().el);
//            }, this);
            
            // create skill views
//            this.character.get('skills').where({ associatedAttributeKey: this.model.get('key') }).forEach(function (skill) {
//                var skillView = new EditCharacterSkillView({
//                    model: skill,
//                    tagName: 'li',
//                    template: '#editCharacterSkillTemplate'
//                });
//
//                this.$skills.append(skillView.render().el);
//            }, this);
            
            this.listenTo(this.character, 'change:availableAttributePoints', this.render);
		},
        
        events: {
            'click [data-attribute-change]': 'changeAttribute'
        },
        
        changeAttribute: function (event) {
            var targetData = event.target.dataset;
            
            if (targetData.attributeChange === '+') {
                if (this.model.get('startValue') < this.model.get('maxStartValue') && 
                    this.character.get('availableAttributePoints') > 0) {
                    this.model.set('startValue', this.model.get('startValue') + 1);
                    this.character.set('availableAttributePoints', this.character.get('availableAttributePoints') - 1);
                }
            }
            else {
                if (this.model.get('startValue') > this.model.get('minValue')) {
                    this.model.set('startValue', this.model.get('startValue') - 1);
                    this.character.set('availableAttributePoints', this.character.get('availableAttributePoints') + 1);
                }
            }
        },
        
        render: function () {
            this.$attributeValue.html(this.model.get('startValue'));
            this.model.get('startValue') === this.model.get('maxStartValue') || this.character.get('availableAttributePoints') === 0 ? this.$increaseValue.prop('disabled', true) : this.$increaseValue.prop('disabled', false);
            this.model.get('startValue') === this.model.get('minValue') ? this.$decreaseValue.prop('disabled', true) : this.$decreaseValue.prop('disabled', false);
            
            return this;
        }
	});
	
	return EditCharacterAttributeView;
});