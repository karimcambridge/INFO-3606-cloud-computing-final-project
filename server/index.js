import Sequelize from 'sequelize';

const database = new Sequelize({
  dialect: 'sqlite',
  storage: './db.sqlite'
})

const models = {
  User: sequelize.import('./models/user'),
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };

export default models;