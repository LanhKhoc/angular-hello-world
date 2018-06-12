const FactoryMongo = require('../../base/base.model.js');

const COLLECTION_NAME = "users";
let UsersModel = FactoryMongo();

UsersModel.getAll = function() {
  return new Promise((resolve, reject) => {
    this.connect(COLLECTION_NAME)
      .then((collection) => {
        collection.find().toArray((err, result) => {
          if (err) { reject(err); }
          resolve(result);
          this.client.close();
        });
      })
      .catch(error => reject(error));
  });
}.bind(UsersModel);

UsersModel.login = function(data) {
  return new Promise((resolve, reject) => {
    this.connect(COLLECTION_NAME)
      .then((collection) => {
        collection.findOne({username: data.username, password: data.password})
          .then(item => resolve(item))
          .catch(error => reject(error));
      })
      .catch(error => reject(error));
  });
}.bind(UsersModel);

module.exports = {
  getAll: UsersModel.getAll,
  login: UsersModel.login
};