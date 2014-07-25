document.title = "Skye: Endless Realm";

Meteor.startup(function(){
  Hooks.init();
});

Template.navItems.helpers({
  activeIfTemplateIs: function (template) {
    var currentRoute = Router.current();
    return currentRoute &&
      template === currentRoute.lookupTemplate() ? 'active' : '';
  }
});