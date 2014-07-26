// Database collections (MongoDB models) are laid out here

// All item types
ItemTypes = new Meteor.Collection("itemTypes");

// User avatars
Avatars = new Meteor.Collection("avatars");

// Avatar bodies
Bodies = new Meteor.Collection("bodies");

// Items currently equipped by users
EquippedItems = new Meteor.Collection("equippedItems");

// User item unlocks
UserItems = new Meteor.Collection("userItems");

// User avatar outfits, item combinations
Outfits = new Meteor.Collection("outfits");

// User currency held in wallets
Wallets = new Meteor.Collection("wallets");