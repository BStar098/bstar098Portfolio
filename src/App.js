import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import AboutMe from "./components/AboutMe";
import SocialMedia from "./components/SocialMedia";
import MyProjects from "./components/MyProjects";

function App() {
  return (
    <>
        <div id="home" className="landingPageContainer">
          <Navbar />
          <Landing />
        </div>
      <AboutMe />
      <SocialMedia />
      <MyProjects />
    </>
  );
}

export default App;
