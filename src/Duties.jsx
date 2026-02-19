import React from 'react'
import {FaAngleDoubleRight} from 'react-icons/fa'
import {v4 as uuid4} from 'uuid'
const Duties = ({duties}) => {
    
  return (
    <div>
        {duties.map((duty, index)=>{
            // const id = uuid4();
            // console.log(id);
            
            return (
            <div key={index} className='job-desc'>
                <FaAngleDoubleRight className='job-icon'/>
                <p> {duty}</p>
            </div>
            )
        })}
    </div>
  )
}

export default Duties