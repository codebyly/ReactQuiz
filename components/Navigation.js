import Link from "next/link";
export default function Navigation() {
  return (
    <nav className="site-navigation">
      <Link href="/">
        <a>Quiz</a>
      </Link>
      <Link href="/joke">
        <a>Random Joke</a>
      </Link>
      <Link href="/impressum">
        <a>Impressum</a>
      </Link>
    </nav>
  );
}
