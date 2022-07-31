import express from "express";
import mongoose from "mongoose";

import { createApp } from "./app";

/**
 * Start Express server.
 */
mongoose
  .connect(
    "mongodb+srv://test:test123@realmcluster.x8gw9.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    const app = createApp();
    console.log("here");
    const server = app.listen(app.get("port"), () => {
      console.log(
        "App is running at http://localhost:%d in %s mode",
        app.get("port"),
        app.get("env")
      );
      console.log("  Press CTRL-C to stop\n");
    });
  })
  .catch((err) => {
    console.log(err);
  });
// const server = app.listen(app.get("port"), () => {
//   console.log(
//     "  App is running at http://localhost:%d in %s mode",
//     app.get("port"),
//     app.get("env")
//   );
//   console.log("  Press CTRL-C to stop\n");
// });

// export default server;
