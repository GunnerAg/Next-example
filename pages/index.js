import Home from "../components/Home/Home";
// import Head from "next/head";
// In order to load a font from a local otf file you must use the next/head.
export default function Layout() {
  return (
    <>
      {/* <Head>
        <link
          rel="preload"
          href="/fonts/MyFontStyle.otf"
          as="font"
          crossOrigin=""
        />
      </Head> */}
      <Home />
    </>
  );
}
