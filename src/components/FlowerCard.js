import React from 'react';
import FlowerIMG from '../static/images/flower.jpg'

function FlowerCard({ name }) {
  return (
    <div className='flower-card'>
      <div className="flower-card-image-container">
        <img src={FlowerIMG} alt={name} />
      </div>
      <div className='flower-description'>
        <h5>{name}</h5>
      </div>
    </div>
  );
}

export default FlowerCard;
