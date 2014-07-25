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