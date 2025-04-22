import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Button from '../Ui/Button';
<button className="btn btn-dash btn-secondary">Secondary</button>
import { FaBookmark } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { addFavorite } from '../../utiles';


const PhoneDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const singlePhone = data.find(phone => phone.id === parseInt(id));
  console.log(singlePhone);

  if (!singlePhone) {
    return <p>Phone not found</p>;
  }

  const { name, image, price, description, model, brand } = singlePhone;
  const handleFavorite=()=> {
    addFavorite(singlePhone)
}
  return (
    <div className='border-1 bg-green-100 p-6'>
      <h1>{name}</h1>
      <img className='rounded' src={image} alt={name} />
      <p>{brand}</p>
      <h2>{model}</h2>
      
        <p>{description}</p>
      <div className=' justify-center  flex gap-34'>
        <div><Button label={<FaBookmark />} /></div>
        
    <div>  <Button onClick={handleFavorite}  label={<FaShoppingCart />}/></div>
      </div>
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
