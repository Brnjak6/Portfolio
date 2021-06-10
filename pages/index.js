import About from "../components/About";
import Contact from "../components/Contact";
import LandingPage from "../components/LandingPage";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
      <LandingPage />
      <Projects />
      <About />
      <Contact />
    </>
  );
}
