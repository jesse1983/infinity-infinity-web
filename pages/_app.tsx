import { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import "../styles/index.css";
import "./mouse-trail.css";

const montSerrat = Montserrat({ subsets: ["latin"] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={montSerrat.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;

// animações nos botões
