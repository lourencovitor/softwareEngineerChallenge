const express = require("express");
const db = require("./database/config");
const mongoose = require("mongoose");
const cors = require("cors");

class App {
  constructor() {
    this.express = express();
    this.database();
    this.middlewares();
    this.routes();

    console.log(`Sua API REST está funcionando na porta 5001`);
  }

  database() {
    mongoose
      .connect(db.uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then("Connect success");
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(cors());
  }

  routes() {
    this.express.use(require("./routes"));
  }
}
module.exports = new App().express;
