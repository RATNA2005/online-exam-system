import { useState, useEffect } from "react";

function StartExam() {
  // Questions with correct answers
  const [questions] = useState([
    {
      id: 1,
      question: "What is Java?",
      options: ["Language", "OS", "Browser", "Database"],
      correct: "Language"
    },
    {
      id: 2,
      question: "What is React?",
      options: ["Library", "Language", "Server", "Database"],
      correct: "Library"
    }
  ]);

  // Store user answers
  const [answers, setAnswers] = useState({});

  // Timer (60 seconds)
  const [timeLeft, setTimeLeft] = useState(60);

  // Handle answer selection
  const selectAnswer = (qid, option) => {
    setAnswers({ ...answers, [qid]: option });
  };

  // Submit exam
  const handleSubmit = () => {
    let score = 0;

    questions.forEach((q) => {
      if (answers[q.id] === q.correct) {
        score++;
      }
    });

    localStorage.setItem("score", score);
    window.location.href = "/result";
  };

  // Timer logic
  useEffect(() => {
    if (timeLeft === 0) {
      handleSubmit();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

 return (
  <div style={{ textAlign: "center", padding: "20px" }}>
    <h2>Online Examination</h2>

    {/* Timer */}
    <h3 style={{ color: "red" }}>Time Left: {timeLeft} seconds</h3>

    <div
      style={{
        maxWidth: "600px",
        margin: "auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)"
      }}
    >
      {questions.map((q) => (
        <div key={q.id} style={{ marginBottom: "20px" }}>
          <h3>{q.question}</h3>

          {q.options.map((opt) => (
            <button
              key={opt}
              onClick={() => selectAnswer(q.id, opt)}
              style={{
                display: "block",
                width: "100%",
                margin: "5px 0",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                backgroundColor:
                  answers[q.id] === opt ? "#4CAF50" : "#f9f9f9",
                color: answers[q.id] === opt ? "white" : "black",
                cursor: "pointer"
              }}
            >
              {opt}
            </button>
          ))}
        </div>
      ))}

      <button
        onClick={handleSubmit}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Submit Exam
      </button>
    </div>
  </div>
);
}

export default StartExam;