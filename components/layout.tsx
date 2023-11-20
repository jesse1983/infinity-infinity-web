import Script from "next/script";
import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";

export default function Layout({ preview, children }) {
  return (
    <>
      <Script src="/mouse-trail.js" />
      <Meta />
      <div className="min-h-scree text-white">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
