import React, { useState } from 'react'
import './Card.css'

const Card = ({card}) => {
  const {name, img, options} = card
  const [toggle,setToggle] = useState(true)
  console.log(toggle)
 
  return (
    <div className="card" onClick={()=>{
      setToggle(!toggle);
      console.log(toggle)
    }}>
      {toggle ?<div className="top">
       <img src={img} alt="" />
       <p>{name}</p>
      </div>: <div className="bottom">
     <ul>
      {options.map((item,index)=>{
        return (
            
          <li key={index}>{item}</li>
        )
      })}
     </ul>
      </div> }
      
     
    </div>
  )
}

export default Card
