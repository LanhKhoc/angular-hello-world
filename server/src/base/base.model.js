const MongoClient = require('mongodb');
const { DB_HOST, DB_PORT, DB_NAME } = require('../config.js');
console.log(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`);

const Mongo = {
  client: null,
  db: null,

  connect(_collection) {
    return new Promise((resolve, reject) => {
      MongoClient.connect(`mongodb://${DB_HOST}:${DB_PORT}`, (err, client) => {
        if (err) { reject(err); }
        else {
          this.client = client;
          this.db = client.db(DB_NAME);
          this.db.collection(_collection, {strict: true}, (error, collection) => {
            if (err) { reject(error); }
            else { resolve(collection) }
          });
        }
      });
    })
  }
};

const MongoFactory = (obj = {}) => Object.assign(Object.create(Mongo), obj);

module.exports = MongoFactory;
