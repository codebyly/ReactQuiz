// import { useState, useEffect } from "react"

import { useEffect, useState } from "react";
import QuizCarrousel from "./QuizCarrousel";
// import QuizFrage from "./QuizFrage";

export default function QuizLoader({ searchTerm }) {
  //   const [anfrage, setAnfrage] = useState("");
  const [quizFragen, setQuizFragen] = useState([]); //Quizfragen = Ergebnis der anfrage
  const [points, setPoints] = useState(0); //ursprünglich in QuizCarousel
  useLoadQuiz(searchTerm, setQuizFragen);

  function setStatus(index, status) {
    console.log("setStatus aufgerufen");
    const updatedQuizFragen = [...quizFragen];
    updatedQuizFragen[index].status = status;
    setQuizFragen(updatedQuizFragen);
  }
  //  setStatus Weiterrecihen bis zur QuizFrage zusammen
  //  mit dem index aus QuizCaroussel der frage,
  //  dort funktion nutzen um status der aktuellen Farge zu setzen
  //  status als klasse setzen
  //  FKT abhg von frage?

  return (
    <div>
      {/* nur wenn Fragen geladen und String angeben */}
      {/* array durchlaufen, für jedes Eleemtn eine Frage erzeugen */}

      {/* Fragen untereinander laden */}
      {/* <p>Punktestand: {points}</p>
      {quizFragen.map((frage, index) => (
        // <p>Kategorie: {frage.category}</p>

        <QuizFrage
          key={index}
          frage={frage}
          id={index + 1}
          fragen={quizFragen}
          setPoints={setPoints}
        />
        // einzelner FrageDeatensatze wird übergeben
      ))} */}

      {/* {console.log(quizFragen)} */}

      {/* Fragen in QuizCarousel laden: setStatus mitgeben */}
      {quizFragen.length > 1 && (
        <QuizCarrousel
          fragen={quizFragen}
          points={points}
          setPoints={setPoints}
          setStatus={setStatus}
        />
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
