const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const run = require("./db");
const loginRoute = require("./routes/login");
const registrationRoute = require("./routes/registration");

run.main().catch(console.error);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/auth", loginRoute);
app.use("/auth", registrationRoute);

const PORT = process.env.PORT || 4111;
app.listen(PORT, console.log("Server don start for port: " + PORT));
