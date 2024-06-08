const Sieve = require("../sieve");
const sieve = new Sieve();

const getHandler = (request, response) => {
  const primeNumber = parseInt(request.query.number, 10);
  console.log(primeNumber);

  if (isNaN(primeNumber)) {
    response.writeHead(400, {
      "Content-Type": "application/json",
    });
    response.write(
      JSON.stringify({
        message: "Invalid or missing query parameter 'number'. Please provide a valid integer.",
      })
    );
    response.end();
    return;
  }

  try {
    const data = sieve.NthPrime(primeNumber);
    response.writeHead(200, {
      "Content-Type": "application/json",
    });
    response.write(
      JSON.stringify({
        message: "GET Successful",
        data,
      })
    );
  } catch (error) {
    response.writeHead(500, {
      "Content-Type": "application/json",
    });
    response.write(
      JSON.stringify({
        message: "An error occurred",
        error: error.message,
      })
    );
  }
  
  response.end();
};

const defaultHandler = (request, response) => {
  response.writeHead(200, {
    "Content-Type": "application/json",
  });
  response.write(
    JSON.stringify({
      message: `API not found at ${request.url}`,
    })
  );
  response.end();
};

module.exports = {
  getHandler,
  defaultHandler,
};
