import React from 'react'
import IconBox from '../common/icon-box/IconBox'

export default function Productbg() {
    return (
        <div style={{ backgroundImage: `url('/assets/images/Products.png')` }} className='relative bg-cover md:bg-contain lg:bg-contain bg-no-repeat bg-center h-[233px] lg:h-[293px] rounded-lg'>
            <div className='absolute text-bg_light_green top-0 right-12 md:right-[20%] px-8 py-6 bottom-0 flex flex-col items-center justify-center bg-dark_charcoal/35 lg:px-12 lg:py-[32px] gap-4 md:gap-[31px]'>
                <span className='font-lato font-bold text-[20px] lg:text-[31px]  tracking-wider text-center' >Mansoury.<br/>Steel 10-Piece<br/> Cookware Set</span>
                <span className='font-lato font-semibold text-[14px] md:text-[14px] border border-b-stroke_light_green px-2.5 py-[6px] md:px-14 md:py-2 rounded-md flex items-center justify-center cursor-pointer'>                  
                   <p>Show Products</p> 
                    <IconBox icon={'icon-angle-small-right'} />
                </span>
            </div>
        </div>
    )
}
 