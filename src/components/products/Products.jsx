import './Products.css'
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
import {FaArrowRightLong} from 'react-icons/fa6'
import { useState } from 'react';
import { helpHttp } from '../../helpers/helpHttp';
import { useEffect } from 'react';


function Products() {

  const [db, setDb] = useState([])



  let api = helpHttp()
  let url = "http://localhost:3000/projects"

  useEffect(() => {
    api.get(url).then(res => {
      console.log(res)
      if(!res.err){
        const ultimosTres = res.slice(-3);
        setDb(ultimosTres)
      }else{
        setDb(null)
      }
    })
  },[])

  return (
    <>
      <section className='card-section'>
      <aside className='section-proyect-title'>
        <h2>Proyectos</h2>
        <h3>Ejecutados</h3>
      </aside>
        <section className='product-card'>
          {db.map((el) => <ProductCard el={el} key={el.id} className='product-card__tarjet'/>)}
        </section>
        <Link to='/current-projects' className='ver-todos__icon'>
          <p >Ver Todos <FaArrowRightLong/> </p>
        </Link>
      </section>
    </>
  );
}

export default Products;