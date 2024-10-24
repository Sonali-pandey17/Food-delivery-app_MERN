import React, { useEffect, useState } from 'react'
import "./Home.css";
import Header from '../../Components/Header/Header';
import ExploreMenu from '../../Components/Explore Menu/ExploreMenu';
import FoodDisplay from '../../Components/Food display/FoodDisplay';
import AppDownload from '../../Components/AppDownload/AppDownload';
function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [category, setCategory] = useState('All');
  return (
    <div className='home'>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home