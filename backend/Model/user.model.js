const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : String,
    email : String,
    phone : Number,
    label : String,
    booked_slots : [Number]
})

const UserModel = mongoose.model("user", userSchema)

module.exports ={
    UserModel
}








// {
//     "name": "Jane Doe",
//     "email" : "jane.doe@example.com",
//     "phone" : "(555) 1234-567",
//     "label" : "work",
//     "booked_slots" : []
// }