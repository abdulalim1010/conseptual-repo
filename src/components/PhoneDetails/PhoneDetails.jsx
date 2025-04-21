import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const PhoneDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const singlePhone = data.find(phone => phone.id === parseInt(id));
  console.log(singlePhone);

  if (!singlePhone) {
    return <p>Phone not found</p>;
  }

  const { name, image,price,description,  model, brand } = singlePhone;

  return (
    <div>
      <h1>{name}</h1>
      <img className='rounded' src={image} alt={name} />
      <p>{brand}</p>
      <h2>{model}</h2>
      <p>{description}</p>
      <div>
  {Object.entries(price).map(([storage, value]) => (
    <button key={storage} style={{ margin: "5px" }}>
      {storage}: {value}
    </button>
  ))}
</div>


  
    </div>
  );
};

export default PhoneDetails;
