
import { useEffect, useState } from 'react';
import PhoneCart from '../PhoneCart/PhoneCart';


const PhoneContainer = ({ phones }) => {
  const [displayPhones, setDiaplayPhones] = useState([false])
  const [showAll,setShowAll]=useState([])
  useEffect(() => {
    if( showAll){
     setDiaplayPhones(phones)
    }
    else {
       setDiaplayPhones(phones.slice(0,6))
    }
  },

[showAll,phones]



)
  
console.log(phones)
  return (
    <div className='py-12'>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7 mb-8'>
      
        {
          displayPhones.map(phone => (<PhoneCart key={phone.id} phone={phone}></PhoneCart>))
          
}

        <button onClick={() => {
          
            setShowAll(prv => !prv)
          
          if(showAll) window.scrollTo(0 ,0)
        }

        } className='btn btn-praimary  '>            { showAll ?'showless':'showAll'}

        </button>
    </div>
    </div>
  );
};

export default PhoneContainer;