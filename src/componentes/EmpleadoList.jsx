import React, { useEffect, useState } from 'react';
import empleados from '../datos/datosempleados';
import EmpleadoRow from './EmpleadoRow';


const EmpleadoList = () => {
    
    const [emplead,setEmplead] = useState([]);

    useEffect(() => {
      setEmplead([...empleados]);          
    },[])
    

  return (
        <div className='container'>
          <div className='row mb-5'>
              {
                  emplead.map((element,index)=>(
                    <div className='col-md-4' key={index}>
                        <EmpleadoRow miempleado={element} ubicacion={index} />       
                    </div>                            
                  
                  ))
              }
          </div>                                     
        </div>
    
  )
}

export default EmpleadoList;