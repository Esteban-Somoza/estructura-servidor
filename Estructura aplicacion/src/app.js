const express = require("express")
const public = require("./modules/public")
const method = require("method-override")
const { resolve } = require('path')
const { port, callback } = require("./modules/port")
const app = express();

app.listen(port, callback);
app.set('views', resolve(__dirname, 'views'));
app.set("view engine", "ejs");

app.use(public);
app.use(express.urlencoded({ extended: false })); // req.body(post) y req.query(get)
app.use(express.json()) // no tan necesario
app.use(method("m")) // en URL poner ?m=PUT/DELETE

app.use(require("./routes/main.routes"))
app.use("/users", require("./routes/products.routes"))
app.use("/users/", require("./routes/users.routes"))
