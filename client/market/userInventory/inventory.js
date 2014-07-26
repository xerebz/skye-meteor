Template.userItems.helpers({
	items: function() {
	  return UserItems.find({ "userId" : Meteor.userId() }).fetch();
	}
});

Template.userItems.events({
	'click .item-thumbnail': function() {
		Meteor.call('sell', this);
	}
});