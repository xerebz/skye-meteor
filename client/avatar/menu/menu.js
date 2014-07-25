Template.avatarMenu.events({
	'click .item-thumbnail': function() {
		Meteor.call('toggleEquip', this.item);
	}
});

Template.ownedItems.helpers({
	items: function() {
	  return InventoryItems.find({ "userId" : Meteor.userId() }).fetch();
	}
});

Template.equippedItems.helpers({
	items: function() {
	  return EquippedItems.find({ "userId" : Meteor.userId() }).fetch();
	}
});

Template.newItems.helpers({
	items: function() {
		//using moment.js to find the time 1 minute ago
		var timeWindow =  moment().subtract("minutes", 1).valueOf();
	  return InventoryItems.find({ "userId" : Meteor.userId(), "acquiredAt": { $gt: timeWindow } }).fetch();
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
       filter: { userId: Meteor.userId() },
       template: Template.dataPiece
     }
   ]
  }
};

Template.utilityButtons.events({
	'click #toggle-sex': function() {
		console.log("changin sex");
		Meteor.call('toggleSex');
	},
	'click #remove-equipment': function() {
		console.log("remove-all");
		Meteor.call('removeEquipment');
	},
	'click #save-outfit': function() {
		console.log("save-outfit");
		Meteor.call('saveOutfit');
	},
	'click #publish-avatar': function() {
		console.log("publish");
		Meteor.call('publishAvatar');
	}	
});