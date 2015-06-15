define([
    // libraries
	'backbone',
    'jquery',
    // views
    'views/editCharacterAttribute',
    'views/editCharacterSkill',
    'views/editCharacterUnitProficiency'
], function(
    // libraries
    Backbone,
    $,
    // views
    EditCharacterAttributeView,
    EditCharacterSkillView,
    EditCharacterUnitProficiencyView
) {

	var EditCharacterDetailsView = Backbone.View.extend({
		
		initialize: function (options) {
            this.template = _.template(options.template);
            
            // listen to events
            this.listenTo(this.model, 'change:availableAttributePoints', this.update);
		},
        
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            
            // cache DOM elements
            this.$name = this.$('#name');
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
                var skillView = new EditCharacterSkillView({
                    model: unitProficiency,
                    tagName: 'li',
                    template: '#editCharacterSkillTemplate'
                });

                this.$units.append(skillView.render().el);
            }, this);
            
            return this;
        },
        
        update: function () {
            this.$availableAttributePoints.html(this.model.get('availableAttributePoints'));
        }
        
	});
	
	return EditCharacterDetailsView;
});