require("dotenv").config({ path: __dirname + "/.env" });
const express = require("express"),
    server = express(),
    bodyParser = require("body-parser"),
    cookieParser = require("cookie-parser"),
    port = process.env.port || 3000,
    mongoose = require("mongoose");
server.use(express.json());
server.use(cookieParser());
server.use(express.static("public"));
const db = require("./public/static/js/datastore").mongoURI;
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => console.log("connected"))
    .catch(err => console.log(err));
require("./api/routes/routes").routes(server);

server.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

server.listen(port, () => {
    console.log("ready on port ", port);
})