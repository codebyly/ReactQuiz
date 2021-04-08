import { useState, useEffect, useMemo } from "react";

export default function QuizFrage({
  frage,
  setPoints,
  setStatus,
  count,
  setCompleted,
  // , id
}) {
  const [isChecked, setIsChecked] = useState(false);

  // const [statusAntwort, setStatusAntwort] = useState("unbeantwortet");

  //useMemo abhg von änderung der frage
  //selber wert in answers
  const answers = useMemo(() => shuffleAnswers2(frage), [frage]);

  //useEffect reagiert auf Änderung von status
  // setzt IsChecked zum disablen/enablen der Antworten
  useEffect(() => {
    document.title = `Status ${frage.status} `;
    frage.status === "answered" ? setIsChecked(true) : setIsChecked(false);
  }, [frage.status]);

  // Antwort prüfen
  const checkAnswer = (e) => {
    // console.log(`Hier ist checkAnswer -- status:${frage.status}`);

    //frage ist beantrwortet, status setzen
    setStatus(count, "answered");
    frage.status === "answered" && console.log("BEANTWORTET");
    // setStatusAntwort("beantwortet");
    //zähler hochsetzen
    setCompleted((current) => current + 1);

    //Doppelte Antwort ausschließen durch disablen
    //via useEffect aufgerufen durch Änderung vom status
    //alle Antworten auflösen: siehe css_classes

    // e.target.className === "correct" && console.log("checkAnswer: beantwortet");
    // //erst bei 2. click, weil classe nach erstem click vergeben

    //Antwort auf Richtigkeit prüfen > Punkte
    //ternary version
    e.target.value === "correct"
      ? //setStatusAntwort("richtig"),
        (setPoints((current) => current + 1),
        // setIsChecked(true),
        console.log("rihctig beantwortet")) /*, //doppelte antwort vermeiden*/
      : console.log("falsch"); //setStatusAntwort("FALSCH");
  };

  return (
    <div>
      <span>{frage.category}</span> /<span>{frage.difficulty}</span> /
      <span>{frage.type}</span>
      <h2 className={} dangerouslySetInnerHTML={{ __html: frage.question }} />
      <div>
        {answers.map((answer, index) => {
          let css_classes = "";
          //frage beantwortret? > setze klasse (setzte klasse rihctig : flasch)
          // iststatus richtig & istrichtige antwort dann css setzen
          //frage zusätzlich rihctig oder flasche infärben

          //offenbart Lösung, sobald beantwortet, also falls frage.status "answered"
          // if (statusAntwort !== "unbeantwortet") {
          if (frage.status === "answered") {
            // console.log("BEANTWORTET");
            css_classes = `${answer.zustand}`;
            // css_classes = `${answer.zustand}, answered`;
            // console.log(`css_classes ${count} danach:${css_classes}`);
            // console.log(`__`);
          }

          return (
            //   antwort kann html enthalten!
            //braucht state pro Element/Frage!
            <button
              className={css_classes} //statusAntwort!?
              // value={answer.antwort}
              value={answer.zustand}
              onClick={checkAnswer}
              disabled={isChecked}
              key={index}
              dangerouslySetInnerHTML={{ __html: answer.antwort }}
            />
          );
        })}
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
  const allAnswers = frage.incorrect_answers.map((item) => {
    return {
      antwort: item,
      zustand: "incorrect",
      status: frage.status,
    };
  });

  allAnswers.push({
    antwort: frage.correct_answer,
    zustand: "correct",
    status: frage.status,
  });

  // console.log(`allAnswers:`);
  // console.log(allAnswers[0].status);

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
