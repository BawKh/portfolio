import "./App.css";
import AppNavBar from "./components/AppNavBar";
import HeroSections from "./components/HeroSections";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";
import AppFooter from "./components/AppFooter";
function App() {
  return (
    <>
      <AppNavBar />
      <HeroSections />
      <AboutMe />
      <Skills />
      <Portfolio />
      <ContactMe />
      <AppFooter />
    </>
  );
}

export default App;
