Meteor.startup(function() {
	Equippables.remove({});
	if ( Equippables.find().count() === 0 ) {
	  Equippables.insert({
	  	'Name': "Yo_mums"
	  });
	}
});