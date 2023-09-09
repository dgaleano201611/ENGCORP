import React, {useRef} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'

const HamburgerMenu = () => {
  const hamRef = useRef();
  const closeRef = useRef();
  const menuRef = useRef();

  console.log(hamRef, closeRef);

  const handleClick = () => {
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
 
    
  return (
    <>
      <div>HamburgerMenu</div>
      <button onClick={handleClick}>
      <div ref={hamRef} style={{ display: "block" }}>
          <GiHamburgerMenu />
        </div>
        <div ref={closeRef} style={{ display: "none" }}>
          <AiOutlineClose />
        </div>
      </button>
      <nav ref={menuRef} style={{display:"none"}}>
        <a href="#">Section 1</a>
        <br />
        <a href="#">Section 2</a>
        <br />
        <a href="#">Section 3</a>
        <br />
        <a href="#">Section 4</a>
        <br />
        <a href="#">Section 5</a>
        <br />
      </nav>
    </>
  )
}

export default HamburgerMenu