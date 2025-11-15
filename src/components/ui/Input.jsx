export default function Input({ value, onChange, placeholder, type = "text", min, max }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      min={min}
      max={max}
      className="border rounded p-2"
    />
  );
}