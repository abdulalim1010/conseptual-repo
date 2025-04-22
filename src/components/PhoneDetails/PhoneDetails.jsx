import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Button from '../Ui/Button';
import { FaBookmark, FaShoppingCart } from "react-icons/fa";
import { addFavorite } from '../../utiles';

const PhoneDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const singlePhone = data.find(phone => phone.id === parseInt(id));

  if (!singlePhone) {
    return <p>Phone not found</p>;
  }

  const { name, image, price, description, model, brand } = singlePhone;

  const handleFavorite = () => {
    addFavorite(singlePhone);
  };

  return (
    <div className='border-1 bg-green-100 p-6'>
      <h1>{name}</h1>
      <img className='rounded' src={image} alt={name} />
      <p>{brand}</p>
      <h2>{model}</h2>
      <p>{description}</p>

      <div className='justify-center flex gap-6 mt-4'>
       <Button onClick={handleFavorite}    label={<FaShoppingCart />}></Button>
        <Button   label={<FaShoppingCart />} />
      </div>

      <div className="mt-4">
        {Object.entries(price).map(([storage, value]) => (
          <button key={storage} className="bg-white text-black border rounded px-3 py-1 mr-2 mb-2 hover:bg-gray-200">
            {storage}: {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PhoneDetails;
