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
	},
	suzy: function() {
	  var stage = new Kinetic.Stage();
	      container: 'grid_map'
	      width: 385
	      height: 375
	  var layer = new Kinetic.Layer()	
	},
	pants: function() {
		console.log("you know dis gon fail");
		console.log(stage);
	}
});

Template.avatarDisplay.rendered = function() {

};