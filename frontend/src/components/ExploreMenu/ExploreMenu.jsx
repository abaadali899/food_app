// import React from 'react'
// import './ExploreMenu.css'
// import { menu_list } from '../../assets/assets'

// const ExploreMenu = ({category, setCategory}) => {

//   return (
//     <div className='explore-menu' id='explore-menu'>
//         <h1>Explore Our Menu</h1>
//         <p className='explore-menu=text'>Discover a wide variety of mouthwatering dishes crafted with fresh ingredients and authentic flavors.

// </p>
//         <div className="explore-menu-list">
//             {menu_list.map((item,index)=>{
//                 return (
//                     <div onClick={()=>setCategory(prev=> prev === item.menu_name ? 'All' : item.menu_name)} key={index} className="explore-menu-list-item">
//                         <img className={category===item.menu_name?'active':''} src={item.menu_image} alt="" />
//                         <p>{item.menu_name}</p>
//                     </div>
//                 )
//             })}
//         </div>
//         <hr/>
//     </div>
//   )
// }

// export default ExploreMenu

import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  // Duplicate items to simulate infinite scroll
  const loopedMenuList = [...menu_list, ...menu_list, ...menu_list];

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        Discover a wide variety of mouthwatering dishes crafted with fresh ingredients and authentic flavors.
      </p>

      <div className="explore-menu-slider-container">
        <div className="explore-menu-list infinite-scroll">
          {loopedMenuList.map((item, index) => (
            <div
              key={index}
              className="explore-menu-list-item"
              onClick={() => setCategory(prev => prev === item.menu_name ? 'All' : item.menu_name)}
            >
              <img
                className={category === item.menu_name ? 'active' : ''}
                src={item.menu_image}
                alt={item.menu_name}
              />
              <p>{item.menu_name}</p>
            </div>
          ))}
        </div>
      </div>

      <hr />
    </div>
  );
};

export default ExploreMenu;
