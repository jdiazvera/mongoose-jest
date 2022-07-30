import request from "supertest";

import app from "../src/app";

describe("GET /api", () => {
  beforeAll(() => {
    console.log("before test");
  });

  it("should return 200 OK", async () => {
    return request(app).get("/api").expect(200);
  });
});
