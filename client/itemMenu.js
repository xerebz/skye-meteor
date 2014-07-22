Template.itemMenu.helpers({
	items: function() {
	  var items_array = Inventories.findOne({ "user_id" : Meteor.userId() }).items;
	  return Equippables.find({ "_id" : { $in: items_array } }).fetch();
	}
});

Template.itemMenu.events({
	'click .equippable': function() {
		console.log(this);
		Meteor.call('equip', this);
	}
});