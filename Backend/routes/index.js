var express = require('express');
var router = express();
require("../DatabaseApi/DB")
var bodyParser = require('body-parser')
const cors = require('cors');
router.use(cors({
    origin: '*',
}));
router.use(bodyParser.urlencoded({
  extended: true
}
))

// parse application/json
router.use(bodyParser.json())
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Hello")
});
router.post("/signup",(req,res,next)=>{
  console.log(req.body)
  res.send("done")
})
module.exports = router;
