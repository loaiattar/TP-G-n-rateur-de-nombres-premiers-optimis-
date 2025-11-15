export default function Prime({ number, isPrime }) {
  if (number === null || number === undefined) return null;

  return (
    <div style={{
      marginTop: "1rem",
      padding: "1rem",
      border: "1px solid #ccc",
      borderRadius: "8px",
      backgroundColor: isPrime ? "#e0ffe0" : "#ffe0e0"
    }}>
      <p>
        Number: <strong>{number}</strong>
      </p>
      <p>
        Prime? <strong>{isPrime ? "✅ Yes" : "❌ No"}</strong>
      </p>
    </div>
  );
}