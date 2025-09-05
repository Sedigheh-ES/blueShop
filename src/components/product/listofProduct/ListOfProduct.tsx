import IconBox from '@/components/common/icon-box/IconBox';
import { productList } from '@/mock/productList';
import Image from 'next/image';
import React from 'react'

export default function ListOfProduct() {
  return (
    <div className='grid grid-cols-5 gap-3'>
      {
        productList.map((item, index) => {
          return (
            <div className='relative hidden md:flex md:flex-col p-[7px] border border-bg_light_green shadow-md rounded-md'>
              <div className='flex flex-col gap-2'>
                <div className='absolute bg-red_badge rounded-full py-2 px-1   left-2.5 top-2.5 text-bg_light_green text-[12px]'>40%</div>
                <div className='absolute bg-[#ffffff] rounded-full py-1 px-2  right-2.5 top-2.5 text-dark_header cursor-pointer'>
                  <IconBox icon={'icon-heart'} />
                </div>
                <Image src={item.image} alt={'img'} width={240} height={240} />
                <div className='font-montserrat text-[12px] text-dark_header tracking-wide'>{item.title}</div>
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
