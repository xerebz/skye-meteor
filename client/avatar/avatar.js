Template.avatar.helpers({
  userAvatar: function() {
    return Avatars.find({userId: Meteor.userId()}).count();
  }
});

Template.avatar.events({
	'click #user-inventory .item-thumbnail': function() {
		Meteor.call('handleEquip', this.item);
	}
});