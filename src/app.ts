import express from "express";
import mongoose from "mongoose";
import path from "path";

import { loadApiEndpoints } from "./controllers/api";

// set up mongoose
mongoose.connect(
  "mongodb+srv://mongo:123...%40bcD.@cluster0.nsrarlo.mongodb.net/myDele"
);
const database = mongoose.connection;
database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database connected");
});

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  express.static(path.join(__dirname, "../public"), { maxAge: 31557600000 })
);

loadApiEndpoints(app);

export default app;
