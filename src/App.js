import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import AboutMe from "./components/AboutMe";
import SocialMedia from "./components/SocialMedia";
import MyProjects from "./components/MyProjects";
import ScrollingSeparator from "./components/ScrollingSeparator";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div id="home" className="landingPageContainer">
        <Navbar />
        <Landing />
      </div>
      <ScrollingSeparator
        fontSize="8vh"
        backgroundColor="red"
        title="ABOUT ME"
      />
      <AboutMe />
      <SocialMedia />
      <ScrollingSeparator
        fontSize="8vh"
        backgroundColor="lime"
        title="MY PROJECTS"
      />
      <MyProjects />

      <Footer />
    </>
  );
}

export default App;
