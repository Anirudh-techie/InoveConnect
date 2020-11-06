const { MongoClient } = require("mongodb");
require("mongodb").connect('mongodb://localhost:27017',{useUnifiedTopology:true}).then(
      (db)=>{
            this.db = db;
            console.log("connected")
      }
);

module.exports.db = MongoClient;