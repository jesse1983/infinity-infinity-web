import { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import "../styles/index.css";
import "./mouse-trail.css";
import "./shine.css";
import "./additional.css";

const montSerrat = Montserrat({ subsets: ["latin"] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      <main className={montSerrat.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;

// animações nos botões
