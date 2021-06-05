import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import LandingPage from "../components/LandingPage";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
      <Head>
        <title>Stjepan | Portfolio</title>
      </Head>
      <LandingPage />
      <Projects />
      <About />
      <Contact />
    </>
  );
}
