import Layout from "../components/Layout";
import Link from "next/link";
import QuizKonfigurator from "../components/QuizKonfigurator";

export default function Home() {
  return (
    <Layout title="Quiz">
      {/* Version 1 */}
      <QuizKonfigurator />

      {/* Version2 */}
      {/* <QuizFetcher /> */}
    </Layout>

    // <Layout title="Hallo!">
    //   <div className="quiz">
    //     <p>Hier gibt es manches zu entdecken</p>
    //     <Link href="/quiz">
    //       <button>Quiz</button>
    //     </Link>

    //     <Link href="/joke">
    //       <button>Joke</button>
    //     </Link>
    //   </div>
    // </Layout>
  );
  //title als prob mitgeben
}
