const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();

class BrandCntrl {
  Brand = async (req, res, next) => {
    try {
      let data = req.body;

      const connection = await MongoClient.connect(process.env.MONGO_URL);
      const db = connection.db(process.env.MONGO_DB);

      let response = await db.collection("brands").insertOne();
      console.log(response);
    } catch (exception) {
      console.log(exception);
      next(exception);
    }
  };
}

module.exports = BrandCntrl;
