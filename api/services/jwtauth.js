// api/services/jwtauth

const jwt = require('jsonwebtoken');

const jwtauth = {
  generateToken: function(payload) {
    return jwt.sign(payload, sails.config.session.secret);
  },

  verifyToken: function(token, cb) {
    return jwt.verify(token, sails.config.session.secret, {}, cb);
  }

  // getUser: function(token, cb) {
  //   jwtauth.verifyToken(token, (err, data) => {
  //     if (err) {
  //       return cb(err);
  //     }
  //     sails.models.user.findOne({ id: data.userId }, (err, User) => {
  //       if (err) {
  //         return cb(err);
  //       }
  //       cb(null, User);
  //     });
  //   });
  // }
};

module.exports = jwtauth;
