import { asyncPrimeCheck } from "../service/asyncPrimeCheck";
import { usePrimeStore } from "../stores/usePrimeStore";

export const usePrimeAlea = () => {
    const { prime, isLoading, setIsLoading, setPrime } = usePrimeStore();

    const checkRandomPrime = async (n) => {
        if(prime[n] !== undefined) {
            return prime[n];
        }
        setIsLoading(true);

        const result = await asyncPrimeCheck(n);
        setPrime(n, result);

        setIsLoading(false);
        return result;
    };
    return { isLoading, checkRandomPrime, prime };
}
