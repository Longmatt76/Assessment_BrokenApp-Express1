process.env.NODE_ENV = "test";
const request = require("supertest");

const app = require("./app");

describe("POST/", () => {
  test("Posting ", async () => {
    const res = await request(app)
      .post("/")
      .send({ developers: ["Longmatt76", "aturok"] });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([
      {
        name: "Matt Long",
        bio: "Student in the Springboard Software Engineering bootcamp",
      },
      {
        name: "Alexander Turok",
        bio: "full-stack developer\r\n\r\nClojure | TypeScript | React | NextJS",
      },
    ]);
  });
});
