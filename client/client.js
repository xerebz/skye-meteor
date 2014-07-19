Template.avatar.helpers({
  userAvatar: function() {
    return Avatars.find({user_id: Meteor.userId()});
  }
});

Template.createAvatarMenu.helpers({
  sause: function() {
    return "images/MaleA_Head.png";
  }
});

Template.avatar.events({
  'click button': function() {
    Meteor.call( 'createAvatar', Session.get('sex'), Session.get('skintone') );
  }
});

Template.navItems.helpers({
  activeIfTemplateIs: function (template) {
    var currentRoute = Router.current();
    return currentRoute &&
      template === currentRoute.lookupTemplate() ? 'active' : '';
  }
});