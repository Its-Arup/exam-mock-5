const mongoose = require("mongoose")
require('dotenv').config()

const server_Connection = mongoose.connect(process.env.SERVER)

module.exports={
    server_Connection
}