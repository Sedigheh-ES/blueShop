import { bannerSlider } from '@/mock/bannerSlider';
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Autoplay, Pagination } from "swiper/modules";
import 'swiper/css/pagination';
import Image from 'next/image';

interface props{}
export default function Banner({}:props) {
    return ( 
        <Swiper
            spaceBetween={20}
            slidesPerView={1}
            autoplay={true}
            modules={[Autoplay,Pagination]}
            pagination={true}
          

        
        >
            {
                bannerSlider.map((item, index) => {
                    return (
                     
                       <SwiperSlide key={index}>
                            <div style={{ backgroundImage: `url(${item.image})` }} className='relative flex flex-row justify-center items-center h-[596px] w-full bg-no-repeat bg-cover'>
                                    <div className='absolute top-[15%]  '>
                                    <h3 className='font-lato font-bold text-[28px] text-bg_light_green tracking-wider px-4 text-center'>{item.title}</h3>
                                    </div>
                            </div>
                        </SwiperSlide>

                    )
                })
            }


        </Swiper>
    )
            
}
