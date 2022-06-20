import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import FlowersAPI from "../api/FlowersAPI";
import Nav from "../components/Nav";

import FlowerIMG from "../static/images/flower.jpg";

function Flower() {
  const { id } = useParams()

  const [flower, setFlower] = useState({})

  useEffect(() => {
    setFlower(FlowersAPI.getFlower(id))
  }, [id])

  const price = Number(flower.price).toLocaleString('de-DE', {style: 'currency', currency: 'EUR'})
  return (
    <div className='flower-page'>
      <Nav/>
      {
        flower && <div className='container'>
          <div className="flower-image">
            <img src={FlowerIMG} alt="flower" width="400"/>
          </div>
          <div className='flower-description-container'>
            <div className='description'>
              <h4>Name:</h4>
              <p>{flower.name}</p>
            </div>

            <div className='description'>
              <h4>Description:</h4>
              <p>{flower.description}</p>
            </div>

            <p><b>Price:</b> {price}</p>
          </div>
        </div>
      }
    </div>
  );
}

export default Flower;
