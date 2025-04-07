import express from "express";
import liquidExpressViews from "liquid-express-views"; // default import, géén destructuring
import fetch from "node-fetch";
import dotenv from "dotenv";
import indexRouter from "./server.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Gebruik de functie direct, géén `new Liquid()`
liquidExpressViews(app, {
  root: "./views",
  ext: ".liquid"
});

app.set("view engine", "liquid");
app.use(express.static("public"));
app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
