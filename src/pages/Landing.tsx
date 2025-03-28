import { useNavigate } from "react-router-dom";

export function Landing() {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: "#1e40af", color: "white", minHeight: "100vh", padding: "2rem", textAlign: "center" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Echoes of Home</h1>
      <p style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>Location:</p>
      <p style={{ fontWeight: "600", fontSize: "1.25rem", marginBottom: "1.5rem" }}>
        309–311 William St, West Melbourne VIC 3003
      </p>
      <p style={{ fontStyle: "italic", marginBottom: "1.5rem" }}>“This bench was once David’s Home”</p>

      <img
        src="/bench-david.jpg"
        alt="David sleeping on bench"
        style={{ width: "100%", maxWidth: "400px", margin: "0 auto", borderRadius: "0.5rem", marginBottom: "1.5rem" }}
      />

      <p style={{ marginBottom: "1rem" }}>Scan complete. Tap below to hear his story</p>

      <button
        onClick={() => navigate("/ar")}
        style={{
          backgroundColor: "#22c55e",
          padding: "1rem 2rem",
          fontSize: "1.25rem",
          borderRadius: "0.75rem",
          fontWeight: "bold",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Start
      </button>
    </div>
  );
}
