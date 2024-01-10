require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;
const mydata = [
  {
    color: "red",
    value: "#f00",
  },
  {
    color: "green",
    value: "#0f0",
  },
  {
    color: "blue",
    value: "#00f",
  },
  {
    color: "cyan",
    value: "#0ff",
  },
  {
    color: "magenta",
    value: "#f0f",
  },
  {
    color: "yellow",
    value: "#ff0",
  },
  {
    color: "black",
    value: "#000",
  },
];
app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/login", (req, res) => {
  res.send("<h1>please login at chai or code</h1>");
});

app.get("/youtube", (req, res) => {
  res.json({ mydata });
});

app.listen(process.env.PORT, () => {
  console.log(`example app listening on port ${port}`);
});
