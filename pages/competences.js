import { AnimCompetences } from "../components/animCompetences";
import { ParallaxProvider } from "react-scroll-parallax";
import { Navbar } from "../components/navbar";
import { AboutMe } from "../components/aboutMe";
import { Footer } from "../components/footer";
import "bootstrap/dist/css/bootstrap.css";

export default () => (
  <main>
    <Navbar />
    <br />
    <AboutMe />

    <ParallaxProvider>
      <AnimCompetences />
    </ParallaxProvider>
    <Footer />
  </main>
);
