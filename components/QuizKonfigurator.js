import { useState } from "react";
import categories from "../components/categories";
import QuizLoader from "./QuizLoader";

export default function QuizKonfigurator() {
  const [category, setCategory] = useState(0); // &category=23
  const [level, setLevel] = useState(0); //&difficulty=easy
  const [amount, setAmount] = useState(5);
  const [isStarted, setIsStarted] = useState(false);
  const [searchTerm, setSetSearchTerm] = useState("");

  const [points, setPoints] = useState(0); //anzahl richtige antworten = punkte
  const [completed, setCompleted] = useState(0); //zählt beantwortete Fragen

  const basicSearchTerm = `https://opentdb.com/api.php?amount=${amount}`;
  const searchTermLink = `${basicSearchTerm}&category=${category}&difficulty=${level}`;

  //weiterreichen bis QuizCarrousel, um count zu resetten
  // function getCounter(setCount) {
  //   setCount(0);
  //   console.log("setCount");
  // }

  //Click auf Start
  const loadQuiz = () => {
    setIsStarted(true);
    setSetSearchTerm(searchTermLink); //Daten werden erst bei Start eingesetzt
    //reset points und completed
    setPoints(0);
    setCompleted(0);

    //zurück zu frage 1 >> counter=1
  };

  return (
    <>
      <div className="quiz quiz-konfig">
        <form className="filter" onSubmit={(e) => e.preventDefault()}>
          {/* Unterbinde Standardverhalten onSubmit, beim absenden */}

          <div className="filter__category">
            <label htmlFor="category">Choose a category: </label>

            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(parseInt(e.target.value))}
              // setzt category auf ausgwählten value
            >
              <option value="0">Any Category (default)</option>
              {categories.map(({ title, id }) => (
                <option key={id} value={id}>
                  {title}
                </option>
              ))}
            </select>
          </div>

          <div className="filter__category">
            <label htmlFor="category">Choose a difficulty level: </label>

            <select
              id="level"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              // setzt category auf ausgwählten value
            >
              <option value="0">Any (default)</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          <div className="filter__category">
            <label htmlFor="category">Choose amount of questions: </label>
            <select
              id="amount"
              value={amount}
              onChange={(e) => {
                setAmount(parseInt(e.target.value));
                // console.log(amount);
              }}
              // setzt category auf ausgwählten value
            >
              <option value="5">5 (default)</option>
              <option value="10">10 </option>
              <option value="15">15 </option>
              <option value="20">20 </option>
            </select>
          </div>

          <button onClick={loadQuiz}>START</button>
        </form>
      </div>
      {/* <div className="quiz">
        <h3>Aktueller Suchpfad: </h3>
        <a href={basicSearchTerm}>{basicSearchTerm}</a>
        <a href={searchTerm}>{searchTerm}</a>
      </div> */}

      {/* Quiz erst bei Klick auf Start (isStarted) */}
      {isStarted && (
        <QuizLoader
          searchTerm={searchTerm}
          amount={amount}
          points={points}
          setPoints={setPoints}
          completed={completed}
          setCompleted={setCompleted}
          // getCounter={getCounter}
        />
      )}
    </>
  );
}
