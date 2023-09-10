import React from 'react'
import heroVideo from '../../assets/hero-video-2.mp4'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <>
    <section className='hero-container'>
      <video src={heroVideo} autoPlay loop muted /> 
      <div className='hero-text'>
          <h1>Ingeniería y Soluciones</h1>
          <p>Energéticas SAS</p>
      </div>
    </section>
    </>
  )
}

export default HeroSection