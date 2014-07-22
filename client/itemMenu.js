Template.itemMenu.helpers({
	items: function() {
	  return Unlocks.find({ "user_id" : Meteor.userId() });
	}
});

Template.itemMenu.events({
	'click .item': function() {
		console.log(this);
		Meteor.call('equip', this);
	}
});