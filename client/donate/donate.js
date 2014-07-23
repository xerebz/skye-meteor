// Template.donate.helpers({

// });

Template.donate.events({
	'click button#donate': function() {
	  Meteor.call('donate');
	}
});