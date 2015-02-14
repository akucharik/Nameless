define([
	'backbone',
    'jquery',
    'views/characterListItem'
], function(
    Backbone,
    $,
    CharacterListItemView
) {

	var CharacterListView = Backbone.View.extend({
		
		initialize: function () {
            this.views = {};
            this.placeholder = document.createDocumentFragment();
            
            // cache views
            this.collection.each(function (character) {
                this.addView(character);
            }, this);
            
            this.listenTo(this.collection, {
                'add': this.onAdd,
                'change remove': this.render
            });
            
            this.render();
		},
        
        events: {
            'click tr': 'onItemClick'
        },
        
        addView: function (model) {
            this.views[model.cid] = new CharacterListItemView({
                model: model,
                tagName: 'tr',
                template: '#characterListItemTemplate'
            });
        },
        
        onAdd: function (character) {
            this.addView(character);
            
            this.render();
        },
        
        onItemClick: function () {
            alert('Edit chartacter');
        },
        
        render: function () {
            this.collection.sort();
            
            this.collection.each(function (character) {
                this.placeholder.appendChild(this.views[character.cid].el);
            }, this);

            this.el.appendChild(this.placeholder);
            
            return this;
        }
        
	});
	
	return CharacterListView;
});