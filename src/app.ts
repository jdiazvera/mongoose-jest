import express from "express";
import mongoose from "mongoose";
import path from "path";

import { loadApiEndpoints } from "./controllers/api";

// Create Express server
const app = express();

// set up mongoose
mongoose
  .connect(
    "mongodb+srv://mongo:123...%40bcD.@cluster0.nsrarlo.mongodb.net/myDele"
  )
  .then(() => {
    console.log("Database connected");
  })
  .catch(() => {
    console.log("Error connecting to database");
  });

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  express.static(path.join(__dirname, "../public"), { maxAge: 31557600000 })
);

loadApiEndpoints(app);

export default app;
