import React from 'react'
import HeroSection from '../components/heroSection/HeroSection'
import '../styles/Home.css'
import ServicesSection from '../components/servicesSection/ServicesSection'
import ContactTarget from '../components/contactUs/ContactTarget'
import Products from '../components/products/Products'
import Footer from '../components/footer/Footer'


const Home = () => {
  return (
    <>
      <HeroSection/>
      <ServicesSection/>
      <Products/>
      <ContactTarget/>
      <Footer/>
    </>
  )
}

export default Home