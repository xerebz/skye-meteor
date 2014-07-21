Meteor.methods({
  buy: function() {
    Meteor.user().update({ $inc: {"money": -5} });
  }
});