import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";

export default function Layout({ children, title }) {
  return (
    <div className="site-wrapper">
      <Head>
        <title>{title || "Projektarbeit by Lydia Heymach"}</title>
      </Head>

      <Header />
      <main className="site-main inner-width">
        {title && <h2>{title}</h2>}
        {children}
      </main>
      <Footer />
    </div>
  );
}
