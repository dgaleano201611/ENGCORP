import './Products.css'
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
import {FaArrowRightLong} from 'react-icons/fa6'

function Products() {

  const initialDb = [
    { 
     id: 1,
     nombre: "energias Renobable",
     imagen: "https://images.pexels.com/photos/4792503/pexels-photo-4792503.jpeg",
     descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In ad sit ipsam vitae maxime dignissimos ."
    },
    { 
     id: 2,
     nombre: "Instalación electrica",
     imagen: "https://images.pexels.com/photos/18163298/pexels-photo-18163298/free-photo-of-mar-rocas-neblina-costa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
     descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In ad sit ipsam vitae maxime dignissimos ."
   
    },
    { 
     id: 3,
     nombre: "Construcciones",
     imagen: "https://images.pexels.com/photos/4220967/pexels-photo-4220967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
     descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In ad sit ipsam vitae maxime dignissimos ."
     
    },
   
   ]


  return (
    <>
      <section className='card-section'>
      <aside className='section-proyect-title'>
        <h2>Proyectos</h2>
        <h3>Ejecutados</h3>
      </aside>
        <section className='product-card'>
          {initialDb.map((el) => <ProductCard el={el} key={el.id} className='product-card__tarjet'/>)}
        </section>
        <Link to='/current-projects' className='ver-todos__icon'>
          <p >Ver Todos <FaArrowRightLong/> </p>
        </Link>
      </section>
    </>
  );
}

export default Products;