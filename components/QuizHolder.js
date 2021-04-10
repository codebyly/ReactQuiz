import { useState, useEffect } from "react";
import QuizCarrousel from "./QuizCarrousel";
import QuizResult from "./QuizResult";
// import QuizFrage from "./QuizFrage";

export default function QuizHolder({
  amount,
  searchTermLink,
  setSearchTerm,
  searchTerm,
}) {
  // setSearchTerm(searchTermLink);

  const [quizFragen, setQuizFragen] = useState([]); //Quizfragen = Ergebnis der anfrage
  const [points, setPoints] = useState(0); //anzahl richtige antworten = punkte
  const [completed, setCompleted] = useState(0); //zählt beantwortete Fragen
  const isCompleted = completed >= quizFragen.length;
  // console.log(`Game beendet: ${isCompleted}`);

  const [isStarted, setIsStarted] = useState(false);
  useLoadQuiz(searchTerm, setQuizFragen);

  //setStatus setzt Status der einzelnen Frage
  //>> Weiterrecihen bis zur QuizFrage zusammen mit index aus QuizCaroussel
  function setStatus(index, status) {
    // console.log("setStatus aufgerufen");
    const updatedQuizFragen = [...quizFragen];
    updatedQuizFragen[index].status = status;
    setQuizFragen(updatedQuizFragen);
  }

  //Click auf Starter
  const loadQuiz = () => {
    setIsStarted(true);
    setSearchTerm(searchTermLink); //Daten werden erst bei Start eingesetzt
    //reset points und completed
    setPoints(0);
    setCompleted(0);
    //zurück zu frage 1 >> counter=1
  };

  return (
    <div>
      <button onClick={loadQuiz}>Starter</button>

      {/* Fragen in QuizCarousel laden: setStatus mitgeben
          nur anzeigen, wenn Fragen geladen
          und ausblenden sobald beendet*/}
      {quizFragen.length > 1 && !isCompleted && (
        <QuizCarrousel
          fragen={quizFragen}
          points={points}
          setPoints={setPoints}
          completed={completed}
          setCompleted={setCompleted}
          setStatus={setStatus}
          isStarted={isStarted}
          // getCounter={getCounter}
        />
      )}
      {/* QuizResult laden sobald Fragen geladen und Quiz beendet */}
      {quizFragen.length > 1 && isCompleted && (
        <QuizResult points={points} amount={amount} />
      )}
    </div>
  );
}

function useLoadQuiz(searchTerm, setQuizFragen) {
  useEffect(() => {
    async function fetchQuiz() {
      try {
        const resp = await fetch(searchTerm);
        if (!resp.ok) {
          throw new Error("Fehler beim Laden der Quizfragen");
        }
        const quizData = await resp.json();
        for (const result of quizData.results) {
          result.status = "unanswered"; //status wird hinzugefügt
        }
        setQuizFragen(quizData.results);
        // console.log(quizData.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchQuiz();
  }, [searchTerm, setQuizFragen]);
}
