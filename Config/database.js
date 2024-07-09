const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = async () => {
  await mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
      console.log("Db connected");
    })
    .catch((error) => {
      console.log("Db connection error");
      console.error(error);
      process.exit(1);
    });
};

module.exports = dbConnect;
