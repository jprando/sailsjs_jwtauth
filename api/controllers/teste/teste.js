// api/controller/teste/teste

module.exports = {
  friendlyName: 'Login do Usuario',
  exits: {
    success: {
      description: 'Teste retorna um valor qualqer',
      statusCode: 200,
      responseType: ''
    }
  },
  fn: async (inputs, exits, m) => {
    m.sails.log.info('teste ok user %s', m.req.User.userName);
    return exits.success({
      user: m.req.User,
      nome: 'Jeudi Teste OK'
    });
  }
};
