Template.avatarDisplay.helpers({
 //  displayEquippedItems: function() {
	//   var equippedItems = EquippedItems.find({ "user_id" : Meteor.userId() }).fetch();
	//   var ctx = $("#avatar-canvas")[0].getContext("2d");
	//   _.each(equippedItems, function(item) {
	//   	_.each(item.layers, function(img) {
	// 		  var img = new Image();
	// 		  img.src = "images/"+img.filename;
	// 		  img.onload = function() {
	// 		  	ctx.drawImage(img,0,0);
	// 		  }
	// 	  });
	// 	});
	// }
	equippedItems: function() {
		return EquippedItems.find({ 'user_id': Meteor.userId() }).fetch();
	}
});

Template.avatarDisplay.rendered = function() {

  // var ctx = $("#avatar-canvas")[0].getContext("2d");
  // var img = new Image();
  // img.src = "images/MaleA_Head.png";
  // img.onload = function() {
  // 	ctx.drawImage(img,0,0);
  // }

};