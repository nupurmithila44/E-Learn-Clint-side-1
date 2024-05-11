
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img1 from '../../../assets/ass1.jpg';
import img2 from '../../../assets/ass2.jpg';
import img3 from '../../../assets/ass37.jpg';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from '../Slide';

export default function Carosol() {
    return (
        <div className=' py-10'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><Slide image={img1} text='Education is the best key success in life'></Slide></SwiperSlide>
                <SwiperSlide><Slide image={img2}  text='Education is the best key success in life'></Slide></SwiperSlide>
                <SwiperSlide><Slide image={img3}  text='Education is the best key success in life'></Slide></SwiperSlide>   
            </Swiper>
        </div>
    );
}