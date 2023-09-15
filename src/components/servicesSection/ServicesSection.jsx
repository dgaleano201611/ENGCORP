import React from 'react'
import sevices1 from '../../assets/imagen1.png'
import services2 from '../../assets/services2.jpg'
import services3 from '../../assets/imagen3.png'
import './ServicesSection.css'
import { Link } from 'react-router-dom'

const ServicesSection = () => {
  return (
    <>
     <section className="services">
      <aside className='services-title'>
        <h2>Nuestros</h2>
        <h3>Servicios</h3>
      </aside>
      <aside className='services-images'>
        <img src={sevices1} alt="electric"/>
        <img src={services2} alt='clean' />
        <img src={services3} alt="home"/>
      </aside>
      <aside className="services-information">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore. 
        </p>
        <Link to="/programs">
          <button>Saber mas</button>
        </Link>
      </aside>
     </section>
    </>
  )
}

export default ServicesSection