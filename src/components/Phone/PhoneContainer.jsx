import React from 'react';
import PhoneCart from '../PhoneCart/PhoneCart';


const PhoneContainer = ({phones}) => {
  
console.log(phones)
  return (
    <div className='py-12'>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7 mb-8'>
      
        {
             phones.map(phone=>(<PhoneCart key={phone.id} phone={phone}></PhoneCart>))
}

        <button>show all</button>
    </div>
    </div>
  );
};

export default PhoneContainer;