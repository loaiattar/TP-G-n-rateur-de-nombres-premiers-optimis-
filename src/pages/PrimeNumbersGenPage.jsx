import { useState} from "react";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
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
  let abortFlag = false;

  const handleStartGeneration = async () => {
    abortFlag = false;
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
      if (abortFlag || generationAborted) break;
      
      const primeNum = firstHundredPrimes[i];
      
      try {
        const { prime: isPrime } = await getPrime(primeNum);
        
        if (abortFlag || generationAborted) break;
        
        // Add to primes list
        setPrimes(prevPrimes => [...prevPrimes, primeNum]);
        
        // Track the prime status
        setPrimeStatuses(prevStatuses => ({
          ...prevStatuses,
          [primeNum]: isPrime
        }));
      } catch (err) {
        console.error(`Error fetching status for ${primeNum}:`, err);
        if (abortFlag || generationAborted) break;
        
        setPrimes(prevPrimes => [...prevPrimes, primeNum]);
        setPrimeStatuses(prevStatuses => ({
          ...prevStatuses,
          [primeNum]: false
        }));
      }
    }
    
    setIsGenerating(false);
  };

  const handleStopGeneration = () => {
    abortFlag = true;
    setGenerationAborted(true);
    setIsGenerating(false);
  };

  return (
    <>
    <Header />
    <div>
      <h1>Prime Numbers Generator</h1>
      
      <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        <Input
          type="number"
          value={startFromInput}
          onChange={(e) => setStartFromInput(e.target.value)}
          placeholder="Start from number"
          min={2}
          disabled={isGenerating}
        />
        <div style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
          <Button 
            onClick={handleStartGeneration} 
            disabled={isGenerating}
          >
            Start
          </Button>
          <Button 
            onClick={handleStopGeneration} 
            disabled={!isGenerating}
            style={{ backgroundColor: "#dc2626" }}
          >
            Stop
          </Button>
        </div>
      </div>
      
      <p>
        {isGenerating 
          ? `Generating first 100 primes... (${primes.length}/${totalToGenerate})`
          : generationAborted
          ? `Stopped. Generated ${primes.length} primes`
          : `Generated ${primes.length} primes`
        }
      </p>

      <div style={{ marginTop: "2rem" }}>
        {primes.length === 0 && isGenerating && (
          <p>Loading first primes...</p>
        )}
        
        {primes.map((primeNum) => (
          <Prime
            key={primeNum}
            number={primeNum}
            isPrime={primeStatuses[primeNum]}
          />
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
}
