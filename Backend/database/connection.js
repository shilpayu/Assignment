const mongoose = require('mongoose');
var url = "mongodb+srv://cluster0.msyeq.mongodb.net/reactassignment?retryWrites=true&w=majority"

   mongoose.connect(url, 
   {
     dbName:'reactassignment',
     user:'shilpa',
     pass:'9I1MU5HAoPCjd7Mn',
     useNewUrlParser: true, 
     useUnifiedTopology: true
   }).then(() => {
    console.log("Database created!");
 })
 .catch(() => {
   console.log("Connection Failed!")
 });