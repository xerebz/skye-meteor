Template.market.events({
	'click #user-inventory .item-thumbnail': function() {
		Meteor.call('sell', this);
	},
	'click #vendor-inventory .item-thumbnail': function() {
		Meteor.call('buy', this);
	}	
});