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
      <Link href="/gallery">
        <a>Galerie</a>
      </Link>
      <Link href="/joke">
        <a>Witz des Tages</a>
      </Link>
      <Link href="/kontakt">
        <a>Kontakt</a>
      </Link>
      <Link href="/impressum">
        <a>Impressum</a>
      </Link>
    </nav>
  );
}
