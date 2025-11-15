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
        flex items-center justify-center gap-2 px-4 py-2 rounded
        bg-blue-500 text-white font-medium hover:bg-blue-600 transition
        disabled:bg-gray-400 disabled:cursor-not-allowed
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
