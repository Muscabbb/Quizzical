import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div className="quiz-holder absolute w-full h-full overflow-hidden -z-10"></div>
      <Outlet />
    </>
  );
}

export default App;
