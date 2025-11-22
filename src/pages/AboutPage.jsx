import { motion } from "framer-motion";

export default function AboutPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    const technologies = [
        { name: "React", color: "bg-blue-500" },
        { name: "Vite", color: "bg-purple-500" },
        { name: "Tailwind CSS", color: "bg-cyan-500" },
        { name: "Framer Motion", color: "bg-pink-500" },
        { name: "TanStack Router", color: "bg-yellow-500" },
        { name: "Zustand", color: "bg-orange-500" },
    ];

    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-12"
            >
                {/* Header Section */}
                <motion.div variants={itemVariants} className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                        About This Project
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        A showcase of modern web development technologies, built with passion and precision.
                    </p>
                </motion.div>

                {/* About Me Section */}
                <motion.section
                    variants={itemVariants}
                    className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700"
                >
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                        <span className="text-3xl">👋</span> About Me
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        Hi there! I'm a passionate developer who loves building beautiful and functional web applications.
                        I created this project to demonstrate the power of modern React ecosystems and to provide a useful tool for exploring prime numbers.
                        I'm always learning and pushing the boundaries of what's possible on the web.
                    </p>
                </motion.section>

                {/* Project Details Section */}
                <motion.section
                    variants={itemVariants}
                    className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700"
                >
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                        <span className="text-3xl">🚀</span> The Project
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                        This application is designed to be the ultimate tool for prime number enthusiasts. It features:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
                        <li><strong>Prime Checker:</strong> Instantly verify if any number is prime.</li>
                        <li><strong>Prime Generator:</strong> Efficiently generate lists of prime numbers using optimized algorithms.</li>
                        <li><strong>Responsive Design:</strong> Works perfectly on any device, from mobile to desktop.</li>
                        <li><strong>Dark Mode:</strong> Fully supported dark theme for comfortable viewing at night.</li>
                    </ul>
                </motion.section>

                {/* Technologies Section */}
                <motion.section variants={itemVariants}>
                    <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
                        Built With Modern Tech
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {technologies.map((tech) => (
                            <motion.div
                                key={tech.name}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 flex items-center gap-3"
                            >
                                <div className={`w-3 h-3 rounded-full ${tech.color}`} />
                                <span className="font-medium text-gray-700 dark:text-gray-200">{tech.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            </motion.div>
        </div>
    );
}
