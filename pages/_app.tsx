import { AppProps } from "next/app";
import localFont from "next/font/local";
import "../styles/index.css";
import "./mouse-trail.css";
import "./shine.css";
import "./additional.css";
import { useRouter } from 'next/router';
import { useEffect } from "react";


const montSerrat = localFont({ src: '../public/Montserrat-VariableFont.ttf' });

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const currentPath = router.pathname;
    if (currentPath != '/login' && !localStorage.getItem('logged')) {
      router.push('/login');
    }
    console.log(currentPath);
  })

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
