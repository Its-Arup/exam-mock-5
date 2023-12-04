const mongoose = require("mongoose")

const server_Connection = mongoose.connect()

module.exports={
    server_Connection
}