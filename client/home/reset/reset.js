Template.reset.events({
  'click button#reset-account': function() {
    Meteor.call('resetAccount');
  }
});