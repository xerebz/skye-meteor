Template.avatar.helpers({
  userAvatar: function() {
    return Avatars.find({user_id: Meteor.userId()}).count();
  }
});

Template.createAvatarMenu.helpers({
  sause: function() {
    return "images/MaleA_Head.png";
  }
});

Template.avatar.events({
  'click button#create': function() {
    Meteor.call( 'createAvatar' );
  },
  'click button#destroy': function() {
    Meteor.call( 'destroyAvatar' );
  }, 
});

Template.navItems.helpers({
  activeIfTemplateIs: function (template) {
    var currentRoute = Router.current();
    return currentRoute &&
      template === currentRoute.lookupTemplate() ? 'active' : '';
  }
});