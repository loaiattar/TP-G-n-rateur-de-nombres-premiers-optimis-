import { create } from 'zustand';

export const usePrimeStore = create((set) => ({
    prime: {},
    isLoading : false,

    setPrime: (n, isPrime)  =>
        set((state) => ({
            prime: { ...state.prime, [n]: isPrime },
        })),
    setIsLoading: (value) =>
        set ({ isLoading: value }),
}));