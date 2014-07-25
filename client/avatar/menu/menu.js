Template.avatarMenu.events({
	'click .item-thumbnail': function() {
		Meteor.call('toggleEquip', this.item);
	}
});

Template.ownedItems.helpers({
	ownedItems: function() {
	  return InventoryItems.find({ "user_id" : Meteor.userId() }).fetch();
	}
});

Template.equippedItems.helpers({
	equippedItems: function() {
	  return EquippedItems.find({ "user_id" : Meteor.userId() }).fetch();
	}
});

Template.newItems.helpers({
	newItems: function() {
		//using moment.js to find the time 1 minute ago
		var timeWindow =  moment().subtract("minutes", 1).valueOf();
	  return InventoryItems.find({ "user_id" : Meteor.userId(), "acquiredAt": { $gt: timeWindow } }).fetch();
	}
});

Template.textSearch.settings = function() {
  return {
   position: "top",
   limit: 5,
   rules: [
     {
       token: '',
       collection: InventoryItems,
       options: '',
       matchAll: true,
       filter: { user_id: Meteor.userId() },
       template: Template.dataPiece
     }
   ]
  }
};