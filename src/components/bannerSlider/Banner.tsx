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
                            <div style={{ backgroundImage: `url(${item.image})` }} className='relative flex flex-row h-[596px] w-full bg-no-repeat bg-cover'>
                                <h3 className='absolute top-[51px] left-[46%] translate-x-[-50%] translate-y-[-50%] font-lato font-bold text-[28px] text-bg_light_green'>{item.title }</h3>
                            </div>
                        </SwiperSlide>

                    )
                })
            }


        </Swiper>
    )
            
}
