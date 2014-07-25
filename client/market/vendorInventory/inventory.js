Template.vendorInventory.helpers({
	vendorItems: function() {
	  return Items.find().fetch();//return Items.find({"vendorItem": true}).fetch();
	}
});