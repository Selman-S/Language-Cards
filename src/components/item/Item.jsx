import React, { useState } from 'react';
import './Item.css'

const Item = ({card}) => {
  const {name,img,options}= card
  const [toggle,setToggle]= useState(true)
  const handleCardVisible = (e)=> {
    setToggle(!toggle);
    setTimeout(()=> setToggle(true),1500)
    console.log(e.target)
  }
  return (
    <div className="card" onClick={handleCardVisible} >
      {toggle ?<div>
      <img src={img} alt="log" />
      <h5>{name}</h5>
      </div>: <ul>
        {
        options.map((element,i) => {
          return(
            <li>{element}</li>
          )
        })
        }
        </ul>   }
      
     
    </div>

  )
}

export default Item
