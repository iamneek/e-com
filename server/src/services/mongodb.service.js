const { MongoClient } = require("mongodb");

class MongoDBService {
  _connection;
  db;
  constructor() {
    this.connect();
  }
  connect = async () => {
    try {
      this._connection = await MongoClient.connect(process.env.MONGO_URL);
      this.db = this._connection.db(process.env.MONGO_DB);
    } catch (err) {
      throw { status: 500, msg: "Error Connecting To Database." };
    }
  };
}

module.exports = MongoDBService;
