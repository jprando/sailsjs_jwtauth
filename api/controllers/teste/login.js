// api/controllers/teste/login

module.exports = {
  friendlyName: 'Login do Usuario',
  inputs: {
    user: { type: 'string', required: true, description: 'nome do usuario' },
    pass: { type: 'string', required: true, description: 'senha do usuario' }
  },
  exits: {
    sucess: {
      description: 'Informa o token do usuario',
      statusCode: 200,
      responseType: ''
    }
  },
  fn: async function(inputs, exits, m) {
    let tokenData = { userName: inputs.user };
    let token = sails.services.jwtauth.generateToken(tokenData);
    m.sails.log.info('user %s login', inputs.user);
    return exits.sucess({ token: token });
  }
};
