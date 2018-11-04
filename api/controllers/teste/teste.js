// api/controller/teste/teste

module.exports = {
  friendlyName: 'Teste privado, somente para usuarios logados',
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
      token: m.req.User,
      nome: 'Jeudi Teste OK'
    });
  }
};
