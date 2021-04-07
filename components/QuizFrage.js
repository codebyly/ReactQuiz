import { useState } from "react";

export default function QuizFrage({
  frage,
  setPoints,
  // , id
}) {
  const [isChecked, setIsChecked] = useState(false);

  let isShuffled = false;
  let answers;
  // PROBLEM: soll nur beim ersten Laden!!
  // mischen falls falsch , isShuffled=true,
  //FolgePROBLEM: shuffled nur bei richtiger antwort >> falsche Markierung
  console.log(`SHUFFLED:${isShuffled}`);
  if (isShuffled === false) {
    // answers = shuffleAnswers(frage);
    answers = shuffleAnswers2(frage);
    isShuffled = true;
  }
  console.log(`SHUFFLED:${isShuffled}`);

  // ANtwort prüfen
  const checkAnswer = (e) => {
    // console.log(`Value: ${e.target.value}`); //liest "flasch" wie Antwort
    // console.log(`richtig: ${frage.correct_answer}`); //liest falsch

    //Doppelte Antwort ausschließen durch disablen
    //setIsChecked(true); // console.log(e.target.enabled);

    //alle Antworten auflösen:
    e.target.className = e.target.value;
    //PROBLEM : Alle buttons classname und enable resetten bei weiter

    //ANTWORT auf Richtigkeit prüfen > Punkte
    // e.target.value === frage.correct_answer
    e.target.value === "correct"
      ? // (e.target.className = "correct"),
        setPoints((current) => current + 1)
      : // , setIsChecked(true)) //disables rihctige Antwort um doppelte Punkte zu vermeiden
        // (e.target.className = "incorrect");
        console.log("FALSCH");
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
            // value={answer.antwort}
            value={answer.zustand}
            onClick={checkAnswer}
            disabled={isChecked}
            key={index}
            dangerouslySetInnerHTML={{ __html: answer.antwort }}
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

// Neue Version: Antworten als OBj mit true/false Zustand
function shuffleAnswers2(frage) {
  // console.log("Shuffle answers2 called");

  const allAnswers = frage.incorrect_answers.map((item) => {
    return {
      antwort: item,
      zustand: "incorrect",
    };
  });
  // console.log(`allAnswers ${allAnswers}`);

  allAnswers.push({
    antwort: frage.correct_answer,
    zustand: "correct",
  });

  // console.log(`allAnswers:`);
  // console.log(allAnswers[0].antwort);

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

//Alte Version
/*
function shuffleAnswers(frage) {
  console.log("Shuffle answers called");
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
*/
