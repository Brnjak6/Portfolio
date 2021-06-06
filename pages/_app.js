import Layout from "../components/Layout";
import Head from "next/head";
import "../styles/Main.scss";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Brnjak | Portfolio</title>
        <link rel="icon" type="image/x-icon" href="/logo.svg" />
      </Head>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
