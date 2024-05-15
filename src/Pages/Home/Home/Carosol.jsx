
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img1 from '../../../assets/pexels-vlada-karpovich-4050319.jpg';
import img2 from '../../../assets/pexels-karolina-grabowska-4491461.jpg';
import img3 from '../../../assets/pexels-julia-m-cameron-4145354.jpg';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from '../Slide';

export default function Carosol() {
    return (
        <div className=''>
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
                <SwiperSlide><Slide image={img2} text='Education is the best key success in life'></Slide></SwiperSlide>
                <SwiperSlide><Slide image={img3} text='Education is the best key success in life'></Slide></SwiperSlide>
            </Swiper>
        </div>
    );
}