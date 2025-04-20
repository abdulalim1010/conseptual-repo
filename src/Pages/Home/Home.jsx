import React from 'react';
import Hero from '../../components/Hero/Hero';
import PhoneContainer from '../../components/Phone/PhoneContainer';
import { useLoaderData } from 'react-router';


const Home = () => {
  const data = useLoaderData()
  const handdleSearch = (e,text) => {
  e.preventDefult()
  console.log(text)
  }

  return (
    <div>
      <Hero handdleSearch={handdleSearch}></Hero>
      <PhoneContainer phones={data} />
      <h1>hero section</h1>
      <h1>phone section</h1>
    </div>
  );
};

export default Home;