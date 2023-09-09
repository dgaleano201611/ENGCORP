import React from 'react'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillTwitterSquare} from 'react-icons/ai'
import {FaRss} from 'react-icons/fa'
import {ImLocation2} from 'react-icons/im'
import {MdEmail} from 'react-icons/md'
import {AiFillPhone} from 'react-icons/ai'
import './NavTop.css'


const NavTop = () => {
  return (
    <>
      <section className='nav-top'>
        <aside className='nav-top-icons'>
          <a href='#'>
            <AiFillFacebook className='icons-social-media'/>
          </a>
          <a href='#'>
            <AiFillInstagram className='icons-social-media'/>
          </a>
          <a href='#'>
            <AiFillTwitterSquare className='icons-social-media'/>
          </a>
          <a href='#'>
            <FaRss className='icons-social-media'/>
          </a>
        </aside>
        <aside className='nav-top-location'>
          <a href="#">
            <ImLocation2 className='icon-location'/>
          </a>
          <span className='span-text'>9870 St Vincent Place, Glasgow, DC 45 Fr 45.</span>
        </aside >
        <aside className='nav-top-contact'>
          <a href="#">
           <MdEmail className='icon-location'/>
           <span className='span-text'>
            contact@demolink.org
           </span>
          </a>
          <a href="#">
           <AiFillPhone className='icon-location'/>
           <span className='span-text'>
           +1 800 559 6580
           </span>
          </a>
        </aside>
      </section>
    </>
  )
}

export default NavTop