Template.avatar.helpers({
  userAvatar: function() {
    return Avatars.find({user_id: Meteor.userId()}).count();
  }
});

Template.avatar.events({
	'click #user-inventory .item-thumbnail': function() {
		Meteor.call('handleEquip', this.item);
	}
});

// autorun for briefs
// Deps.autorun(function() {
// 	if (EquippedItems({"user-id": Meteor.userId(), "item.category": "pants"}).count() === 0) {
// 		InventoryItems({"user-id": Meteor.userId(), "item.name": "Disappearing Briefs"});
// 		Meteor.call('handleEquip', this.item);
// 	}
// });