import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
            >
                <h1 className="text-9xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                    404
                </h1>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Page Not Found
                </h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto">
                    Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
                </p>

                <div className="pt-6">
                    <Link
                        to="/"
                        className="inline-block px-8 py-3 rounded-xl bg-blue-600 text-white font-bold shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:scale-105 transition-all duration-300"
                    >
                        Go Home
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
