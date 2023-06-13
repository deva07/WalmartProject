import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ProductCarosual.css';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { MultiCart } from '../../Data';
import DogImage from '../../assets/Dog.jpg';
import { Link, useNavigate } from 'react-router-dom';


let slidesToShow = 3;

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

const ProductCarosual = () => {

    return (
        <>
            <div style={{ width: '60%', float: 'left', marginTop: '30px' }}>
                <h3 style={{
                    marginBottom: '10px', paddingLeft: '30px', fontWeight: 'bold',
                    letterSpacing: '1px'
                }}> Continue your shopping </h3>
                <Slider
                    prevArrow={<PreviousBtn />}
                    nextArrow={<NextBtn />}
                    slidesToShow={slidesToShow}
                    slidesToScroll={3}
                    infinite={false}
                >
                    {
                        MultiCart.map((item) => (
                            <Card item={item} key={item.id} />
                        ))
                    }

                </Slider>
            </div>
            <div style={{ width: '40%', float: 'right', marginTop: '35px', height: '330px' }}>
                <Link to='DogProduct' style={{ textDecoration: 'none' }}>
                    <img src={DogImage} alt=''
                        style={
                            {
                                width: '100%',
                                height: '330px',
                            }} />
                    <p style={
                        {
                            position: 'relative',
                            top: '-100%',
                            paddingLeft: '20px',
                            fontFamily: 'Arial Black', color: 'white',
                            letterSpacing: '2px', fontSize: '25px'
                        }
                    }>
                        Fur-iends forever </p>

                    <button style={
                        {
                            position: 'relative',
                            top: '-90%', marginLeft: '30px', padding: '5px 10px', borderRadius: '9999px',
                            background: 'white', fontSize: '17px', border: 'none', cursor: 'pointer'
                        }
                    }> Shop Now</button></Link>

            </div>
        </>
    )
}

const Card = ({ item }) => {

    const navigate = useNavigate();
    const _id = item.title;
    const rootId = _id;

    const handleDetails = () => {
        navigate(`/ProductSlider/${rootId}`, {
            state: {  //state passing
                item: MultiCart,  //product of items and path
            }
        })
    }
    return (
        <div onClick={handleDetails} style={{ textAlign: 'center', cursor: 'pointer' }}>
            <img src={item.src} alt='' style={{
                width: '100%', height: '170px',
                objectFit: 'contain', marginBottom: '5px'
            }}
                className='Multi-image' />
            <p style={{ padding: '3px' }}> {item.description}</p>
            <p style={{ color: 'green', fontSize: '18px', fontWeight: 'bolder', padding: '3px' }}> {item.price} </p>
            <button style={
                {
                    background: '#0071dc', color: 'white', padding: '10px', fontSize: '16px', margin: '15px',
                    border: 'none', borderRadius: '30px'
                }
            }> Option </button>
        </div>
    )
}

export default ProductCarosual;