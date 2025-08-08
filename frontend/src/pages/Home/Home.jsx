import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
// import ReserveTable from '../../components/ReserveTable/ReserveTable';
// import Review from '../Review/Review';

const Home = () => {
  const [category, setCategory] = useState('All');

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      {/* <ReserveTable /> 
      <Review/> */}
    </div>
  );
};

export default Home;
