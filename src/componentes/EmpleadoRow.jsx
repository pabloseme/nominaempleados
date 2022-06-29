import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import EmpleadoAvatar from './EmpleadoAvatar';

const EmpleadoRow = ({miempleado,ubicacion}) => {
 console.log(miempleado)

  return (

    <div className='card'>    
    <EmpleadoAvatar imge={miempleado.pic}/>
    <div class='card-body'>
      <h5 className="card-title">{miempleado.fullName}</h5>
      <p className="card-text">{miempleado.title}</p>
      <a href="#" className='btn btn-primary'>{miempleado.department}</a>
    </div>
    </div>
       
  
 
  )
}

export default EmpleadoRow