import { Link } from "@tanstack/react-router";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";

export default function HomePage() {
  return (
    <div>
      <Header />
      <h1>Welcome to Prime Checker App</h1>
      <p>
        Go to <Link to="/primes">/primes</Link> to test numbers for primality.
      </p>
      <Footer />
    </div>
  );
}