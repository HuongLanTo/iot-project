const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");

const databaseConfig = require("./config/database.json")
const db = require("./models/mysql");


const app = express();
const server = require('http').Server(app)

const userRouter = require("./api/user");
const provinceRouter = require("./api/province");
const authRouter = require("./api/auth");
const nodeRouter = require("./api/node");
const roleRouter = require("./api/role");
const api_v1 = require("./api_v1")



app.use((req, res, next) => {
// app.use((req, res) => {
    res.setHeader("X-Frame-Options", "ALLOWALL");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "POST, GET, PUT, DELETE, OPTIONS"
    );

    if (req.headers.origin) {
        res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
    }

    res.setHeader("Access-Control-Allow-Credentials", true);

    res.setHeader(
        "Access-Control-Allow-Headers",
        "Authorization, Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use(
    session({
        secret: "la_casa_de_papel",
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: false,
            secure: false,
            maxAge: 24 * 60 * 60 * 1000
        }
    })
);

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json({
    extended: false
}));

db.sequelize.sync();

app.use("/api/user", userRouter);nodeRouter
app.use("/api/province", provinceRouter);authRouter
app.use("/api/node", nodeRouter);
app.use("/api/auth", authRouter);
app.use("/api/role", roleRouter);
app.use(api_v1)



// app.use("/", (req, res) => {
//     res.send("hello")
// })

mongoose.connect(
    databaseConfig.mongoPath,
    err => {
        if (err) console.log(err);
        else console.log("connect DB success");
    }
);

const port = 1234;

server.listen(port, err => {
    if (err) console.log(err);
    else console.log("server started " + port);
});

const a = {}

if (a == null) {
    console.log('==')
}else {
    console.log("fsjdf")
}

// console.log(Object.keys(roleConfig))