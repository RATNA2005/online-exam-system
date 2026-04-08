function ResultPage() {
  const score = Number(localStorage.getItem("score")) || 0;
  const total = 2;

  const percentage = (score / total) * 100;
  const result = percentage >= 50 ? "Pass" : "Fail";

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Exam Result</h2>

      <div
        style={{
          width: "300px",
          margin: "auto",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)"
        }}
      >
        <h3>Score: {score} / {total}</h3>
        <h3>Percentage: {percentage}%</h3>

        <h3 style={{ color: result === "Pass" ? "green" : "red" }}>
          Result: {result}
        </h3>
      </div>
    </div>
  );
}

export default ResultPage;