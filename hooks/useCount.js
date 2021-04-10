import { useState } from "react";

export function useCount(start, min, max, step = 1) {
  const [count, setCount] = useState(start);

  const isMax = count === max;
  const isMin = count === min;

  // statt disable Fragem im Kreis zeigen max>0, 0>max
  const increment = () =>
    setCount((current) => (current + step > max ? 0 : current + step));
  const decrement = () =>
    setCount((current) => (current - step < min ? max : current - step));

  const reset = () => {
    setCount(start);
  };

  return { count, setCount, increment, decrement, reset, isMax, isMin }; //Vorteil Obj Reihenfolge egal!!
}
