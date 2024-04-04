import { useEffect, useState } from "react";
import QuestionDisplay from "../QuestionDisplay";
import { nanoid } from "nanoid";

export default function Question() {
  const [question, setQuestion] = useState([]);

  useFetch(setQuestion);

  const allQuestions = question.map((questionPart) => (
    <QuestionDisplay
      key={nanoid()}
      id={nanoid()}
      question={questionPart.question}
      correctAnswer={questionPart.correct_answer}
      choices={[...questionPart.incorrect_answers, questionPart.correct_answer]}
    />
  ));

  function CheckAnswers() {
    document.querySelectorAll(".choices li").forEach((choice) => {
      if (choice.classList.contains("selectedAnswer")) {
        question.forEach((question) => {
          if (question.correct_answer === choice.innerHTML) {
            choice.classList.add("correct");
          } else {
            choice.classList.add("wrong");
          }
        });
      }
    });
  }

  return (
    <div className="container h-svh my-14 flex items-center flex-col justify-around gap-3 ">
      {allQuestions}
      <button
        className=" w-36 py-4 rounded-lg cursor-pointer mx-auto mt-5 bg-blue-800 text-white text-center focus:ring-4 focus:outline-none"
        onClick={CheckAnswers}
      >
        Check Answers
      </button>
    </div>
  );
}

function useFetch(setValue) {
  useEffect(() => {
    const data = async () => {
      const resQuestion = await (
        await fetch(
          "https://opentdb.com/api.php?amount=5&category=22&type=multiple"
        )
      ).json();
      setValue(resQuestion.results);
    };
    data();
  }, []);
}
