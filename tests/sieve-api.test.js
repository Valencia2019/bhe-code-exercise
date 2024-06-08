const request = require("supertest");
const http = require("http");
const { routes } = require("../src/api/routes");

describe("Test the API", () => {
  let server;

  beforeAll(() => {
    server = http.createServer((request, response) => {
      routes(request, response);
    });

    server.listen(9000);
  });

  afterAll((done) => {
    server.close(done);
  });

  test("Ensure the API returns the first prime", async () => {
    const response = await request(server).get("/get-prime?number=0");
    expect(response.status).toBe(200);
    expect(response.body.data).toBe(2);
  });

  test("Ensure the API returns the one hundredth prime", async () => {
    const response = await request(server).get("/get-prime?number=99");
    expect(response.status).toBe(200);
    expect(response.body.data).toBe(541);
  });

  test("Ensure the API throws an error with invalid number parameter", async () => {
    const response = await request(server).get("/get-prime?number=invalid");
    expect(response.status).toBe(400);
    expect(response.body.message).toBe("Invalid or missing query parameter 'number'. Please provide a valid integer.");
  });
});
