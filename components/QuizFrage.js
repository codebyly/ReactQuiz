import { useState } from "react";

export default function QuizFrage({
  frage,
  setPoints,
  // , id
}) {
  const answers = shuffleAnswers(frage);
  const [isChecked, setIsChecked] = useState(false);

  // ANtwort prüfen
  const checkAnswer = (e) => {
    console.log(`Value: ${e.target.value}`); //liest "flasch" wie Antwort
    console.log(`richtig: ${frage.correct_answer}`); //liest falsch
    //Alle buttons classname resetten bei weiter

    //Doppelte Antwort ausschließen durch disablen
    setIsChecked(true);
    console.log(e.target.enabled);
    //ANTWORT auf Richtigkeit prüfen > Punkte
    e.target.value === frage.correct_answer
      ? ((e.target.className = "correct"), setPoints((current) => current + 1))
      : // console.log("RICHTIG")
        (e.target.className = "incorrect"); //console.log("FALSCH");
  };

  // onChange={(e) => setCategory(parseInt(e.target.value))}

  return (
    <div>
      {/* <hr /> */}
      {/* <p>
        QuizFrage <span>Question #{id}</span>
      </p> */}
      <span>{frage.category}</span> /<span>{frage.difficulty}</span> /
      <span>{frage.type}</span>
      <h2 dangerouslySetInnerHTML={{ __html: frage.question }} />
      <div>
        {answers.map((answer, index) => (
          //   antwort kann html enthalten!
          <button
            className=""
            value={answer}
            onClick={checkAnswer}
            disabled={isChecked}
            key={index}
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        ))}
        {/* <button
          className="solution"
          dangerouslySetInnerHTML={{ __html: correct_answer }}
        ></button> */}
      </div>
      {/* <button>{frage.correct_answer}</button>
      <button>Antwort2</button>
      <br />
      <button>Antwort3</button>
      <button>Antwort4</button>
      <br /> */}
    </div>
  );
}

function shuffleAnswers(frage) {
  const allAnswers = [...frage.incorrect_answers];
  allAnswers.push(frage.correct_answer);

  const shuffle = ([...arr]) => {
    let m = arr.length;
    while (m) {
      const i = Math.floor(Math.random() * m--);
      [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr;
  };

  const shuffledAnswers = shuffle(allAnswers);
  return shuffledAnswers;
}

// function checkAnswer() {
//   console.log("prüfen");
// }
