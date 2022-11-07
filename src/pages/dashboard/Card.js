
import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className="card">
      <div className='cardbody'>
        <img src={props.img} class="card__image"  alt = "hello"/>
        <h2 className='card__title'>{props.title}</h2>
        <p className='card__description'>{props.description}</p>
      </div>
      <button className='card__btn'>View info</button>
    </div>
  );
}

export default Card;
