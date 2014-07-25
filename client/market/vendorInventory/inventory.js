Template.vendorItems.helpers({
	items: function() {
	  return Items.find().fetch();//return Items.find({"vendorItem": true}).fetch();
	}
});

Template.vendorItems.events({
	'click .item-thumbnail': function() {
		Meteor.call('buy', this);
	}	
});