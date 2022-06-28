const mongoose = require("mongoose");
const URI = process.env.CONNECTION_URL;
// "mongodb://localhost:27017/tpo?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

const connect = () => {
  mongoose.connect(URI, () => {
    console.log("Connect ho gya bhayaji !!");
  });
};
module.exports = connect;
