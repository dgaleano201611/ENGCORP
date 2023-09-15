import React from 'react'
import fotocorel from '../../assets/fotocorel.png'
import ContactForm from './ContactForm'
import './ContactTarget.css'
import ContactInfo from './ContactInfo'

const ContactTarget = () => {
  return (
    <>
      
      <section className='contact-section'>
       <aside className='contact-section-title'>
        <h2>Contáctanos</h2>
       </aside>
       <ContactInfo/>
       <aside className='contact-section-content'>
       <div className='call-image'>
          <img src={fotocorel} alt="callcenter" />
        </div>
        <div className="contact-form">
          <ContactForm/>
        </div>
       </aside>
       
      </section>
    
    </>
  )
}

export default ContactTarget