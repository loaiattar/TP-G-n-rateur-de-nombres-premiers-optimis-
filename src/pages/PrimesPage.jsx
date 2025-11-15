import { useState } from "react";
import { numberSchema } from "../schemas/numberSchema";
import Input from "../components/Input";
import Button from "../components/ui/Button";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import Prime from "../components/Prime";

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
    <div>
      <Header />
      <h1>Prime Checker</h1>

      <Button onClick={generateRandomNumber} disabled={isLoading}>
        {isLoading ? "Loading..." : "Generate Random Number"}
      </Button>

      <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
        <Input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a number"
          min={0}
          max={1000}
        />
        <Button type="submit" disabled={isLoading}>
          Check Prime
        </Button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Display using Prime component */}
      {number !== null && <Prime number={number} isPrime={prime[number]} />}

      <Footer />
    </div>
  );
}