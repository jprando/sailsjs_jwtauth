// api/polices/isAuthenticate

module.exports = async function isAuthenticate(req, res, proceed) {
  const naoAutorizado = () => {
    res
      .status(403)
      .type('text/plain')
      .send('nao autorizado');
  };

  let tokenAuth = req.headers['Authorization'] || req.headers['authorization'];
  tokenAuth = (tokenAuth && tokenAuth.split(' ')) || false;
  let token = (tokenAuth && tokenAuth[1]) || false;

  if (!token) {
    res.badRequest();
    return;
  }

  sails.services.jwtauth.verifyToken(token, (err, userData) => {
    if (err) {
      delete req.User;
      naoAutorizado();
    } else {
      req.User = userData;
      proceed(); // autorizar
    }
  });
};
