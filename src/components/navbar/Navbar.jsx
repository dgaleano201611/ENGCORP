import './Navbar.css'
import {FcEngineering} from 'react-icons/fc'
import React from 'react'
import {Link} from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import NavTop from './NavTop'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import ise from '../../assets/logocorte.jpg'

const Navbar = () => {
  const [validerPath, setValiderPath] = useState(false)
  const location = useLocation()
  const menuRef = useRef();
  const hamRef = useRef();
  const closeRef = useRef();

  const paths = ["/", "/about", "/programs", "/solution", "/current-projects", "/contacts"]

  useEffect(() => {
    const result = paths.some((el) => el === location.pathname)
    setValiderPath(result)
  }, [location])

  const handleToggleMenu = () => {
    if(hamRef.current.style.display === "block"){
      hamRef.current.style.display = "none"
      closeRef.current.style.display = "block"
      menuRef.current.style.display = "block"
    }else{
      hamRef.current.style.display = "block"
      closeRef.current.style.display = "none"
      menuRef.current.style.display = "none"
    }
  }
  
  document.addEventListener("click", (e) => {
    if(menuRef.current.styles.display === "block"){
      menuRef.current.style.display = "none";
      hamRef.current.style.display = "block"
      closeRef.current.style.display = "none"
    }


  })

  return (
    validerPath&&(
      <>
      <NavTop/>
      <section className='navbar'>
        <Link  to="/" className='navbar-logo'>
          <img src={ise} alt="ese" className='logo'/>
          
        </Link>
        <button onClick={handleToggleMenu} className='menu-btn'>
          <div ref={hamRef} style={{ display: "block" }}>
            <GiHamburgerMenu className='menu-icon'/>
          </div>
          <div ref={closeRef} style={{ display: "none" }}>
            <AiOutlineClose className='menu-icon'/>
          </div>
        </button>
        <nav ref={menuRef} style={{display:"none"}} className="navbar-content">
          <Link to="/" className='link' >Home</Link>
          <Link to="/about" className='link'>About</Link>
          <Link to="/programs" className='link'>Programs</Link>
          <Link to="/solution" className='link'>Solution</Link>
          <Link to="/current-projects" className='link'>Currrent Projects</Link>
          <Link to="/contacts" className='link'>Contacts</Link>
        </nav>
      </section>
      </>
    )
  )
}

export default Navbar