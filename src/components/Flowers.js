import React, { useEffect, useState } from 'react';
import FlowersAPI from '../api/FlowersAPI'
import FlowerCategory from "./FlowerCategory";

function Flowers() {
  const [flowerCategories, setFlowerCategories] = useState([]);

  useEffect(() => {
    const categories = FlowersAPI.getCategories()
    setFlowerCategories(categories)
  }, []);

  return (
    <div id='flowers-container'>
      {
        flowerCategories && flowerCategories.map((category) => {
          return <div key={category} className='flowers'>
            <FlowerCategory category={category} />
          </div>
        })
      }
    </div>
  );
}

export default Flowers;
