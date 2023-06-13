import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './MultiCarosual.css';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { LivenProduct } from '../../../Data';
// import MultiCarosualProduct from './MultiCarosualProduct';

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

const MultiCarousal = () => {

    return (
        <>
            <div>
                <h3 style={{ margin: '30px' }}> Liven up your space </h3>
                <Slider
                    prevArrow={<PreviousBtn />}
                    nextArrow={<NextBtn />}
                    slidesToShow={slidesToShow}
                    slidesToScroll={4}
                    infinite={false}
                >
                    {
                        LivenProduct.map((items) => (
                            <Card list={items} key={items.id} />
                        ))
                    }

                </Slider>
            </div>
            <div>
            </div>
        </>
    )
}

const Card = ({ list }) => {
    return (
        <div>
            <img src={list.src} alt='' className='Carosual-Image' />
            <p style={{
                paddingBottom: '16px', color: 'green', fontWeight: 'bolder',
                textAlign: 'center'
            }}> {list.Price}</p>
            <p style={{
                fontSize: '16px', position: 'absolute',
                paddingLeft: '40px', bottom: '24%'
            }}> {list.title} </p>
            <p style={{ padding: '10px 0px 0px 45px' }}>{list.desc}</p>
            <button className='cart-btn'> Add to Cart </button>
        </div>
    )
}

export default MultiCarousal;