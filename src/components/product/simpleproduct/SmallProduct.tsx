import IconBox from '@/components/common/icon-box/IconBox'
import React from 'react'
import SingleProduct from './SingleProduct'

export default function SmallProduct() {
  return (
    <div className='flex flex-row items-center justify-between mt-[60px]'>
      <div className='flex flex-col w-[250px] gap-[22px]'> 
        <h2 className='text-dark_header font-bold text-[20px]'>Discover Hot Deals for Your Home!</h2>
        <div className='divide-solid'></div>
        <p className='text-[#8C8C8C]  font-montserrat text-[12px] text-justify'>In Mansoury, daily you can find the highest discounts across all categories and products available on the website.</p>
        <a href="#" className='border border-blue_main px-5 py-2 bg-blue_main rounded-md text-bg_light_green flex items-center gap-[56px] '>
         <span> Show All Products</span>
          <IconBox icon={'icon-angle-small-right'} />
        </a>
      </div>
      
      <div>
        <SingleProduct/>
        
      </div>
    
    </div>
  )
}
