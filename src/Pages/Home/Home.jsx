import React, { useState } from 'react';
import Hero from '../../components/Hero/Hero';
import PhoneContainer from '../../components/Phone/PhoneContainer';
import { useLoaderData } from 'react-router';

const Home = () => {
  const data = useLoaderData();
  const [phones, setPhones] = useState(data);

  const handleSearch = (e, text) => {
    e.preventDefault();
    const searchedPhones = data.filter(phone =>
      phone?.name?.toLowerCase().includes(text.toLowerCase()) ||
      phone?.brand?.toLowerCase().includes(text.toLowerCase())
    );
    setPhones(searchedPhones);
  };

  return (
    <div>
      <Hero handleSearch={handleSearch} />
      <PhoneContainer phones={phones} />
    </div>
  );
};

export default Home;
