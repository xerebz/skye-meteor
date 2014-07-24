Template.vendorInventory.helpers({
	vendorItems: function() {
	  return Items.find().fetch();//return Items.find({"vendorItem": true}).fetch();
	}
});

Template.vendorInventory.events({
	'click .item-thumbnail': function() {
		console.log("should buy");//Meteor.call('buy', this);
	}
});