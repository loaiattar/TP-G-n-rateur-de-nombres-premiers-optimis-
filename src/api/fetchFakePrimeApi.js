export async function fetchPrimeStatus(n) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // same logic as before
      if (n <= 1) return resolve({ prime: false });
      if (n === 2) return resolve({ prime: true });
      if (n % 2 === 0) return resolve({ prime: false });

      for (let i = 3; i * i <= n; i += 2) {
        if (n % i === 0) return resolve({ prime: false });
      }

      resolve({ prime: true });
    }, 500); // simulate network delay
  });
}
