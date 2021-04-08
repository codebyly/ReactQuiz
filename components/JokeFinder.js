import { useState, useEffect } from "react";

// "https://official-joke-api.appspot.com/random_joke"

export default function JokeFinder() {
  const [joke, setJoke] = useState("");
  const [punch, setPunch] = useState("");
  useFetchJoke(setJoke, setPunch);

  return (
    <div className="quiz">
      {joke && <p>{joke}</p>}
      {punch && <p>{punch}</p>}
    </div>
  );
}

function useFetchJoke(setJoke, setPunch) {
  useEffect(() => {
    async function fetchJoke() {
      try {
        const resp = await fetch(
          `https://official-joke-api.appspot.com/random_joke`
        );

        if (!resp.ok) {
          throw new Error("Fehler beim Laden");
        }

        const jokeData = await resp.json();
        // console.log(jokeData.setup);
        // console.log(jokeData.punchline);
        // const joke = `${jokeData.setup}...${jokeData.punchline}`;

        // console.log(jokeData);
        setJoke(jokeData.setup);
        setPunch(jokeData.punchline);

        console.log(jokeData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchJoke();
  }, [setJoke, setPunch]); //END useEffect
}
