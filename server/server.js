Accounts.onCreateUser (function(options, user) {
  user.money = 100;
  if (options.profile)
    user.profile = options.profile;
  return user;
});

Meteor.methods({
  buy: function() {
    Meteor.user().update({ $inc: {"money": -5} });
  }
});