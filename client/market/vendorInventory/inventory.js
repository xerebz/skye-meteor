Template.vendorItems.helpers({
	items: function() {
	  return ItemTypes.find().fetch();//return Items.find({"vendorItem": true}).fetch();
	}
});

Template.vendorItems.events({
	'click .item-thumbnail': function() {
		Meteor.call('buy', this);
	}	
});