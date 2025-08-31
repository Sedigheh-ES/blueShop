import IconBox from '@/components/common/icon-box/IconBox'
import { smallSlider } from '@/mock/simpleSmallSlider';
import { ProductType } from '@/types/Product';
import Image from 'next/image'
import React from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface Props {
    data: Array<ProductType>;
}

export default function SingleProduct() {
    return (
        
            <div className='flex flex-row gap-3'>
                {
                    smallSlider.map((item, index) => {
                        return (
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
                    
                        );

                    })

                } 
            </div>


            )
            
}
