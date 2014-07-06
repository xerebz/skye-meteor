Session.setDefault("skintone", "A");
Session.setDefault("sex", "Male");

Template.avatar.helpers({
  userAvatar: function() {
    return Avatars.find({user_id: Meteor.userId()});
  }
});

Template.createAvatarMenu.helpers({
  sause: function() {
    return "images/"+Session.get("sex")+Session.get("skintone")+"_Head.png";
  }
});

Template.avatar.events({
  'click button': function() {
    Meteor.call( 'createAvatar', Session.get('sex'), Session.get('skintone') );
  }
});



Template.avatarDisplay.canvas = function() {
  return "hey";
};