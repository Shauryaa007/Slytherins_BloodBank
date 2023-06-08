const mongoose = require("mongoose");
require("dotenv").config();
console.log(process.env.DB_URI)
mongoose.connect(
    process.env.DB_URI, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(res=>{
    console.log("DB Connect")
},err=>{
    console.log("DB connection fail")
    console.error(err)
});
exports.mongoose = mongoose