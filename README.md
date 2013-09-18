Lockpicker
===========

[![Build Status](https://drone.io/github.com/luizbranco/lockpicker/status.png)](https://drone.io/github.com/luizbranco/lockpicker/latest)

Simple wrapper to create passwords hashes and validate them using crypto.pbkdf2

## How to Install

    npm install --save lockpicker

## Usage Example

### Creating a password hash and salt

    var lockpicker = require("lockpicker");

    var dbUser = {};

    var plainPassword = "secret";

    lockpicker.hashPassword(plainPassword, function(err, password) {
      if (err) throw new Error(err)
      dbUser.password = password.hash;
      dbUser.salt = password.salt;
    });

### Validating a password

    var lockpicker = require("lockpicker");

    var dbUser = {salt: "...", password: "..."};

    var plainPassword = "secret";

    lockpicker.validatePassword(plainPassword, dbUser.password, dbUser.salt, function(err) {
      if (err) return false;
      return true;
    });
