import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import AboutMe from "./components/AboutMe";
import SocialMedia from "./components/SocialMedia";
function App() {
  return (
    <>
      <div className="landingPageContainer">
        <Navbar />
        <Landing />
      </div>
      <AboutMe />
      <SocialMedia />
    </>
  );
}

export default App;
