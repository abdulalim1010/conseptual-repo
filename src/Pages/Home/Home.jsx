import React from 'react';
import Hero from '../../components/Hero/Hero';
import PhoneContainer from '../../components/Phone/PhoneContainer';
import { useLoaderData } from 'react-router';


const Home = () => {
  const data = useLoaderData()
  console.log(data)

  return (
    <div>
      <Hero></Hero>
      <PhoneContainer phones={data} />
      <h1>hero section</h1>
      <h1>phone section</h1>
    </div>
  );
};

export default Home;