import IconBox from '@/components/common/icon-box/IconBox'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import { smallSlider } from '@/mock/simpleSmallSlider'
import Image from 'next/image'
import { ProductType } from '@/types/Product'
import { useDispatch, useSelector } from 'react-redux'
import { basketSlice } from '@/pages/store/reducer'





interface Props {
  nextEl?: string;
  prevEl?: string;
  
}
interface Products{
product: ProductType
}

export default function SmallProduct({ nextEl, prevEl }: Props, { product }: Products) {
  
  const dispatch = useDispatch();
  const cartItems = useSelector<Array<number>>((state) => state.cartItems);

  
  const addToCartHandler = (productId: Products) => {
    // dispatch(addtoCardAction(productId));
    dispatch(basketSlice.actions.addToCart(productId,1));
   
  }

  const removeFromCartHandler = (productId: Products) => {
    // dispatch(removeFromCardAction(productId));
    dispatch(basketSlice.actions.removeFromCart(productId))
  
  }


  return (

    <Swiper
      spaceBetween={31}
      slidesPerView={4}
      autoplay={{
        delay: 3000,
        pauseOnMouseEnter: true,
      }}

      modules={[Autoplay, Navigation]}
      navigation={{
        nextEl: nextEl,
        prevEl: prevEl
      }}

      breakpoints={
        {
          375: {
            slidesPerView: 1.5,
            spaceBetween: 18
          },
          768: {
            slidesPerView: 1.5,
            spaceBetween: 18
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 18
          },
          1280: {
            slidesPerView: 4,
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
                <div className='flex flex-col md:flex md:flex-col p-[7px] border border-bg_light_green shadow-md rounded-md gap-2'>
                  <div className=' flex flex-col items-center justify-center gap-2'>
                    <div className=' absolute bg-red_badge rounded-full py-2 px-1 left-1 top-1 text-bg_light_green text-[12px]'>40%</div>
                    <div className=' absolute bg-[#ffffff] rounded-full py-1 px-2 right-1 top-1 text-dark_header cursor-pointer'>
                      <IconBox icon={'icon-heart'} />
                    </div>
                    <Image src={item.image} alt={'img'} width={240} height={240} className='flex items-center' />
                    <div className='font-montserrat text-[12px] text-dark_header tracking-wide'>{item.title}</div>
                  </div>

                  <div className='flex flex-row justify-between items-center gap-[5px]'>
                    <div className='font-montserrat'>{item.price}<span className='font-montserrat text-[#BEBCBD] line-through text-[12px]'>{item.sale_price}</span></div>

                    {
                      cartItems.includes(item.id) ?
                        <div className='flex items-center text-white bg-red_badge border border-blue_main rounded-md px-1.5 py-1.5 text-[15px] cursor-pointer' onClick={() => removeFromCartHandler(item.id)}>
                      <IconBox icon={'icon-shopping-cart-white'} />
                        </div>
                        :
                        <div className='flex items-center text-white bg-blue_main border border-blue_main rounded-md px-1.5 py-1.5 text-[15px] cursor-pointer' onClick={() => addToCartHandler(item.id)}>
                      <IconBox icon={'icon-shopping-cart-white'} />
                    </div>
                    }

                    
                   
                  
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
