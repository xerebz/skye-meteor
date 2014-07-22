Template.walletInfo.helpers({
	wallet: function() {
	  return Wallets.findOne({"user_id": Meteor.userId()});
	}
});