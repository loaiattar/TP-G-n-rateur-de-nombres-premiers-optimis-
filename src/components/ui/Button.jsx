const Spinner = () => (
  <svg
    className="animate-spin h-5 w-5 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8v8z"
    ></path>
  </svg>
);

const Button = ({
  children,
  onClick,
  type = 'button',
  disabled = false,
  loading = false,
  icon = null,
  className = '',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        flex items-center justify-center gap-2 px-6 py-3 rounded-xl
        bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold 
        shadow-lg hover:shadow-blue-500/30 hover:shadow-xl
        transform hover:scale-105 active:scale-95 
        transition-all duration-200 ease-in-out
        disabled:bg-gray-400 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none
        ${className}
      `}
    >
      {loading && <Spinner />}
      {icon && !loading && <span>{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

export default Button;
