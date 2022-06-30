import React from 'react'
import {languages} from '../../helper/data';
import "./Card.css";
import Item from '../item/Item.jsx'
const Card = () => {
  console.log(languages);
  
  return (
    <div className="card-container" >
      <div className="stripped"></div>
      <h1 className="lang-title">Languages</h1>
      <div className="cards-contain">
        {languages.map((item,index) => {
          return (
            <Item card={item} key={index}/>
          )
        })}
      </div>

      
    </div>
  )
}

export default Card