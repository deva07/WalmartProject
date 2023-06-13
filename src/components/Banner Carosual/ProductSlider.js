import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ProductSlider = () => {

    const [details, setdetails] = useState({});

    const location = useLocation();

    useEffect(() => {

        setdetails(location.state.item);
        // console.log(location.state.item);

    }, [location]);
    return (
        <div>
            <div style={{ display: 'flex', maxWidth: '1280px', margin: '2rem auto', gap: '5rem' }}>
                <div style={{ width: '40%', position: 'relative' }}>
                    <img style={{ width: '100%', height: '500px', objectFit: 'cover' }}
                        src={details.src} alt="productImg" />
                </div>
                <div className='ProductDescription'>
                    <div>
                        <h2 className='Product-title'>{details.title}</h2>
                        <div className='Product-price'>
                            <p className='Product-oldPrice'>${details.oldPrice}</p>
                            <p className='Product-Newprice'>{details.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            )
}

            export default ProductSlider