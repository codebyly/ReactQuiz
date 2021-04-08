import Layout from "../components/Layout";
export default function Impressum() {
  return (
    <Layout title="Impressum">
      <div className="quiz">
        <p>Ein cimdata Projekt von Lydia Heymach</p>
        <hr />
        <strong>verwendete APIS</strong>
        <p>
          Quiz: <a href="https://opentdb.com/">https://opentdb.com</a>
        </p>
        <p>
          Witze:{" "}
          <a href="https://official-joke-api.appspot.com/random_joke">
            https://official-joke-api.appspot.com/random_joke
          </a>{" "}
        </p>
      </div>
    </Layout>
  );
}
