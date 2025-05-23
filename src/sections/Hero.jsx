import { words } from "../../public/constants"
import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button"
import HeroExperience from "../components/HeroModels/HeroExperience"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const hero = () => {

  useGSAP(() => {
    gsap.fromTo('.hero-text h1', {y:50, opacity:0}, {y:0, opacity:1, stagger:0.2, duration:1, ease:'power2.inOut'},)
  })

  return (
    <section className='relative overflow-hidden'>
      <div className='absolute top-0 left-0 z-10'>
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className='hero-layout'>
        {/*Contenido del Hero a la izquierda*/}

        <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
            <div className='flex flex-col gap-7'>
                <div className='hero-text'>
                    <h1>Convierto
                        <span className="slide">
                            <span className="wrapper">
                                {words.map((word) => (
                                    <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                                        <img src={word.imgPath} alt={word.text} className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50" />
                                        <span>{word.text}</span>

                                    </span>
                                ))}
                            </span>
                        </span>
                    </h1>
                    <h1>en soluciones para</h1>
                    <h1>cambiar el mundo.</h1>
                </div>

                <p className="text-white-50 md:text-xl relative z-10 pointer-events-none text-justify">
                👋 ¡Hola, soy Jahir!<br/>Estudio Desarrollo y Gestión de software. Soy fan de<br/>aprender cosas nuevas, de resolver problemas<br/>y  de la pizza con piña y tocino.
                </p>
                

                <Button className="md:w-80 md:h-16 w- h-12" id="button"
                text="Ver proyectos" />

                {/*<a className="md:w-80 md:h-16 w- h-12" id="button" href="#">
                <div className="cta-button group">
            <div className="bg-circle"/>
            <p className="text">Ver CV</p>
        <div className="icon-wrapper">
            <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
        </div>
                </a>*/}
            </div>
        </header>

        {/*Contenido del Hero a la derecha*/}

        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>

      </div>

      <AnimatedCounter />
    </section>
  )
}

export default hero
