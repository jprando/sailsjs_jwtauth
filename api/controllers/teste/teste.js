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
    let firstUserName = m.req.User.userName.split(' ')[0];
    m.sails.log.info('teste ok user %s', firstUserName);
    exits.success({
      token: m.req.User,
      nome: firstUserName + ' Teste OK'
    });
  }
};
