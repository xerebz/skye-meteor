// Template.play.helpers({

// });

Template.play.events({
	'click button#grind': function() {
		Meteor.call('grind');
	}
});