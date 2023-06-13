import React from 'react';
import './ProductCard.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/petSlice';
import { toast } from 'react-toastify';

const ProductsCard = ({ product }) => {

  const dispatch = useDispatch();

  const navigate = useNavigate();   //Navigate using one page to move another page in title bar

  const _id = product.Title;          //Product title assing the _id state.

  const idString = (_id) => {
    return String(_id).toLowerCase();  // _id to convert string character to all Lower Case.
  }
  const rootId = idString(_id);   //Product title string Store the rootId.

  // console.log(rootId);

  const handleDetails = () => {         //Onclick function
    navigate(`/Product/${rootId}`,    //Navigate the Product page to product title.
      {                     // pass the object.
        state: {
          list: product,            //passing object product to list.
        },
      });
  }

  return (
    <div>
      <div className='product-details' onClick={handleDetails}>
        <img src={product.image} alt='' className='product-image' />
      </div>
      <div>
        <div>
          <h4 className='product-price'> ${product.Price}</h4>
        </div>
        <div>
          <h4>{product.Details}</h4>
          <h4 style={{ paddingLeft: '10px' }}>{product.Description}</h4>
        </div>
        <div>
          <button className='product-btn'
            onClick={() => dispatch(
              addToCart({
                _id: product.id,
                Title: product.Title,
                image: product.image,
                Price: product.Price,
                quantity: 1,
                Details: product.Details,
              })
            ) & toast.success(`${product.Title} is added`)
            }> add to cart </button>
        </div>
      </div>
    </div>
  )
}

export default ProductsCard