import Link from "next/link";
export default function Navigation() {
  return (
    <nav className="site-navigation">
      <Link href="/">
        <a>Start</a>
      </Link>
      <Link href="/quiz">
        <a>Quiz</a>
      </Link>
      <Link href="/joke">
        <a>Joke of the day</a>
      </Link>
      <Link href="/impressum">
        <a>Impressum</a>
      </Link>
    </nav>
  );
}
