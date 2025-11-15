import { usePrimeStore } from "../stores/usePrimeStore";
import { numberSchema } from "../schemas/numberSchema";
import { fetchPrimeStatus } from "../api/fetchFakePrimeApi";

export const usePrimeAlea = () => {
    const { prime, isLoading, setIsLoading, setPrime } = usePrimeStore();

    const checkRandomPrime = async (n) => {
            // zod validation!!
        const parseResult = numberSchema.safeParse({ number: n });
        if (!parseResult.success) {
            throw new Error(parseResult.error.errors[0].message);
        }
           // ERROR FIRST
        if(prime[n] !== undefined) {
            return prime[n];
        }

        setIsLoading(true);
        const { prime: fetchedPrime } = await fetchPrimeStatus(n);
        setPrime(n, fetchedPrime);

        setIsLoading(false);

        return fetchedPrime;
    };
    return { isLoading, checkRandomPrime, prime };
}
