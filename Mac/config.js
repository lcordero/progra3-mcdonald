module.exports = {
    port: process.env.PORT || 3001,
    db: process.env.MONGODB_URI || 'mongodb+srv://anthony_re:06thonypass@cluster0-r90l1.mongodb.net/menu?retryWrites=true&w=majority',
    SECRET_TOKEN: 'miclavedetokens'
  }