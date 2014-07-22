Template.avatarDisplay.helpers({
  equippedItems: function() {
	  var equipped_items_array = Avatars.findOne({ "user_id" : Meteor.userId() }).equipped_items;
	  return Equippables.find({ "_id" : { $in: items_array } }).fetch();
  }
});

Template.avatarDisplay.rendered = function() {

  var ctx = $("#avatar-canvas")[0].getContext("2d");
  var img = new Image();
  ctx.drawImage(img,0,0);

};