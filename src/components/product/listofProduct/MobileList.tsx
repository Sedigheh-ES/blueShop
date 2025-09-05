import IconBox from '@/components/common/icon-box/IconBox'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import Image from 'next/image'
import { productList } from '@/mock/productList'
import ListOfProduct from './ListOfProduct'

interface Props {

  nextEl?: string;
  prevEl?: string
}

export default function MobileList({ nextEl, prevEl }: Props) {
  return (

    <Swiper
      spaceBetween={31}
      slidesPerView={4}
      autoplay={true}

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
          744: {
            slidesPerView: 2,
            spaceBetween: 18
          }
        }
      }

    >


      <div className='relative flex flex-row gap-[38px]'>

        {

          productList.map((item, index) => {
            return (
              <SwiperSlide key={index}>

                <div className='relative flex flex-col md:hidden p-[7px] border border-bg_light_green shadow-md rounded-md gap-2'>
                  <div className=' flex flex-col items-center justify-center gap-2'>
                    <div className='absolute bg-red_badge rounded-full py-2 px-1 left-6 top-6 text-bg_light_green text-[12px]'>40%</div>
                    <div className='absolute bg-[#ffffff] rounded-full py-1 px-2 right-6 top-6 text-dark_header cursor-pointer'>
                      <IconBox icon={'icon-heart'} />
                    </div>
                    <Image src={item.image} alt={'img'} width={300} height={300} className='flex items-center bg-contain' />
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


          </div>
          
         
      
    </Swiper>




  )
}
