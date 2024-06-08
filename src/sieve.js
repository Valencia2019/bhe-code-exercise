class Sieve {
 NthPrime(n) {
    if (n < 0) throw new Error("Input must be a non-negative integer");

    // Better estimate of the upper limit for nth prime using the prime number theorem
    const limit = n < 6 ? 15 : Math.ceil(n * Math.log(n) + n * Math.log(Math.log(n)));

    const sieve = new Uint8Array(limit + 1); // Using Uint8Array for memory efficiency
    sieve[0] = sieve[1] = 1; // 0 and 1 are not primes

    const sqrtLimit = Math.floor(Math.sqrt(limit)) + 1;

    for (let p = 2; p <= sqrtLimit; p++) {
      if (sieve[p] === 0) {
        for (let multiple = p * p; multiple <= limit; multiple += p) {
          sieve[multiple] = 1; // Mark multiples of p as non-prime
        }
      }
    }

    // Collect primes from the sieve
    const primes = [];
    for (let i = 2; i <= limit; i++) {
      if (sieve[i] === 0) primes.push(i);
    }

    if (n >= primes.length) throw new Error("Limit estimation is too low. Increase the upper limit.");

    return primes[n];
  }
}

module.exports = Sieve;
