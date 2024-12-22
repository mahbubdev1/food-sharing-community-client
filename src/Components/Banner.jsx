import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import banner1 from '../assets/banner3.jpg'
import banner2 from '../assets/banner1.jpg'
import banner3 from '../assets/banner2.jpg'

const Banner = () => {
    return (
        <div>
            <>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        <SwiperSlide>
                            <div className="relative">
                                <img
                                    src={banner1}
                                    alt="Slide 1"
                                    className="w-full h-[700px] object-fill"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
                                    <h2 className="text-3xl md:text-6xl font-bold">Grow Organic</h2>
                                    <p className='sm:w-1/3 mx-auto pt-2 text-lg py-1 text-center'>Welcome To <span>Mahbub</span>, an oasis for all healthy food and organic produce sites, ready to make your Online presentation shine.</p>
                                    <Link to="/allMovies" className="btn mt-4 px-8 py-3 bg-violet-400 text-lg font-bold rounded-md hover:bg-violet-500">View More</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative">
                                <img
                                    src={banner2}
                                    alt="Slide 1"
                                    className="w-full h-[700px] object-fill"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
                                    <h2 className="text-3xl md:text-6xl font-bold">Grow Way</h2>
                                    <p className='sm:w-1/3 mx-auto pt-2 text-base py-1 text-center'>Welcome To <span>Mahbub</span>, an oasis for all healthy food and organic produce sites, ready to make your Online presentation shine.</p>
                                    <Link to="/allMovies" className="btn mt-4 px-8 py-3 bg-violet-400 text-base font-bold rounded-md hover:bg-violet-500">View More</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative">
                                <img
                                    src={banner3}
                                    alt="Slide 1"
                                    className="w-full h-[700px] object-fill"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
                                    <h2 className="text-3xl md:text-6xl font-bold">Live Healthy</h2>
                                    <p className='sm:w-1/3 mx-auto pt-2 text-base py-1 text-center'>Welcome To <span>Mahbub</span>, an oasis for all healthy food and organic produce sites, ready to make your Online presentation shine.</p>
                                    <Link to="/allMovies" className="btn mt-4 px-8 py-3 bg-violet-400 text-lg font-bold rounded-md hover:bg-violet-500">View More</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </Swiper>
            </>
        </div>
    );
};

export default Banner;