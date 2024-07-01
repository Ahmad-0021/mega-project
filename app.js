const cookieParser = require("cookie-parser");
const express = require("express");
const path = require("path");
const app = express();
const ownersRouter = require("./routes/ownersRouter");
const productsRouter = require("./routes/productsRouter");
const usersRouter = require("./routes/usersRouter");
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use("/owner", ownersRouter);
app.use("/user", usersRouter);
app.use("/products", productsRouter);

app.listen(PORT);
