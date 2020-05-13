"use strict";

const express = require("express");
const app = express();
const routes = require("./routes");
const port = 3000;

app.use(express.static(_dirname + "public"));
app.use(express.json());

app.use("/api", routes);

app.get("/api/cart-items", (req, res) => {
  res.json ("Hi, Katelyn the server is working");
});

app.listen(port, () => {
  console.log(`Server is running: ${port}`);
});