import { Link } from "react-router-dom";

function StartPage() {
  return (
    <div className="container h-lvh flex items-center justify-center gap-3 flex-col">
      <h1 className="title font-bold text-3xl quiz-text-color karla-font">
        Quizzical
      </h1>
      <p className="description font-medium text-xl quiz-text-color">
        Some description if needed
      </p>
      <Link to={"/questions"}>
        <button className="start-quiz p-2 rounded-md w-[28] quiz-bg text-white text-3xl font-normal focus:outline-none focus:ring ring-blue-100 cursor-pointer">
          Start Quiz
        </button>
      </Link>
    </div>
  );
}

export default StartPage;
