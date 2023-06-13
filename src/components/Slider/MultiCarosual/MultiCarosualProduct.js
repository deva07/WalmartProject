// import React from 'react';
// import './MultiCarosualProduct.css';
// import { useNavigate } from 'react-router-dom';
// // import { useDispatch } from 'react-redux';
// // import { addToCart } from '../../redux/petSlice';
// // import { toast } from 'react-toastify';

// const MultiCarosualProduct = ({ list }) => {

// //   const dispatch = useDispatch();

//   const navigate = useNavigate();

//   const _id = list.Title;         

//   const idString = (_id) => {
//     return String(_id).toLowerCase();  
//   }
//   const rootId = idString(_id);   

//   // console.log(rootId);

//   const handleDetails = () => {       
//     navigate(`/ListDetails/${rootId}`,   
//       {                     
//         state: {
//           list: product,            
//         },
//       });
//   }

//   return (
//     <div>
//       <div className='product-details' onClick={handleDetails}>
//         <img src={product.image} alt='' className='product-image' />
//       </div>
//       <div>
//         <div>
//           <h4 className='product-price'> ${product.Price}</h4>
//         </div>
//         <div>
//           <h4>{product.Details}</h4>
//           <h4 style={{ paddingLeft: '10px' }}>{product.Description}</h4>
//         </div>
//         <div>
//           <button className='product-btn'> add to cart </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default MultiCarosualProduct