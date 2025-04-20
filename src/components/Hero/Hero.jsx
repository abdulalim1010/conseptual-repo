import React, { useState } from 'react';
import BannerImage from '../../assets/images/banner.png';

const Hero = ({ handdleSearch }) => {
  const [seachText,setSearchText]=useState()
  return (
    <div>
      <img src={BannerImage} alt="banner image" />
      <div className='text-center gap-3'>
        <h1 className='text-5xl font-semibold'>Welcome to our Phone Store</h1>
        <p>Find the latest and greatest phones here !i have no new phone so i am very poor so <br /> you are ready fo r on the curent itme </p>

        <form onSubmit={(e) => handdleSearch(e, seachText)}
          className='flex flex-col md:flex-row justify-center items-center p-4' action="">
          <input
            value={seachText}
            onRateChange={e=>setSearchText(e.target.value)}
            className='border border-gray-100 bg-white w-2/3 h-12 px-5 rounded shadow mb-3 focus:outline-none focus:shadow-outline md:mr-4' type="text" placeholder='searce phone' />
        <button type='submit' className="btn btn-active btn-secondary   mb-3 h-12">Secondary</button>

      </form>
      </div>
    </div>
  );
};

export default Hero;