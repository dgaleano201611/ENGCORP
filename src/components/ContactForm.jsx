import React from 'react'
import { useState } from 'react'

const ContactForm = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [comentario, setComentario] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Formulado enviado correctamente")
  }

  return (
    <>
      <section className='contact-form'>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nombre">Nombre: </label>
          <input 
            type="text" 
            placeholder='Ingresa tu nombre *'
            name='nombre' 
            id='nombre'
            value={name}
            onChange={(e) => setName(e.target.value)}  
            className="input-name" 
          />
          <label htmlFor="email">Email: </label>
          <input 
            type='email'
            id='email' 
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Ingresa tu correo *'
            className='input-email' 
          />
          <textarea 
            name="comments" 
            cols="50" 
            rows="10" 
            placeholder="Deja tus comentarios *" 
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
            style={{resize:"none"}}
            required 
          />

          <input type="submit"  />

        </form>

        <p>Hola señor {name} tu correo es {email} mas {comentario} sera &%&%%/&</p>
      </section>
    </>
  )
}

export default ContactForm