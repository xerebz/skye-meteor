Meteor.methods({

  //creating a user avatar for the first time
  createAvatar: function(sex, skintone) {

  	var x = Equippables.find({"name": "Male A Body"}, {fields: {'_id':1}}).fetch()
  	console.log(x)
    // if no avatar? some validation here plox
    Avatars.insert({
      "user_id": Meteor.userId(),
      "sex": sex,
	    "skintone": skintone,
	    "body": 1
    });
    Inventories.insert({
    	"user_id": Meteor.userId(),
    	"items": 1
    });
    Wallets.insert({
    	"user_id": Meteor.userId(),
    	"gems": 100,
    	"hearts": 0
    });
  },

  destroyAvatar: function() {
    // if no avatar? some validation here plox
    Avatars.remove({
      "user_id": Meteor.userId()
    });
    Inventories.remove({
      "user_id": Meteor.userId()
    });
    Wallets.remove({
      "user_id": Meteor.userId()
    });
  }

});