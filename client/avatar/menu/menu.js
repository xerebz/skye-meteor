Template.avatarMenu.events({
	'click .item-thumbnail': function() {
		Meteor.call('toggleEquip', this.item);
	}
});

Template.ownedItems.helpers({
	items: function() {
	  return UserItems.find({ "userId" : Meteor.userId() }).fetch();
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
	  return UserItems.find({ "userId" : Meteor.userId(), "acquiredAt": { $gt: timeWindow } }).fetch();
	}
});

Template.textSearch.settings = function() {
  return {
   position: "top",
   limit: 5,
   rules: [
     {
       token: '',
       collection: UserItems,
       options: '',
       matchAll: true,
       filter: { userId: Meteor.userId() },
       template: Template.dataPiece
     }
   ]
  }
};

Template.utilityButtons.events({
	'click #toggle-gender': function() {
		console.log("changin sex");
		Meteor.call('toggleGender');
	},
	'click #remove-all-equipped': function() {
		console.log("remove-all");
		Meteor.call('removeAllEquipped');
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