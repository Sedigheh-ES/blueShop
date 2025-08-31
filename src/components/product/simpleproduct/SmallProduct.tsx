import IconBox from '@/components/common/icon-box/IconBox'
import React from 'react'
import SingleProduct from './SingleProduct'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import { smallSlider } from '@/mock/simpleSmallSlider'
import Image from 'next/image'

interface Props { 

  nextEl?: string;
  prevEl?:string
}

export default function SmallProduct({nextEl,prevEl}: Props) {
  return (
   
     <Swiper
      spaceBetween={31}
      slidesPerView={4}
      autoplay={true}
     
      centeredSlides={true}
      modules={[Autoplay, Navigation]}
      navigation={{
              
              nextEl:nextEl,
              prevEl:prevEl

      }}

      breakpoints={
        {
          375: {
            slidesPerView: 1,
            spaceBetween: 18
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 18
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 22
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 24
          }
        }
      }

    >
  
      <div className='relative flex flex-row gap-[38px]'>
        
        {
           
                    smallSlider.map((item, index) => {
                      return (
                        
                        <SwiperSlide key={index}>
                          
                          <div className='relative flex flex-col p-[7px] border border-bg_light_green shadow-md rounded-md gap-2'>
                           
                                    <div className='flex flex-col gap-2'>
                                        <div><Image src={item.image} alt={'img'} width={240} height={240} /></div>
                                        <div className='font-montserrat text-[12px] text-dark_header'>{item.title}</div>
                                    </div>

                                    <div className='flex flex-row justify-between items-center gap-[5px]'>
                                        <div className='font-montserrat'>{item.price}<span className='font-montserrat text-[#BEBCBD] line-through text-[12px]'>{item.sale_price}</span></div>

                                        <div className='flex items-center text-white bg-blue_main border border-blue_main rounded-md px-1.5 py-1.5 text-[15px] cursor-pointer'>
                                            <IconBox icon={'icon-shopping-cart-white'} />
                                        </div>
                                    </div>
                          </div>
                           
                        </SwiperSlide>
                       
                        );
 
                    })

        } 
        <div>prev</div>
            </div>

        </Swiper>
       
  
    

  )
}
