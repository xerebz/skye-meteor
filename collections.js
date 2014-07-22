// Database collections (MongoDB models) are laid out here

// All item items
Items = new Meteor.Collection("items");

// All avatars
Avatars = new Meteor.Collection("avatars");

// Items currently equipped
EquippedItems = new Meteor.Collection("equippedItems");

// User item unlocks
InventoryItems = new Meteor.Collection("inventoryItems");

// Outfits?
Outfits = new Meteor.Collection("outfits");

// User currency held in wallets
Wallets = new Meteor.Collection("wallets");