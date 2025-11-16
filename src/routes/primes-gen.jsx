import { createFileRoute } from "@tanstack/react-router";
import PrimeNumbersGenPage from "../pages/PrimeNumbersGenPage";

export const Route = createFileRoute("/primes-gen")({
  component: PrimeNumbersGenPage,
});
