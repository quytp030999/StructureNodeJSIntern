const mongoose = require("mongoose");

const connections = (uri) => {
  const conn = mongoose.createConnection(uri);

  conn.on("connected", () => {
    console.log(`MongoDb Connected ::: ${uri}`);
  });

  conn.on("disconnected", () => {
    console.log(`MongoDb Disconnected ::: ${uri}`);
  });

  conn.on("error", (err) => {
    console.log(`MongoDb Connect Error ::: ${JSON.stringify(err)}`);
  });

  return conn;
};

const ECommerce = connections("mongodb://127.0.0.1:27017/ECommerce");

module.exports = {
  ECommerce,
};
