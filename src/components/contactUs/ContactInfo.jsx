import React from 'react'
import {FaHome} from 'react-icons/fa'
import {AiFillPhone} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
import './ContactInfo.css'

const ContactInfo = () => {
  return (
    <>
       <article className="contact-cards">
        <aside className="contact-card box-shadow">
          <FaHome/>
          <h5>UBICACIÓN</h5>
          <small>Bucaramanga, Colombia, Santander</small>
        </aside>
        <aside className="contact-card box-shadow">
          <AiFillPhone/>
          <h5>TELÉFONO</h5>
          <small><a href="tel:3014445459">(+057)3014445459</a></small>
        </aside>
        <aside className="contact-card box-shadow">
          <MdEmail/>
          <h5>EMAIL</h5>
          <small><a href="mailto:diegodag.24@gmail.com">diegodag.24@gmail.com</a></small>
        </aside>
        <aside className="contact-card box-shadow">
          <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.5 9.4375C28.4375 9.75 28.125 10 27.75 10H22.8125L21.375 18H26.0625C26.5625 18 26.875 18.4375 26.8125 18.9375L26.375 21.4375C26.3125 21.75 26 22 25.625 22H20.6875L19.75 27.4375C19.6875 27.75 19.375 28 19 28H16.4375C16 28 15.625 27.625 15.6875 27.125L16.625 22H10.4375L9.5 27.4375C9.4375 27.75 9.125 28 8.75 28H6.25C5.75 28 5.375 27.625 5.5 27.125L6.375 22H1.75C1.25 22 0.875 21.625 1 21.125L1.4375 18.625C1.5 18.3125 1.8125 18 2.1875 18H7.125L8.5625 10H3.875C3.375 10 3.0625 9.625 3.125 9.125L3.5625 6.625C3.625 6.3125 3.9375 6 4.3125 6H9.25L10.1875 0.625C10.25 0.3125 10.5625 0 10.9375 0H13.5C13.9375 0 14.3125 0.4375 14.25 0.9375L13.3125 6H19.5L20.4375 0.625C20.5 0.3125 20.8125 0 21.1875 0H23.6875C24.1875 0 24.5625 0.4375 24.4375 0.9375L23.5625 6H28.1875C28.6875 6 29.0625 6.4375 28.9375 6.9375L28.5 9.4375ZM17.3125 18L18.75 10H12.625L11.1875 18H17.3125Z" fill="#EB7C15"/>
          </svg>
          <h5>SOCIAL MEDIA</h5>
          <small className="social-media">
          <a href="https://github.com/dgaleano201611" target="_blank" rel="noopener">
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 100 100" id="linkedin"><path d="M55.35,44.17h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11ZM50.8,3.77A45.67,45.67,0,1,0,96.47,49.44,45.72,45.72,0,0,0,50.8,3.77ZM39.38,70a.77.77,0,0,1-.77.76h-8.8a.76.76,0,0,1-.76-.76V40.43a.76.76,0,0,1,.76-.77h8.8a.77.77,0,0,1,.77.77ZM33.9,35.71a5.53,5.53,0,1,1,5.53-5.53A5.52,5.52,0,0,1,33.9,35.71ZM76.62,70a.77.77,0,0,1-.77.76h-8.8a.76.76,0,0,1-.76-.76V54.11c0-4.18-1.49-7-5.23-7a5.65,5.65,0,0,0-5.3,3.78,7.12,7.12,0,0,0-.34,2.52V70a.77.77,0,0,1-.77.77h-8.8a.76.76,0,0,1-.76-.77c0-4.22.11-24.71,0-29.53a.76.76,0,0,1,.76-.77h8.78a.76.76,0,0,1,.77.77v3.63a10.26,10.26,0,0,1,9.31-5.13c6.79,0,11.89,4.44,11.89,14Zm-21.2-25.8v-.11l-.07.11Zm-.07,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Z"></path></svg>
          </a>
          <a href="https://www.linkedin.com/in/diego-galeano-7464b4134/" target="_blank" rel="noopener">
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="github"><path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path></svg>
          </a>
        </small>
        </aside>
      </article>
    </>
  )
}

export default ContactInfo