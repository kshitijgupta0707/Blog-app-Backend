const express = require("express");
const dbConnect = require("./Config/database");
const { router } = require("./routes/route");
require("dotenv").config();

const app = express();

app.use(express.json());

dbConnect();

const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log(`Server started at ${port}`);
});

app.use("/v1", router);

