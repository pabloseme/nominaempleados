import React from 'react';

const EmpleadoAvatar = (props) => {
    console.log(props)

  return (
    <div>     
     <img src={props.imge} className='card-img-top' alt="..."/>
    </div>
   

  )
}

export default EmpleadoAvatar