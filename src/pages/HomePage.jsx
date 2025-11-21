import { Link } from "@tanstack/react-router";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <div className="max-w-3xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text animate-gradient-x">
              Prime Numbers
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">
              Made Beautiful
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Explore the fascinating world of prime numbers with our optimized generator and checker tools.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link
            to="/primes"
            className="px-8 py-4 rounded-xl bg-blue-600 text-white font-bold text-lg shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            Check a Number
          </Link>
          <Link
            to="/primes-gen"
            className="px-8 py-4 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-bold text-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            Generate Primes
          </Link>
        </div>
      </div>
    </div>
  );
}