const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const router = require("./router/router.js");
const bodyParser = require("body-parser");
const connectDB = require("./config/dbConfig.js");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
app.use(cors());
app.use(bodyParser.json());

connectDB();

app.use("/user", router);

app.listen(PORT, () => {
  console.log(`Server is startedon ${PORT} `);
});
