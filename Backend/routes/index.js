var express = require('express');
var router = express();
const {TestTable, UserTable} = require("../DatabaseApi/Model")
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
  let data = req.body
  // const t = new TestTable({
  //   name:req.body.name,
  //   phone:req.body.phone
  // });
  // t.save().then(
  //       () => console.log("One entry added"), 
  //       (err) => console.log(err)
  // );
  usr = new UserTable({
    name:data.name,
    phone:data.phone,
    email:data.email,
    dob:data.dob,
    adhaarid:data.adhaar,
    address:data.address
  })
  usr.save().then(r=>res.status(200).send("success"),err=>res.status(406).send("failed"))
})
module.exports = router;
