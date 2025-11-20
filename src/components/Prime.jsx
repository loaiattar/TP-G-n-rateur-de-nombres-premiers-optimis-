export default function Prime({ number, isPrime }) {
  if (number === null || number === undefined) return null;

  let baseClasses = "flex items-center justify-center aspect-square rounded-xl shadow-md border transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-default";
  let statusClasses = "";

  if (isPrime === true) {
    statusClasses = "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800";
  } else if (isPrime === false) {
    statusClasses = "bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800";
  } else {
    // Loading or unknown
    statusClasses = "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 animate-pulse";
  }

  return (
    <div className={`${baseClasses} ${statusClasses}`}>
      <p className="text-2xl font-bold">
        {number}
      </p>
    </div>
  );
}