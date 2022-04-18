const express = require("express");
const bodyParser = require("body-parser");
//app.use(express.json());

const adminRoute = require("./routes/admin-route");
const userRoute = require("./routes/user-route");

const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.use("/api/admin", adminRoute);
app.use("/api/user", userRoute);

app.listen(5000);
