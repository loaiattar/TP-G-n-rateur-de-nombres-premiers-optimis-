export function asyncPrimeCheck(n) {
    return new Promise((resolve) => {
        setTimeout(() => {
            //prime verification "handel invalid cases"
            if (n <= 1) {
                resolve(false);
                return;
            }
            if (n === 2) {
                resolve(true);
                return;
            }
            if (n % 2 === 0) {
                resolve(false);
                return;
            }
            for (let i = 3; i <= Math.sqrt(n); i += 2) {
                if (n % i === 0) {
                    resolve(false);
                    return;
                }
            }
            resolve(true);
        }, 100); // Simulate async delay
    });
}
