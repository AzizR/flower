import React, { useContext, useEffect, useState } from 'react';
import FlowersAPI from "../api/FlowersAPI";
import FlowerCard from "./FlowerCard";
import { Link } from "react-router-dom";
import { SearchContext } from "../screen/Main";

function FlowerCategory({ category }) {
  const [flowers, setFlowers] = useState([]);

  const search = useContext(SearchContext);

  useEffect(() => {
    setFlowers(FlowersAPI.getCategoryFlowers(category, search))
  }, [category, search]);

  return (
    <div className='category'>
      {flowers.length > 0 && <>
        <h3>{category}</h3>
        <div className='container'>
          {flowers.map(flower => {
            return <Link key={flower.id} to={`/flowers/${flower.id}`}>
              <FlowerCard name={flower.name}/>
            </Link>
          })}
        </div>
      </>
      }

    </div>
  );
}

export default FlowerCategory;
