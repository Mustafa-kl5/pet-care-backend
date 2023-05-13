const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const run = require("./db");
const loginRoute = require("./routes/login");
const registrationRoute = require("./routes/registration");
const ResetPassword = require("./routes/resetPassword");
const postsRoutes = require("./routes/PostsRouts");
const sendInformation = require("./routes/sendInformationblog");
const getblog = require("./routes/getInformationBlog.js");
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
  })
);

run.main().catch(console.error);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use("/Images", express.static("Images"));
app.use("/auth", loginRoute);
app.use("/auth", registrationRoute);
app.use("/auth", ResetPassword);
app.use("/", postsRoutes);
app.use("/auth", loginRoute);
app.use("/auth", registrationRoute);
app.use("/auth", ResetPassword);
app.use("/admin", getblog);
app.use("/InformationPage", sendInformation);
const PORT = process.env.PORT || 4111;
app.listen(PORT, console.log("Server don start for port: " + PORT));
