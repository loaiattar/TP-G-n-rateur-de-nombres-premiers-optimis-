import { Link } from "@tanstack/react-router";

export default function HomePage() {
  return (
    <div>
      <p className="flex flex-col">
        Go to <Link to="/primes">/primes</Link> to test numbers for primality.
      </p>
    </div>
  );
}