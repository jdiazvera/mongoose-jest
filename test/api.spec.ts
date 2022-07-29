import request from "supertest";

import app from "../src/app";

describe("GET /api", () => {
  afterAll(() => {
    app.listen(3000).close();
  });
  it("should return 200 OK", () => {
    return request(app).get("/api").expect(200);
  });
});
