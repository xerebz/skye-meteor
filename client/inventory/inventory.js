Template.userInventory.helpers({
	inventoryItems: function() {
	  return InventoryItems.find({ "user_id" : Meteor.userId() }).fetch();
	}
});

Template.userInventory.events({
	'click .item-thumbnail': function() {
		Meteor.call('handleEquip', this.item);
	}
});