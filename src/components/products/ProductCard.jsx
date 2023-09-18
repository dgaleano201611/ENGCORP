import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Link } from 'react-router-dom';
import {BiSolidRightArrow} from 'react-icons/bi'



const ProductCard = ({el}) => {
  
  return (
    <Card style={{ width: '18rem' }} className='card-content'>
      <Card.Img variant="top" src={el.imagen} className='card-image'/>
      <Card.Body className='card-info'>
        <Card.Title className='card-info__title'>{el.nombre}</Card.Title>
        <Card.Text className='card-info__text'>
          {el.descripcion}
      </Card.Text>
      
      </Card.Body>
      <Link to='#'>
        <p className='paragraf-a'>Leer <BiSolidRightArrow/></p>
      </Link>
    </Card>
  )
}

export default ProductCard