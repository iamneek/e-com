const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const mongoInit = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      dbName: process.env.MONGO_DB,
    });
  } catch (exception) {
    console.log(exception);
    throw { status: 500, msg: "Error Connecting To Database." };
  }
};

module.exports = mongoInit;
