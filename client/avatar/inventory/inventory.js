Template.avatarInventory.helpers({
	inventoryItems: function() {
	  return InventoryItems.find({ "user_id" : Meteor.userId() }).fetch();
	}
});

Template.avatarInventory.events({
	'click .item-thumbnail': function() {
		Meteor.call('handleEquip', this.item);
	}
});