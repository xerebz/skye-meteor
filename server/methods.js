Meteor.methods({

  //creating a user avatar for the first time
  resetAccount: function() {

    Avatars.remove({
      'userId': Meteor.userId()
    });

    EquippedItems.remove({
      'userId': Meteor.userId()
    });

    InventoryItems.remove({
      'userId': Meteor.userId()
    });

    Wallets.remove({
      'userId': Meteor.userId()
    });

    //the default body is Male skin A
    var default_body = Items.findOne({'name': 'Male A Body'});

    //each new players gets a starter pack of items, here we fetch this array
    var starter_pack = Items.find({'itemPack': 'starter'}).fetch();

    //for each starter pack item...
    _.each(starter_pack, function(item) {

      //unlock each item for the user
      InventoryItems.insert({
        'userId': Meteor.userId(),
        'acquiredAt': new Date().valueOf(),
        'item': item
      });

      //equip only the male starter items for the user since you start out a male
      if (item.gender !== 'female') {
        EquippedItems.insert({
          'userId': Meteor.userId(),
          'category': item.category,
          'item': item
        });
      }

    });

    Avatars.insert({
      'userId': Meteor.userId(),
      'sex': 'Male',
      'skin': 'A',
      'body': default_body,
    });

    Wallets.insert({
      'userId': Meteor.userId(),
      'gems': 100,
      'hearts': 0
    });

  },

  toggleEquip: function(item) {

    var isCurrentlyEquipped = EquippedItems.find( { "userId": Meteor.userId(), "item.name": item.name } ).count();

    if ( isCurrentlyEquipped > 0 ) {
      EquippedItems.remove({ "userId": Meteor.userId(), "item.name": item.name });
    } else {
      EquippedItems.update(
        { "userId": Meteor.userId(), 'category': item.category, },
        { $set: { "item" : item } },
        { upsert : true }
      );      
    }

  },

  buy: function(item) {

    var userWallet = Wallets.findOne({"userId": Meteor.userId()});

    if (item.gemBuyPrice < userWallet.gems) {

      Wallets.update(
        { "userId": Meteor.userId() },
        { $inc: { 'gems': -item.gemBuyPrice } }
      );

      InventoryItems.insert({
        'userId': Meteor.userId(),
        'acquiredAt': new Date().valueOf(),
        'item': item
      });

    }

  },

  sell: function(userItem) {

    //if user has no more of this item, unequip
    

    Wallets.update(
      { "userId": Meteor.userId() },
      { $inc: { 'gems': userItem.item.gemSellPrice } }
    );

    InventoryItems.remove(
      { "_id": userItem._id }
    );
    
  },

  grind: function() {

    Wallets.update(
      { 'userId': Meteor.userId() },
      { $inc: { 'gems': 100 } }
    );

  },

  donate: function() {

    Wallets.update(
      { 'userId': Meteor.userId() },
      { $inc: { 'hearts': 10 } }
    );

  },

  toggleSex: function() {
    
    var currentBody = EquippedItems.findOne({ "userId": Meteor.userId(), "item.category": "body" });
    console.log("currentBody");
    console.log(currentBody);

    if (currentBody.item.gender === "male") {
      var equivalentFemale = Items.findOne({ "category": "body", "gender": "female", "skintone": currentBody.item.skintone });
      EquippedItems.update(
        { "userId": Meteor.userId(), "item.category": "body" },
        { $set: { "item": equivalentFemale } }
      );
    } else if (currentBody.item.gender === "female") {
      var equivalentMale = Items.findOne({ "category": "body", "gender": "male", "skintone": currentBody.item.skintone });
      EquippedItems.update(
        { "userId": Meteor.userId(), "item.category": "body" },
        { $set: { "item": equivalentMale } }
      );
    }

  }

});