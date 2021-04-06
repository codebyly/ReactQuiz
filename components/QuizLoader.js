// import { useState, useEffect } from "react"

import { useEffect, useState } from "react";
import QuizFrage from "./QuizFrage";

export default function QuizLoader({ searchTerm }) {
  //   const [anfrage, setAnfrage] = useState("");
  const [quizFragen, setQuizFragen] = useState([]); //Quizfragen = Ergebnis der anfrage

  useLoadQuiz(searchTerm, setQuizFragen);

  return (
    <div>
      <p>QuizLoader</p>
      {/* Fragen laden...: <span>{searchTerm}</span> */}
      {/* nur wenn Fragen geladen und String angeben */}
      {/* array durchlaufen, für jedes Eleemtn eine Frage erzeugen */}
      {/* {quizFragen.length && (
        <>
          <p>{quizFragen[0].category}</p>
          <p>{quizFragen[0].type}</p>
        </>
      )} */}
      {quizFragen.map((frage, index) => (
        // <p>Kategorie: {frage.category}</p>
        <QuizFrage key={index} frage={frage} id={index + 1} />
        // einzelner FrageDeatensatze wird übergeben
      ))}
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

        setQuizFragen(quizData.results);
        console.log(quizData.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchQuiz();
  }, [searchTerm, setQuizFragen]);
}
