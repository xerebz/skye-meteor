Meteor.methods({

  //creating a user avatar for the first time
  createAccount: function() {

    //the default body is Male skin A
    var default_body = Items.findOne({'name': 'Male A Body'});

    //each new players gets a starter pack of items, here we fetch this array
    var starter_pack = Items.find({'itempack': 'starter'}).fetch();

    //for each starter pack item...
    _.each(starter_pack, function(item) {

      //unlock each item for the user
      InventoryItems.insert({
        'user_id': Meteor.userId(),
        'item': item
      });

      //equip only the male starter items for the user since you start out a male
      if (item.gender === 'male') {
        EquippedItems.insert({
          'user_id': Meteor.userId(),
          'item_type': item.type,
          'item': item
        });
      }

    });

    Avatars.insert({
      'user_id': Meteor.userId(),
      'sex': 'Male',
      'skin': 'A',
      'body': default_body,
    });

    Wallets.insert({
      'user_id': Meteor.userId(),
      'gems': 100,
      'hearts': 0
    });

  },

  destroyAccount: function() {

    Avatars.remove({
      'user_id': Meteor.userId()
    });

    EquippedItems.remove({
      'user_id': Meteor.userId()
    });

    InventoryItems.remove({
      'user_id': Meteor.userId()
    });

    Wallets.remove({
      'user_id': Meteor.userId()
    });

  },

  resetAccount: function() {
    destroyAccount();
    createAccount();
  },

  handleEquip: function(item) {

    var isCurrentlyEquipped = EquippedItems.find( { "user_id": Meteor.userId(), "item.name": item.name } ).count();

    if ( isCurrentlyEquipped > 0 ) {
      EquippedItems.remove({ "user_id": Meteor.userId(), "item.name": item.name });
    } else {
      EquippedItems.update(
        { "user_id": Meteor.userId(), "item_type": item.type },
        { $set: { "item" : item } },
        { upsert : true }
      );      
    }

  },

  buy: function(item) {

    InventoryItems.insert({
      "user_id": Meteor.userId(),
      "item": item
    });

  },

  sell: function(item) {

    InventoryItems.remove(
      { "user_id": Meteor.userId(), "item": item },
      { justOne: true }
    );
    
  }

});