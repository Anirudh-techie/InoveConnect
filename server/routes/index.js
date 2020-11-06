var express = require('express');
const { ObjectID } = require('mongodb');
var router = express.Router();
router.post('/api/login', function(req, res, next) {
  var db = require("../config/db").db
  db.db("auth").collection("users").findOne({_id:ObjectID.createFromHexString(req.body._id)}).then(
    (user,err)=>{
      if(user){
        res.json(user);
        return;
      }
      res.json({err});
    }
  )
});

router.post('/api/register', function(req, res, next) {
  var db = require("../config/db").db
  db.db("auth").collection("users").insertOne(req.body,(err,user)=>{
    res.json(user)
  })
});
module.exports = router;