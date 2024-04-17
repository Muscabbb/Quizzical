function QuestionDisplay(props) {
  let style = [];

  // checking if one of the lists got selected
  props.choices.map((li) => {
    if (props.showAnswers) {
      style.push({
        backgroundColor:
          (li.isSelected && (li.isCorrect ? "#94d7a2" : "#f8bcbc")) ||
          (props.correctAnswer === li.value && "#94d7a2"),
        PointerEvent: "none",
      });
    } else {
      style.push({
        backgroundColor: li.isSelected ? "#d6dbf5" : "#fff",
      });
    }
  });

  return (
    <div className="question-container py-3 px-2 border-b space-y-2 w-2/3">
      <h2 className="question-header font-bold karla-font text-base text-wrap md:text-lg">
        {props.questionNumber + 1}) {props.question}
      </h2>
      <ul className="choices flex items-start flex-col md:flex-row flex-1 gap-4 flex-wrap">
        <li
          className="question py-2 font-medium cursor-pointer px-4 rounded-lg border"
          onClick={() =>
            props.selectedAnswer(props.choices[0].id, props.questionNumber)
          }
          style={style[0]}
        >
          {props.choices[0].value}
        </li>
        <li
          className="question py-2 font-medium cursor-pointer p-4 rounded-lg border"
          onClick={() =>
            props.selectedAnswer(props.choices[1].id, props.questionNumber)
          }
          style={style[1]}
        >
          {props.choices[1].value}
        </li>
        <li
          className="question py-2 font-medium cursor-pointer p-4 rounded-lg border"
          onClick={() =>
            props.selectedAnswer(props.choices[2].id, props.questionNumber)
          }
          style={style[2]}
        >
          {props.choices[2].value}
        </li>
        <li
          className="question py-2 font-medium cursor-pointer p-4 rounded-lg border"
          onClick={() =>
            props.selectedAnswer(props.choices[3].id, props.questionNumber)
          }
          style={style[3]}
        >
          {props.choices[3].value}
        </li>
      </ul>
    </div>
  );
}

export default QuestionDisplay;
