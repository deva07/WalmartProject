import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './MultiSlider.css';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { products } from '../../Data';
import ProductsCard from './ProductsCard';
import { ToastContainer } from 'react-toastify';

let slidesToShow = 5;

const PreviousBtn = (props) => {
    const { className, onClick, currentSlide } = props;
    return (
        <>
            {currentSlide !== 0 && (
                <div className={className} onClick={onClick}>
                    <ArrowBackIos style={{ color: 'blue' }} />
                </div>
            )}
        </>
    )
}

const NextBtn = (props) => {
    const { className, onClick, slideCount, currentSlide } = props
    return (
        <>
            {currentSlide !== slideCount - slidesToShow && (
                <div className={className} onClick={onClick}>
                    <ArrowForwardIos style={{ color: 'blue' }} />
                </div>
            )}
        </>
    )
}

const MultiSilder = () => {
    return (
        <>
            <div>
                <h3 style={{ margin: '30px' }}> Continue your shopping for Toys & Dog Food Products</h3>
                <Slider
                    prevArrow={<PreviousBtn />}
                    nextArrow={<NextBtn />}
                    slidesToShow={slidesToShow}
                    slidesToScroll={4}
                    infinite={false}
                >
                    {
                        products.map((list) => (
                            <ProductsCard product={list} key={list.id} />
                        ))
                    }

                </Slider>
                <ToastContainer
                    position='top-left'
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    trl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme='dark'
                />
            </div>
        </>
    )
}

// const Card = ({ product }) => {
//     return (
//         <div>
//             <img src={product.src} alt='' style={{ width: '100%', height: '170px', objectFit: 'contain',
//              marginBottom: '10px',paddingTop:'5px' }}
//                 className='Multi-image' />
//             <p style={{paddingBottom:'16px',color: 'green', fontWeight: 'bolder',
//             textAlign:'center'}}> {product.Price}</p>
//             <p style={{fontSize: '16px',position:'absolute',
//             paddingLeft:'40px',bottom:'26%'}}> {product.title} </p>
//             <p style={{padding:'10px 0px 0px 45px'}}>{product.desc}</p>
//             <button style={
//                 {
//                     background: '#0071dc',color: 'white',marginLeft:'32%', padding: '10px',marginTop:'8px',
//                     marginBottom:'10px',
//                     fontSize:'18px',
//                     border: 'none',
//                     cursor:'pointer'
//                 }
//             }> Option </button>
//         </div>
//     )
// }

export default MultiSilder;