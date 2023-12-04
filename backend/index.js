const express = require("express");
const app = express();
const cors = require('cors');
const { server_Connection } = require("./db");
const { userRouter } = require("./Routes/user.route");
require('dotenv').config()

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  try {
    res.status(200).send({ msg: "this is home page!" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

app.use("/users",userRouter)


const PORT = process.env.PORT || 4500 ;

app.listen(PORT, async() => {
  try {
    await server_Connection
    console.log("listening on", PORT);
  } catch (error) {
    console.log(error.message)
  }
});


