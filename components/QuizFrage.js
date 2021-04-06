import React from "react";

export default function QuizFrage({
  frage,
  // , id
}) {
  const answers = shuffleAnswers(frage);

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
          <button key={index} dangerouslySetInnerHTML={{ __html: answer }} />
        ))}
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
