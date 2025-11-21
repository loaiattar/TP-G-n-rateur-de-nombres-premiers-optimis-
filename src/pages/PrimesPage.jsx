import { useState } from "react";
import { numberSchema } from "../schemas/numberSchema";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Prime from "../components/Prime";
import { usePrimeAlea } from "../hooks/usePrimeAlea";

export default function PrimesPage() {
  const [number, setNumber] = useState(null);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const { checkRandomPrime, isLoading, prime } = usePrimeAlea();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const parseResult = numberSchema.safeParse({ number: Number(input) });
    if (!parseResult.success) {
      setError(parseResult.error.errors[0].message);
      return;
    }

    const n = Number(input);
    setNumber(n);

    try {
      await checkRandomPrime(n); // fetches prime status & caches in Zustand
    } catch (err) {
      setError(err.message);
    }
  };

  const generateRandomNumber = async () => {
    const n = Math.floor(Math.random() * 1000);
    setNumber(n);

    try {
      await checkRandomPrime(n); // fetches prime status & caches in Zustand
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-extrabold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
        Prime Checker
      </h1>

      <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 mb-8 transition-all duration-300 hover:shadow-md">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-4 items-stretch justify-center">
            <Button
              onClick={generateRandomNumber}
              disabled={isLoading}
              className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-purple-500/30"
            >
              {isLoading ? "Loading..." : "Generate Random Number"}
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-transparent text-gray-500 dark:text-gray-400 font-medium bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                OR
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-end">
            <div className="flex-grow w-full">
              <Input
                type="number"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter a number to check"
                min={0}
                className="w-full"
              />
            </div>
            <Button type="submit" disabled={isLoading} className="w-full md:w-auto min-w-[140px]">
              Check Prime
            </Button>
          </form>
        </div>

        {error && (
          <div className="mt-4 p-3 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg text-center font-medium animate-pulse">
            {error}
          </div>
        )}
      </div>

      {/* Display using Prime component */}
      {number !== null && (
        <div className="flex justify-center mt-8 animate-fade-in-up">
          <div className="transform hover:scale-110 transition-transform duration-300">
            <Prime number={number} isPrime={prime[number]} />
          </div>
        </div>
      )}
    </div>
  );
}