var mongoose=require('mongoose');
var db = require('../database/connection');
// create an schema
var userSchema = new mongoose.Schema({
    userid:String,
    username: String,
    email:String,
    password:String
});
userTable = mongoose.model('users',userSchema);
module.exports = userTable;
// module.exports = {
//      registerData:function(inputData, callback){
//         userData = new userTable(inputData);
//         userData.save(function(err, data){
//            if (err) throw err;
//            return callback(data);
//         });
//      },
//      login:function(email, callback){
//       userData = new userTable(email);
//       var user = userData.findOne({ email: req.body.email });
//       console.log(user);
//       // if(user){
//       //    return callback(user);
//       // }
//       // else {
//       //    return callback({err:null});
//       // }
//    },
// }