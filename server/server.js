Accounts.onCreateUser(function(options,user) {

	userid = user._id;
	
  //the default body is Male skin A
  var default_body = ItemTypes.findOne({'name': 'Male A Body'});

  //each new players gets a starter pack of items, here we fetch this array
  var starter_pack = ItemTypes.find({'itemPack': 'starter'}).fetch();

  //for each starter pack item...
  _.each(starter_pack, function(item) {

    //unlock each item for the user
    UserItems.insert({
      'userId': userid,
      'acquiredAt': new Date().valueOf(),
      'item': item
    });

    //equip only the male starter items for the user since you start out a male
    if (item.gender !== 'female') {
      EquippedItems.insert({
        'userId': userid,
        'category': item.category,
        'item': item
      });
    }

  });

  Avatars.insert({
    'userId': userid,
    'sex': 'Male',
    'skin': 'A',
    'body': default_body,
  });

  Wallets.insert({
    'userId': userid,
    'gems': 100,
    'hearts': 0
  });

  return user;

});