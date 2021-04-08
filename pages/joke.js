import Layout from "../components/Layout";
import JokeFinder from "../components/JokeFinder";

export default function joke() {
  return (
    <Layout title="Joke of the Day">
      <JokeFinder />
    </Layout>
  );
}
