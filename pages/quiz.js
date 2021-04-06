import Layout from "../components/Layout";
import QuizKonfigurator from "../components/QuizKonfigurator";
import QuizLoader from "../components/QuizLoader";

export default function quiz() {
  return (
    <Layout title="Quiz">
      <h2>Lust auf ein Quiz?</h2>
      <QuizKonfigurator />
    </Layout>
  );
}
