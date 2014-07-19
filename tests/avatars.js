var assert = require('assert');

suite('Avatars', function() {
  test("first test woot", function(done, server, client) {
    var result = server.evalSync(function() {
      setTimeout(function() {
        emit('return', {a: 10});
      }, 10);
    });

    var finalResult = client.evalSync(function(data) {
      Router.go('login');
      waitForDOM( 'div#container', function() {
          var title = $('div#container').text();
          emit( 'return', title );
      });
    }, result);

    assert.equal(finalResult,'Welcome to login!');
    done();
  });
});
