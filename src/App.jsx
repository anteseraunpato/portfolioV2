import Marquesina from "./sections/Marquesina.jsx"
import NavBar from "./components/NavBar.jsx"
import FeatureCards from "./sections/FeatureCards.jsx"
import Hero from "./sections/Hero.jsx"
import ShowcaseSection from "./sections/ShowcaseSection.jsx"
import Experiencia from "./sections/Experiencia.jsx"

const app = () => {
  return (
    <>
    <NavBar/>
    <Hero />
    <ShowcaseSection />
    <Marquesina />
    <FeatureCards />
    <Experiencia />
    </>
  )
}

export default app