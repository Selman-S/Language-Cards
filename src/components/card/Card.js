import React, { useState } from 'react'
import './Card.css'

const Card = (props) => {
  const [toggle,useToggle] = useState()
  console.log(props.options)
 
  return (
    <div className="card">
      <div className="top">
       <img src={props.img} alt="" />
       <p>{props.name}</p>
      </div>
      <div className="bottom">
      <select name="lang" id="lang">
        <option value="">{props.options}</option>
      </select>
      </div>
    </div>
  )
}

export default Card
