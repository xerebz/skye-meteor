Meteor.methods({

  //creating a user avatar for the first time
  createAvatar: function(sex, skintone) {
    // if no avatar? some validation here plox
    Avatars.insert({
      'user_id': Meteor.userId(),
      'sex': sex,
	    'skintone': skintone
    });
  },

  destroyAvatar: function() {
    // if no avatar? some validation here plox
    Avatars.remove({
      'user_id': Meteor.userId()
    });
  }

});