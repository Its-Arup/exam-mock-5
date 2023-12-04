const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  try {
    res.status(200).send({ msg: "this is home page!" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});


app.listen(4500, () => {
  console.log("listening on", 4500);
});
