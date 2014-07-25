Template.walletInfo.helpers({
	wallet: function() {
	  return Wallets.findOne({"userId": Meteor.userId()});
	}
});