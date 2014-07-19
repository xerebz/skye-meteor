var assert = require('assert');

suite('Avatars', function() {

  // test('in the server', function(done, server) {
  //   server.eval(function() {
  //     Avatars.insert({gender: 'male'});
  //     var docs = Avatars.find().fetch();
  //     emit('docs', docs);
  //   });

  //   server.once('docs', function(docs) {
  //     assert.equal(docs.length, 1);
  //     done();
  //   });
  // });

  // test('using both client and the server', function(done, server, client) {
  //   server.eval(function() {
  //     Avatars.find().observe({
  //       added: addedNewAvatar
  //     });

  //     function addedNewAvatar(avatar) {
  //       emit('avatar', avatar);
  //     }
  //   }).once('avatar', function(avatar) {
  //     assert.equal(avatar.title, 'hello title');
  //     done();
  //   });

  //   client.eval(function() {
  //     Avatars.insert({title: 'hello title'});
  //   });
  // });

  // test('using two client', function(done, server, c1, c2) {
  //   c1.eval(function() {
  //     Avatars.find().observe({
  //       added: addedNewAvatar
  //     });

  //     function addedNewAvatar(avatar) {
  //       emit('avatar', avatar);
  //     }
  //     emit('done');
  //   }).once('avatar', function(avatar) {
  //     assert.equal(avatar.title, 'from c2');
  //     done();
  //   }).once('done', function() {
  //     c2.eval(insertAvatar);
  //   });

  //   function insertAvatar() {
  //     Avatars.insert({title: 'from c2'});
  //   }
  // });
  
});

