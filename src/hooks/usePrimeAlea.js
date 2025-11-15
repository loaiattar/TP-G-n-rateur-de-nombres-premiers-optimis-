import { asyncPrimeCheck } from "../service/asyncPrimeCheck";
import { usePrimeStore } from "../stores/usePrimeStore";
import { numberSchema } from "../schemas/numberSchema";

export const usePrimeAlea = () => {
    const { prime, isLoading, setIsLoading, setPrime } = usePrimeStore();

    const checkRandomPrime = async (n) => {
            // zod validation!!
        const pareResult = numberSchema.safeParse({ number: n });
        if (!pareResult.success) {
            throw new Error(pareResult.error.errors[0].message);
        }
           // ERROR FIRST
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
