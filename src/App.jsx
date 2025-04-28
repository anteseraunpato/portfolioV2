import Marquesina from "./components/Marquesina.jsx"
import NavBar from "./components/NavBar.jsx"
import Hero from "./sections/Hero.jsx"
import ShowcaseSection from "./sections/ShowcaseSection.jsx"

const app = () => {
  return (
    <>
    <NavBar/>
    <Hero />
    <ShowcaseSection />
    <Marquesina />
    </>
  )
}

export default app