Template.userInventory.helpers({
	inventoryItems: function() {
	  return InventoryItems.find({ "user_id" : Meteor.userId() }).fetch();
	}
});