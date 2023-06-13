import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const DescriptionProduct = () => {

  const [details, setdetails] = useState({});

  const Location = useLocation();
  
  useEffect(() =>
  {
    setdetails(Location.state.item);
  }, [Location]);

  return (
    <div>
      <div>
          <div>
            <img src={details.src} alt="" />
          </div>
      </div>
    </div>
  )
}

export default DescriptionProduct