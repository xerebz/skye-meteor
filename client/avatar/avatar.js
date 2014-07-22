Template.avatar.helpers({
  userAvatar: function() {
    return Avatars.find({user_id: Meteor.userId()}).count();
  }
});

Template.avatar.events({
  'click button': function() {
    Meteor.call('resetAccount');
  }
});