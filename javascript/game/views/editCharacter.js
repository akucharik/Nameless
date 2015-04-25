define([
    // libraries
	'backbone',
    'jquery',
    // views
    'views/editCharacterAttribute',
    'views/editCharacterGender',
    'views/editCharacterSkill',
    'views/editCharacterUnitProficiency'
], function(
    // libraries
    Backbone,
    $,
    // views
    EditCharacterAttributeView,
    EditCharacterGenderView,
    EditCharacterSkillView,
    EditCharacterUnitProficiencyView
) {

	var EditCharacterView = Backbone.View.extend({
		
		initialize: function (options) {
            this.template = _.template($(options.template).html());
            
            // listen to events
            this.listenTo(this.model, 'change:availableAttributePoints', this.render);
            this.listenTo(this.model, 'change:gender', this.render);
		},
        
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            
            // cache DOM elements
            this.$name = this.$('#name');
            this.$gender = this.$('#gender');
            this.$availableAttributePoints = this.$('#availableAttributePoints');
            
            this.$attributes = this.$('#attributes');
            this.$skills = this.$('#skills');
            this.$units = this.$('#units');
            
            // create attribute views
            this.model.get('attributes').each(function (attribute) {
                var attributeView = new EditCharacterAttributeView({
                    character: this.model,
                    model: attribute,
                    tagName: 'li',
                    template: '#editCharacterAttributeTemplate'
                });
                this.$attributes.append(attributeView.render().el);
            }, this);
            
            // create skill views
            this.model.get('skills').forEach(function (skill) {
                var skillView = new EditCharacterSkillView({
                    model: skill,
                    tagName: 'li',
                    template: '#editCharacterSkillTemplate'
                });

                this.$skills.append(skillView.render().el);
            }, this);
            
            // create unit views
            this.model.get('unitProficiencies').forEach(function (unitProficiency) {
                var unitProficiencyView = new EditCharacterUnitProficiencyView({
                    model: unitProficiency,
                    tagName: 'li',
                    template: '#editCharacterUnitProficiencyTemplate'
                });

                this.$units.append(unitProficiencyView.render().el);
            }, this);
            
            return this;
        },
        
        update: function () {
            this.$gender.html(this.model.get('gender'));
            this.$availableAttributePoints.html(this.model.get('availableAttributePoints'));
        },
        
        // events
        events: {
            'click #gender': 'editCharacterGender'
        },
        
        editCharacterGender: function () {
            var editCharacterGenderView = new EditCharacterGenderView({
                className: 'modal',
                model: this.model,
                modalTemplate: '#modalTemplate',
                template: '#editCharacterGenderTemplate',
            }).render().$el.appendTo(this.$el);
        }
        
	});
	
	return EditCharacterView;
});