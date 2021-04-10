import Layout from "../components/Layout";
// import QuizFetcher from "../components/QuizFetcher";
import QuizKonfigurator from "../components/QuizKonfigurator";

export default function quiz() {
  return (
    <Layout title="Quiz">
      {/* Version 1 */}
      <QuizKonfigurator />

      {/* Version2 */}
      {/* <QuizFetcher /> */}
    </Layout>
  );
}
