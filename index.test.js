import app from "./index.js";
import supertest from "supertest";
const requestWithSupertest = supertest(app);

describe("GET /todos", () => {
  describe("given a title and description", () => {
    it("GET /should respond with a 200 status code", async () => {
      const res = await requestWithSupertest.get("/todos");
      expect(res.status).toEqual(200);
      expect(res.type).toEqual(expect.stringContaining("json"));
    });
  });
});

describe("POST /todos", () => {
    describe("given a title and description", () => {
      it("POST /should respond with a 200 status code", async () => {
        const res = await requestWithSupertest.post("/todos");
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining("json"));
      });
    });
  });