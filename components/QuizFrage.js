import { useState, useMemo } from "react";

export default function QuizFrage({
  frage,
  setPoints,
  setStatus,
  count,
  // , id
}) {
  const [isChecked, setIsChecked] = useState(false);

  console.log(`Status Frage ${count} in QuizFrage: ${frage.status}`); //angekommen
  // console.log(`Index Frage in QuizFrage: ${count}`); //angekommen

  const [statusAntwort, setStatusAntwort] = useState("unbeantwortet");
  const answers = useMemo(() => shuffleAnswers2(frage), [frage]);
  //abhg von änderung der rfage
  //selber wert in answers

  // ANtwort prüfen
  const checkAnswer = (e) => {
    //Doppelte Antwort ausschließen durch disablen
    //setIsChecked(true); // console.log(e.target.enabled);

    //alle Antworten auflösen: über css_classes

    //Antwort auf Richtigkeit prüfen > Punkte
    //if/else Version
    // e.target.value === frage.correct_answer //alt
    // if (e.target.value === "correct") {
    //   setPoints((current) => current + 1);
    //   setStatusAntwort("richtig"); //verteilt klasse
    // } else {
    //   setStatusAntwort("falsch");
    // }

    //frage beantwortet:
    setStatus(count, "answered");
    setStatusAntwort("beantwortet");

    // weitere (richtige) Antwort disablen
    // um doppelte Punkte zu vermeiden
    //falls klasse anwered: correct || incorrect
    //, setIsChecked(true) >> disbales

    // : // , setIsChecked(true))
    //   // (e.target.className = "incorrect");
    // e.target.className === "correct" ? setIsChecked(true) : setIsChecked(false);
    e.target.className === "correct" && console.log("checkAnswer: beantwortet");
    //erst bei 2. click, weil classe nach erstem click vergeben

    //richtig benatwortet?
    //ternary version
    e.target.value === "correct"
      ? (setStatusAntwort("richtig"),
        setPoints((current) => current + 1),
        // setIsChecked(true),
        console.log("rihctig beantwortet")) /*, //doppelte antwort vermeiden*/
      : setStatusAntwort("falsch");
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
        {console.log(`frage.status: ${frage.status}`)}
        {answers.map((answer, index) => {
          let css_classes = "test";
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
  // console.log(`Shuffle answers2 called für frage `);
  // console.log(`frage.status: ${frage.status}`);

  const allAnswers = frage.incorrect_answers.map((item) => {
    return {
      antwort: item,
      zustand: "incorrect",
      status: frage.status,
    };
  });
  // console.log(`allAnswers ${allAnswers}`);

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
