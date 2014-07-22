Meteor.methods({

  //creating a user avatar for the first time
  createAvatar: function() {

    //the default body is Male skin A
  	var default_body = Items.findOne({'name': 'Male A Body'});

    //each new players gets a starter pack of items, here we fetch this array
    var starter_pack = Items.find({'itempack': 'starter'}).fetch();

    //for each starter pack item...
    _.each(starter_pack, function(item) {

      //unlock each item for the user
      Unlocks.insert({
        'user_id': Meteor.userId(),
        'item_id': item._id
      });

      //equip only the male starter items for the user since you start out a male
      if (item.gender === 'male') {
        Equips.insert({
          'user_id': Meteor.userId(),
          'item_type': item.type,
          'item_id': item._id
        });
      }

    });

    Avatars.insert({
      'user_id': Meteor.userId(),
      'sex': 'Male',
	    'skin': 'A',
	    'body': default_body._id,
    });

    Wallets.insert({
    	'user_id': Meteor.userId(),
    	'gems': 100,
    	'hearts': 0
    });

  },

  destroyAvatar: function() {
    Avatars.remove({
      'user_id': Meteor.userId()
    });
    Equips.remove({
      'user_id': Meteor.userId()
    });
    Unlocks.remove({
      'user_id': Meteor.userId()
    });
    Wallets.remove({
      'user_id': Meteor.userId()
    });
  },

  equip: function(item) {
    Equips.update(
      { "user_id": Meteor.userId(), "item_type": item.type },
      { $set: { "item_id" : item._id } },
      { upsert : true }
    );
  }

});