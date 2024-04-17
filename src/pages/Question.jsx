import { useEffect, useState } from "react";
import QuestionDisplay from "../Components/QuestionDisplay";
import { nanoid } from "nanoid";

export default function Question() {
  const [data, setData] = useState([]);
  const [question, setQuestion] = useState([]);
  const [showScore, setShowScore] = useState(false);

  useFetch(setData);

  useEffect(() => {
    setQuestion(generateQuestions());
  }, [data]);

  function liChoicesAnswers(i) {
    const liChoices = [];
    let shuffleQuestions = [];
    for (let i = 0; i < 5; i++) {
      shuffleQuestions.push(
        [...data[i].incorrect_answers, data[i].correct_answer].sort(
          () => Math.random() - 0.5
        )
      );
    }

    for (let k = 0; k < shuffleQuestions[i].length; k++) {
      liChoices.push({
        id: nanoid(),
        value: shuffleQuestions[i][k],
        isSelected: false,
        isCorrect: null,
      });
    }

    return liChoices;
  }

  function generateQuestions() {
    const questionsArr = [];
    for (let i = 0; i < data.length; i++) {
      questionsArr.push({
        questionsPart: data[i].question,
        lists: liChoicesAnswers(i),
        correctAnswers: data[i].correct_answer,
      });
    }
    return questionsArr;
  }

  function selectedAnswer(id, i) {
    setQuestion((prevQuestions) => {
      return prevQuestions.map((ul, index) => {
        let lists = ul.lists.map((listLi) => {
          if (i === index) listLi.isSelected = false;
          return listLi.id === id ? { ...listLi, isSelected: true } : listLi;
        });
        return { ...ul, lists };
      });
    });
  }

  function CheckAnswers(event) {
    if (event.target.innerHTML !== "Play Again 🔁") {
      setQuestion((prevQuestions) => {
        return prevQuestions.map((ul) => {
          let lists = ul.lists.map((listLi) => {
            if (listLi.isSelected) {
              if (ul.correctAnswers === listLi.value) {
                return { ...listLi, isCorrect: true };
              } else {
                return { ...listLi, isCorrect: false };
              }
            } else {
              return listLi;
            }
          });
          return { ...ul, lists };
        });
      });
    } else {
      getQuestions(setData);
    }

    setShowScore((prevReset) => !prevReset);
  }

  const allQuestions = question.map((ulQuestion, i) => {
    return (
      <QuestionDisplay
        key={nanoid()}
        questionNumber={i}
        question={ulQuestion.questionsPart}
        correctAnswer={ulQuestion.correctAnswers}
        choices={ulQuestion.lists}
        showAnswers={showScore}
        selectedAnswer={selectedAnswer}
      />
    );
  });

  return (
    <div className="container h-full my-14 flex items-center flex-col justify-around gap-3 ">
      {allQuestions}
      <div className="result flex items-center justify-center gap-4">
        <button
          className=" w-40 py-4 px-2 rounded-lg cursor-pointer bg-blue-800 text-white text-center focus:ring-4 focus:outline-none"
          onClick={(e) => CheckAnswers(e)}
        >
          {showScore ? "Play Again 🔁" : "Check Answers 🏸"}
        </button>
      </div>
    </div>
  );
}

async function getQuestions(setValue) {
  const resQuestion = await (
    await fetch(
      "https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple"
    )
  ).json();
  setValue(resQuestion.results);
}

function useFetch(setValue) {
  useEffect(() => {
    getQuestions(setValue);
  }, []);
}
