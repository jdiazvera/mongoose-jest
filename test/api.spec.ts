import mongoose from "mongoose";
import request from "supertest";

import { createApp } from "../src/app";
import * as mongoDB from "../test/testDB";

describe("GET /api", () => {
  beforeAll((done) => {
    mongoose.connect(
      "mongodb+srv://test:test123@realmcluster.x8gw9.mongodb.net/?retryWrites=true&w=majority",
      () => done()
    );
  });
  afterAll((done) => {
    mongoose.connection.close(() => done());
  });

  const app = createApp();
  it("should return 200 OK", async () => {
    return request(app).get("/api").expect(200);
  });
});
