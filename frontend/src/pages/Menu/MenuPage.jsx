//  // src/pages/MenuPage.jsx
// import React, { useState } from 'react';
// import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
// import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';

// const MenuPage = () => {
//   const [category, setCategory] = useState('All');

//   return (
//     <div style={{ padding: '30px' }}>
//       <ExploreMenu category={category} setCategory={setCategory} />
//       <FoodDisplay category={category} setCategory={setCategory} />
//     </div>
    
//   );
// };

// export default MenuPage;

 import React, { useState } from 'react';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';

const MenuPage = () => {
  const [category, setCategory] = useState('All');

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <div>
      {/* Only keep one ExploreMenu and one FoodDisplay */}
      <ExploreMenu onSelectCategory={handleCategoryChange} />
      <FoodDisplay category={category} />
    </div>
  );
};

export default MenuPage;
