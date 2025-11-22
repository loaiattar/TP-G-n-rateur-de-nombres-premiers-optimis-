import { useState, useRef } from "react";
import Prime from "../components/Prime";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { getPrime } from "../api/primeApi";

const generateFirstNPrimes = (count, startFrom = 2) => {
  const primes = [];
  let candidate = Math.max(2, startFrom);

  while (primes.length < count) {
    let isPrime = true;
    for (let i = 2; i * i <= candidate; i++) {
      if (candidate % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(candidate);
    }
    candidate++;
  }

  return primes;
};

export default function PrimeNumbersGenPage() {
  const [primes, setPrimes] = useState([]);
  const [primeStatuses, setPrimeStatuses] = useState({});
  const [isGenerating, setIsGenerating] = useState(false);
  const [totalToGenerate, setTotalToGenerate] = useState(0);
  const [startFromInput, setStartFromInput] = useState("2");
  const [generationAborted, setGenerationAborted] = useState(false);
  const abortRef = useRef(false);

  const handleStartGeneration = async () => {
    abortRef.current = false;
    setGenerationAborted(false);
    setPrimes([]);
    setPrimeStatuses({});
    setIsGenerating(true);

    const startFrom = Math.max(2, parseInt(startFromInput) || 2);

    // Generate first 100 primes starting from startFrom
    const firstHundredPrimes = generateFirstNPrimes(100, startFrom);
    setTotalToGenerate(firstHundredPrimes.length);

    // Fetch status for each prime one by one and update the UI
    for (let i = 0; i < firstHundredPrimes.length; i++) {
      if (abortRef.current) break;

      const primeNum = firstHundredPrimes[i];

      try {
        const { prime: isPrime } = await getPrime(primeNum);

        if (abortRef.current) break;

        // Add to primes list
        setPrimes(prevPrimes => [...prevPrimes, primeNum]);

        // Track the prime status
        setPrimeStatuses(prevStatuses => ({
          ...prevStatuses,
          [primeNum]: isPrime
        }));
      } catch (err) {
        console.error(`Error fetching status for ${primeNum}:`, err);
        if (abortRef.current) break;

        setPrimes(prevPrimes => [...prevPrimes, primeNum]);
        setPrimeStatuses(prevStatuses => ({
          ...prevStatuses,
          [primeNum]: false
        }));
      }
    }

    // If we broke out of the loop because of abort, we should set generationAborted to true
    // But we already set it in handleStopGeneration. 
    // However, if the loop finishes naturally, we need to turn off isGenerating.
    // If aborted, isGenerating is turned off in handleStopGeneration.
    // To be safe, we can check abortRef here too.
    if (!abortRef.current) {
      setIsGenerating(false);
    }
  };

  const handleStopGeneration = () => {
    abortRef.current = true;
    setGenerationAborted(true);
    setIsGenerating(false);
  };

  return (
    <>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-extrabold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Prime Numbers Generator
        </h1>

        <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
          <p className="text-center text-gray-600 dark:text-gray-300 mb-6 px-4">
            Click <span className="font-bold text-blue-600 dark:text-blue-400">Start</span> to generate the first 100 prime numbers. <br />
            You can optionally enter a starting number below. Click <span className="font-bold text-red-600 dark:text-red-400">Stop</span> at any time to abort.
          </p>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="w-full md:w-64">
              <Input
                type="number"
                value={startFromInput}
                onChange={(e) => setStartFromInput(e.target.value)}
                placeholder="Start from number"
                min={2}
                disabled={isGenerating}
              />
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <Button
                onClick={handleStartGeneration}
                disabled={isGenerating}
                className="flex-1 md:flex-none"
              >
                Start
              </Button>
              <Button
                onClick={handleStopGeneration}
                disabled={!isGenerating}
                className="flex-1 md:flex-none bg-red-600 hover:bg-red-700 text-white"
                style={{ backgroundColor: "" }} // Override inline style from previous edit if any
              >
                Stop
              </Button>
            </div>
          </div>

          <p className="text-center mt-4 text-gray-600 dark:text-gray-400 font-medium">
            {isGenerating
              ? `Generating first 100 primes... (${primes.length}/${totalToGenerate})`
              : generationAborted
                ? `Stopped. Generated ${primes.length} primes`
                : `Generated ${primes.length} primes`
            }
          </p>
        </div>

        {primes.length === 0 && isGenerating && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-500 dark:text-gray-400">Initializing generator...</p>
          </div>
        )}

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {primes.map((primeNum) => (
            <Prime
              key={primeNum}
              number={primeNum}
              isPrime={primeStatuses[primeNum]}
            />
          ))}
        </div>
      </div>
    </>
  );
}
