// import React, { useContext } from 'react'
// import './FoodDisplay.css'
// import { StoreContext } from '../context/StoreContext'
// import FoodItem from '../FoodItem/FoodItem'

// const FoodDisplay = ({category}) => {

//     const {food_list} = useContext(StoreContext)
//   return (
//     <div className='food-display' id='food-display'>
//         <h2>Top dishes near you</h2>
//         <div className="food-display-list">
//             {food_list.map((item,index)=>{
//               if(category==='All' || category===item.category){
//                 return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
//               }
//                             })}
//         </div>
//     </div>
//   )
// }

// export default FoodDisplay

 import React, { useContext, useState } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const filteredFood = food_list?.filter((item) => {
    const matchCategory = category === 'All' || item.category === category;

    const matchSearch =
      typeof item.name === 'string' &&
      item.name.toLowerCase().includes(searchTerm.toLowerCase());

    const matchMin = minPrice === '' || item.price >= parseFloat(minPrice);
    const matchMax = maxPrice === '' || item.price <= parseFloat(maxPrice);

    return matchCategory && matchSearch && matchMin && matchMax;
  });

  return (
    <div className='food-display' id='food-display'>
      <h2>Top Dishes near you</h2>

      {/* Search & Filter Inputs */}
      <div className='food-filters'>
        <input
          type='text'
          placeholder='Search food by name...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input
          type='number'
          placeholder='Min price'
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type='number'
          placeholder='Max price'
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      <div className='food-display-list'>
        {filteredFood.length > 0 ? (
          filteredFood.map((item, index) => (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
              description={item.description}
            />
          ))
        ) : (
          <p style={{ padding: '20px', color: '#888' }}>No food items found.</p>
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;
