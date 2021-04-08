import { useCount } from "../hooks/useCount";
import QuizFrage from "../components/QuizFrage";

export default function QuizCarrousel({
  fragen, //Entpacken funktioniert nicht!?
  points,
  setPoints,
  completed,
  setCompleted,
  setStatus,
  // getCounter,
}) {
  const max = fragen.length - 1;
  const min = 0;

  //   const { count, setCount, increment, decrement, reset, isMax, isMin } = useCount(
  const { count, increment, decrement /*, isMax, isMin*/ } = useCount(
    0,
    min,
    max,
    1
  );

  // getCounter(setCount);
  // setCount(0);//führt zu Fehler: too many rerenders!

  // console.log(`Status Frage: ${fragen[0].status}`);//angekommen

  //reset Counter

  return (
    <div className="quiz quiz-carrousel ">
      <p>
        <span className="links">
          Question # {count + 1}/{fragen.length}
        </span>
        <span className="rechts"> / points: {points}</span>
        <span className="rechts"> answered: {completed} / </span>
      </p>
      <hr />

      {fragen.length > 1 && (
        <QuizFrage
          frage={fragen[count]}
          setPoints={setPoints}
          setStatus={setStatus}
          count={count}
          setCompleted={setCompleted}
        />
        //hier muss information mitgeggben werden/existieren ob frage beantwortet
      )}
      <hr />
      <div className="mood__buttons">
        <button className="links" onClick={decrement} /*disabled={isMin}*/>
          prev
        </button>
        <button className="rechts" onClick={increment} /*disabled={isMax}*/>
          next
        </button>
      </div>
    </div>
  );
}
