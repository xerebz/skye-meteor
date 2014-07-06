// The router maps URL paths to templates
// If the path is not explicitly given, the path is inferred from the name of the route e.g. /avatar -> template in avatar.html

Router.map (function() {
  this.route('home', {path: '/'}),
  this.route('avatar'),
  this.route('market')
});