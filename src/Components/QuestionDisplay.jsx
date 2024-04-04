function QuestionDisplay(props) {
  // making random choices in order of appearance
  const randomChoice = props.choices.sort(() => Math.random() - 0.5);

  function selectedAnswer(e) {
    const selectedTarget = e.target;
    const parentSelectedChoice = selectedTarget.parentElement;
    if (selectedTarget.classList.contains("selectedAnswer")) {
      selectedTarget.classList.toggle("selectedAnswer");
    } else {
      //remove the selected answer class from all elements and put it in the selected one
      parentSelectedChoice
        .querySelectorAll("li")
        .forEach((choice) => choice.classList.remove("selectedAnswer"));
      selectedTarget.classList.toggle("selectedAnswer");
    }
  }

  return (
    <div className="question-container py-3 px-2 border-b space-y-2 w-2/3">
      <h2 className="question-header font-bold karla-font text-base md:text-lg">
        {props.question}
      </h2>
      <ul className="choices flex items-start flex-col md:flex-row flex-1 gap-4 flex-wrap">
        <li
          className="question py-2 font-medium cursor-pointer px-4 rounded-lg border"
          onClick={(e) => selectedAnswer(e)}
        >
          {randomChoice[0]}
        </li>
        <li
          className="question py-2 font-medium cursor-pointer p-4 rounded-lg border"
          onClick={(e) => selectedAnswer(e)}
        >
          {randomChoice[1]}
        </li>
        <li
          className="question py-2 font-medium cursor-pointer p-4 rounded-lg border"
          onClick={(e) => selectedAnswer(e)}
        >
          {randomChoice[2]}
        </li>
        <li
          className="question py-2 font-medium cursor-pointer p-4 rounded-lg border"
          onClick={(e) => selectedAnswer(e)}
        >
          {randomChoice[3]}
        </li>
      </ul>
    </div>
  );
}

export default QuestionDisplay;
