import { useCount } from "../hooks/useCount";
import QuizFrage from "../components/QuizFrage";

export default function QuizCarrousel({
  fragen, //Entpacken funktioniert nicht!?
  points,
  setPoints,
  completed,
  setCompleted,
  setStatus,
}) {
  const max = fragen.length - 1;
  const min = 0;

  const { count, increment, decrement, reset /*, isMax, isMin*/ } = useCount(
    0,
    min,
    max,
    1
  );

  return (
    <div onLoad={reset} className="quiz quiz-carrousel ">
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
      )}
      <hr />
      <div className="mood__buttons">
        <button className="links" onClick={decrement} /*disabled={isMin}*/>
          prev
        </button>
        <button className="rechts" onClick={increment} /*disabled={isMax}*/>
          next
        </button>
        <button onClick={reset}>go to #1</button>
      </div>
    </div>
  );
}
