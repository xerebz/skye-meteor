// The router maps URL paths to templates
// If the path is not explicitly given, the path is inferred from the name of the route e.g. /avatar -> template in avatar.html
Router.configure({
    layoutTemplate: 'layout',
    fastRender: true
});

Router.map (function() {
  this.route('home', {path: '/'}),
  this.route('avatar'),
  this.route('market'),
  this.route('play'),
  this.route('donate'),
  this.route('login'),
  this.route('notFound')
});

//before loading any page, check to see if logged in, otherwise route to login page
var mustBeSignedIn = function(pause) {
  if (!(Meteor.user() || Meteor.loggingIn())) {
    Router.go('login');
    pause();
  }
};

Router.onBeforeAction(mustBeSignedIn, {except: ['login']});

// Hooks.onLoggedIn = function() {
//   Router.go('home');
// }

// Hooks.onLoggedOut = function() {
//   Router.go('login');
// }
