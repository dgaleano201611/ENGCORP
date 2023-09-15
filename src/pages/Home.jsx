import React from 'react'
import HeroSection from '../components/heroSection/HeroSection'
import '../styles/Home.css'
import ServicesSection from '../components/servicesSection/ServicesSection'
import ContactTarget from '../components/contactUs/ContactTarget'


const Home = () => {
  return (
    <>
      <HeroSection/>
      <ServicesSection/>
      <ContactTarget/>
    </>
  )
}

export default Home