import Sequelize from 'sequelize';

const database = new Sequelize({
  dialect: 'sqlite',
  storage: './db.sqlite'
})

const models = {
  User: database.import('./models/user'),
};

Object.keys(models).forEach(key => {
  if('associate' in models[key]) {
    models[key].associate(models);
  }
});

database.sync({ force: true })
	.then(() => {
		console.log(`[DATABASE]: Loaded.`)
	});

export { database };

export default models;
