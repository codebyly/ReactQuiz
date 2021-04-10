import { useState } from "react";

// "https://official-joke-api.appspot.com/random_joke"

export default function JokeFinder() {
  const [joke, setJoke] = useState("");
  const [punch, setPunch] = useState("");
  const api = "https://official-joke-api.appspot.com/random_joke";

  const loadJoke = () => {
    fetchJoke(api, setJoke, setPunch);
  };

  return (
    <>
      <button onClick={loadJoke}>Show New Joke</button>

      {joke && punch && (
        <div className="quiz">
          <p>{joke}</p>
          <p>{punch}</p>
        </div>
      )}
    </>
  );
}

async function fetchJoke(api, setJoke, setPunch) {
  try {
    const resp = await fetch(api);

    if (!resp.ok) {
      throw new Error("Fehler beim Laden");
    }

    const jokeData = await resp.json();

    setJoke(jokeData.setup);
    setPunch(jokeData.punchline);
  } catch (error) {
    console.log(error);
  }
}
