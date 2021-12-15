const { MongoClient } = require('mongodb');

const URL = 'mongodb://127.0.0.1:27017';
const DB_NAME = 'wut';

let connection = null;

module.exports = async () => {
  try{
    return connection 
      ? connection 
      : connection = (await MongoClient.connect(
        URL,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        },
      )).db(DB_NAME);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
