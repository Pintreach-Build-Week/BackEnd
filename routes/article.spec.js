const supertest = require("supertest");
const server = require("../api/server");
const db = require("../data/dbConfig");

describe("Jest test", () => {
  it("checks", () => {
    expect(true).toBeTruthy();
  });
});
