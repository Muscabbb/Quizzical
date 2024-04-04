import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="quiz-holder py-10">
      <Outlet />
    </div>
  );
}

export default App;
