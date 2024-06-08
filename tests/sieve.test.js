const Sieve = require("../src/sieve");
const sieve = new Sieve();
describe("Testing the NthPrime function", () => {
  test("valid results", () => {
    expect(sieve.NthPrime(0)).toBe(2);
    expect(sieve.NthPrime(19)).toBe(71);
    expect(sieve.NthPrime(99)).toBe(541);
    expect(sieve.NthPrime(500)).toBe(3581);
    expect(sieve.NthPrime(986)).toBe(7793);
    expect(sieve.NthPrime(2000)).toBe(17393);
    expect(sieve.NthPrime(1000000)).toBe(15485867);
    expect(sieve.NthPrime(10000000)).toBe(179424691);
    //comment this one out if you want tests to run faster
    expect(sieve.NthPrime(100000000)).toBe(2038074751); 
  });
  test("Using a negative number should throw an error", () => {
    try {
      sieve.NthPrime(-1);
    } catch (error) {
      expect(error.message).toBe("Input must be a non-negative integer");
    }
  });
  test("Using a string should throw an error", () => {
    try {
      sieve.NthPrime("invalid");
    } catch (error) {
      expect(error.message).toBe("Input must be a non-negative integer");
    }
  });
});
