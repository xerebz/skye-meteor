Template.avatarDisplay.helpers({
  drawAvatar: function() {
    return Avatars.find({user_id: Meteor.userId()}).count();
  }
});

Template.avatarDisplay.rendered = function() {

	var drawActiveEquippables = function(equippables) {

	};

	drawActiveEquippables();

};