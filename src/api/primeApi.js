import { fetchPrimeStatus } from "./fetchFakePrimeApi";

export const getPrime = async (n) => {
  const { prime } = await fetchPrimeStatus(n);
  return { n, prime };
};