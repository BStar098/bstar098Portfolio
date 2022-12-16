import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import AboutMe from "./components/AboutMe";
import SocialMedia from "./components/SocialMedia";
import MyProjects from "./components/MyProjects";
import ScrollingSeparator from "./components/ScrollingSeparator";

function App() {
  return (
    <>
      <div id="home" className="landingPageContainer">
        <Navbar />
        <Landing />
      </div>
      <ScrollingSeparator backgroundColor="red" title="ABOUT ME" />
      <AboutMe />
      <SocialMedia />
      <ScrollingSeparator backgroundColor="lime" title="MY PROJECTS" />
      <MyProjects />
    </>
  );
}

export default App;
