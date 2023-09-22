import React from 'react'
import './Footer.css'
import logoCompanie from '../../assets/logocorte.jpg'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillTwitterSquare} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <section className="footer-section">
        <article className='footer-content'>
          <aside className='logo-and-icons'>
            <img src={logoCompanie} alt="logo" />
            <div className="social-icons">
              <a href='#'>
                <AiFillFacebook className='icons-social-media2'/>
              </a>
              <a href='#'>
                <AiFillInstagram className='icons-social-media2'/>
              </a>
              <a href='#'>
                <AiFillTwitterSquare className='icons-social-media2'/>
              </a>
            </div>
          </aside>
          <aside className='section-contact'>
            <h3>CONTACTO</h3>
            <p>CALLE 14 #25-30</p>
            <p>BUCARAMANGA, SANTANDER</p>
            <p>TELEFONO: (+57) 3014445459</p>
            <p>E-MAIL: diegodag.24@gmail.com</p>
          </aside>
          <aside className='section-pages'>
            <h3>MAPA DEL SITIO</h3>
            <Link to='/about' className='links-footer'>About</Link>
            <Link to='/programs' className='links-footer' >Programs</Link>
            <Link to='/solutio' className='links-footer'>Solutions</Link>
            <Link to='/current-projects' className='links-footer'>Current Projectst</Link>
            <Link to='/contacts' className='links-footer'>Contact</Link>
          </aside>
        </article>
        <p>Página creada por @diegodag</p>
      </section>
    </>
  )
}

export default Footer