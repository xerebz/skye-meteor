Template.itemMenu.helpers({
	inventoryItems: function() {
	  return InventoryItems.find({ "user_id" : Meteor.userId() }).fetch();
	}
});

Template.itemMenu.events({
	'click .item': function() {
		console.log(this);
		//Meteor.call('equip', this);
		Meteor.call('handleEquip', this.item);
	}
});