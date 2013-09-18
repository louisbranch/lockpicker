var lockpicker = require("../index");
var assert = require("assert");

describe("lockpicker", function(){
  var password;

  beforeEach(function(done){
    lockpicker.hashPassword("secret", function (err, result) {
      password = result;
      done();
    });
  });

  describe(".hashPassword", function(){

    describe("hash", function(){

      it("creates a password hash", function(){
        assert(password.hash);
      });

      it("has a lenght of 88 characters", function(){
        assert.equal(88, password.hash.length);
      });

    });

    describe("salt", function(){

      it("creates a password salt", function(){
         assert(password.salt);
      });

      it("has a length of 24 characters", function(){
        assert.equal(24, password.salt.length);
      });

    });

  });

  describe(".validatePassword", function(){

    describe("when it is a valid combination", function(){

      it("returns no error", function(done){
        lockpicker.validatePassword("secret", password.hash, password.salt, function (err) {
          assert.equal(null, err);
          done();
        });
      });

    });

    describe("when it is not a valid combination", function(){

      it("returns a error message", function(done){
        lockpicker.validatePassword("notsecret", password.hash, password.salt, function (err) {
          assert.equal("Password doesn't match", err);
          done();
        });
      });

    });

  });

});
