
var server = require("../src/server");
var request = require('supertest');

describe('GET /', function(){
  it('respond with json', function(done){
    request(server.app)
      .get('/1450137600')
      .expect(200, done);
  });
})