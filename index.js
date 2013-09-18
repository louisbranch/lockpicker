var crypto = require("crypto");

function hashing(password, salt, callback) {
  crypto.pbkdf2(password, salt, 500, 64, function(err, derivedKey) {
    var hash = new Buffer(derivedKey).toString("base64");
    if (err) return callback(err);
    callback(null, {salt: salt, hash: hash});
  });
}

function createHash(password, callback) {
  var salt = crypto.randomBytes(16).toString("base64");
  hashing(password, salt, callback);
}

function validateHash(plainPassword, hashedPassword, salt, callback) {
  hashing(plainPassword, salt, function (err, password) {
    if (hashedPassword === password.hash) return callback(null);
    callback("Password doesn't match");
  });
}

module.exports = {
  hashPassword: createHash,
  validatePassword: validateHash
};
