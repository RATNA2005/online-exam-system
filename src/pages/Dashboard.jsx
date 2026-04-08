import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to Online Exam System</p>

      <button onClick={() => navigate("/exam")}>
        Start Exam
      </button>
    </div>
  );
}

export default Dashboard;