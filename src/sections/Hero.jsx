import React from 'react'

const hero = () => {
  return (
    <section className='relative overflow-hidden'>
      <div className='absolute top-0 left-0 z-10'>
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className='hero-layout'>
        {/*Contenido del Hero a la izquierda*/}

        <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>

        </header>

        {/*Contenido del Hero a la derecha*/}

      </div>
    </section>
  )
}

export default hero
