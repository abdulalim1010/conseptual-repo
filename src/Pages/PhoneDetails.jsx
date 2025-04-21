import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const PhoneDetails = () => {
  const data = useLoaderData()
  const { id } = useParams()
  const singlePhone=data.find(phone=>phone.id===parseInt(id)) 
  console.log(singlePhone)
 const[name,image,price,model,brand,camra_inf]=singlePhone
  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt="" />
      <p>{brand}</p>
      <h2>{model}</h2>
      <p>{price}</p>
      <h4>{camra_inf}</h4>
    </div>
  );
};

export default PhoneDetails;