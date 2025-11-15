import { usePrimeStore } from "../stores/usePrimeStore";

export const verifIsPrime = (n) => {
    // Check in the store if we already have the result: ERROR FIRST!!
    const { prime, setPrime } = usePrimeStore.getState();
    if(prime[n] !== undefined) {
        return prime[n];
    }
    //prime verification "handel invalid cases"
    if (n <= 1) {
        setPrime(n, false);
        return false;
    }
    if (n === 2) {
        setPrime(n, true);
        return true;
    }
    if (n % 2 === 0) {
        setPrime(n, false);
        return false;
    }

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) {
            setPrime(n, false);
            return false;
        }
    } 
    //store the result: 
    setPrime(n, true);
    return true;
}