Meteor.methods({

  //creating a user avatar for the first time
  resetAccount: function() {

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

    //the default body is Male skin A
    var default_body = Items.findOne({'name': 'Male A Body'});

    //each new players gets a starter pack of items, here we fetch this array
    var starter_pack = Items.find({'itemPack': 'starter'}).fetch();

    //for each starter pack item...
    _.each(starter_pack, function(item) {

      //unlock each item for the user
      InventoryItems.insert({
        'user_id': Meteor.userId(),
        'item': item
      });

      //equip only the male starter items for the user since you start out a male
      if (item.gender !== 'female') {
        EquippedItems.insert({
          'user_id': Meteor.userId(),
          'category': item.category,
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

  handleEquip: function(item) {

    var isCurrentlyEquipped = EquippedItems.find( { "user_id": Meteor.userId(), "item.name": item.name } ).count();

    if ( isCurrentlyEquipped > 0 ) {
      EquippedItems.remove({ "user_id": Meteor.userId(), "item.name": item.name });
    } else {
      EquippedItems.update(
        { "user_id": Meteor.userId(), 'category': item.category, },
        { $set: { "item" : item } },
        { upsert : true }
      );      
    }

  },

  buy: function(item) {

    var userWallet = Wallets.findOne({"user_id": Meteor.userId()});

    if (item.gemBuyPrice < userWallet.gems) {

      Wallets.update(
        { "user_id": Meteor.userId() },
        { $inc: { 'gems': -item.gemBuyPrice } }
      );

      InventoryItems.insert({
        'user_id': Meteor.userId(),
        'item': item
      });

    }

  },

  sell: function(userItem) {

    Wallets.update(
      { "user_id": Meteor.userId() },
      { $inc: { 'gems': userItem.item.gemSellPrice } }
    );

    InventoryItems.remove(
      { "_id": userItem._id }
    );
    
  },

  grind: function() {

    Wallets.update(
      { 'user_id': Meteor.userId() },
      { $inc: { 'gems': 100 } }
    );

  },

  donate: function() {

    Wallets.update(
      { 'user_id': Meteor.userId() },
      { $inc: { 'hearts': 10 } }
    );

  }

});