import React from 'react';
import { Link } from 'react-router';

const PhoneCart = ({ phone }) => {
  const {name,description,image,id}=phone ||{}
  return (
    <div className="card bg-base-100  shadow-sm">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
        <h2 className="card-title">{ name}</h2>
        <p>{ description}</p>
    <div className="card-actions justify-end">
    <Link to={`/phones-details/${id}`}>  <button className="btn btn-primary">Vew Details</button></Link>
    </div>
  </div>
</div>
  );
};

export default PhoneCart;