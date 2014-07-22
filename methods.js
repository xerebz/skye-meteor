Meteor.methods({

  //creating a user avatar for the first time
  createAvatar: function() {

  	var default_body = Equippables.findOne({'name': 'Male A Body'}, {fields: {'_id':1}});

    var starter_pack = Equippables.find({'itempack': 'starter'}).fetch();
    var starter_pack_ids = _.pluck(starter_pack, '_id');

    var initially_equipped_items = _.where(starter_pack, { gender: 'male' });
    var initially_equipped_items_ids = _.pluck(initially_equipped_items, '_id');

    Avatars.insert({
      'user_id': Meteor.userId(),
      'sex': 'Male',
	    'skintone': 'A',
	    'body': default_body._id,
      'equipped_items': initially_equipped_items_ids
    });
    Inventories.insert({
    	'user_id': Meteor.userId(),
    	'items': starter_pack_ids
    });
    Wallets.insert({
    	'user_id': Meteor.userId(),
    	'gems': 100,
    	'hearts': 0
    });
  },

  destroyAvatar: function() {
    // if no avatar? some validation here plox
    Avatars.remove({
      'user_id': Meteor.userId()
    });
    Inventories.remove({
      'user_id': Meteor.userId()
    });
    Wallets.remove({
      'user_id': Meteor.userId()
    });
  },

  equip: function(equippable) {
    Avatars.update({"user_id": Meteor.userId()}, { $push: {
                                  equipped_items: {
                                             $each: [ <value1>, <value2>, ... ],
                                             $position: <num>
                                  }
                               }
                      });
  }

});