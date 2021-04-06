// Der nächste Schritt wäre dann die Abstraktion in einen eigenen useCount-Hook.
// Der Hook soll Startwert, Minimalwert, Maximalwert und Schrittgröße (mit
// default 1) erhalten. Der Hook soll ein Objekt mit den Werten bzw. Funktionen count,
// increment, decrement, setCount, reset, isMax und isMin zurückgeben.

import { useState } from "react";

export function useCount(start, min, max, step = 1) {
  const [count, setCount] = useState(start);

  const isMax = count === max;
  const isMin = count === min;

  //   const increment = () =>
  //     isMax ? setCount((current) => current) : setCount((current) => current + 1);
  //   const decrement = () =>
  //     isMin ? setCount((current) => current) : setCount((current) => current - 1);
  //   const reset = () => setCount(start);

  //robuster für steps != 1!
  const increment = () =>
    setCount((current) => (current + step > max ? max : current + step));
  const decrement = () =>
    setCount((current) => (current - step < min ? min : current - step));
  const reset = () => setCount(start);

  // return [count, increment, decrement, setCount, reset, isMax, isMin];
  return { count, setCount, increment, decrement, reset, isMax, isMin }; //Vorteil Obj Reihenfolge egal!!
}
