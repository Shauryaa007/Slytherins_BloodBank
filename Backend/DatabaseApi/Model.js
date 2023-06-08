const {mongoose} = require("./DB")
testSchema = new mongoose.Schema({
    name: String,
    phone: Number,
});
UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    adhaarid: String,
    dob: String,
    address: String
})
let TestTable = mongoose.model("TestTable",testSchema)
let User = mongoose.model("User",UserSchema)
exports.TestTable = TestTable
exports.UserTable = User