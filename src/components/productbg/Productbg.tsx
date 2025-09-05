import React from 'react'
import IconBox from '../common/icon-box/IconBox'

export default function Productbg() {
    return (
        <div style={{ backgroundImage: `url('/assets/images/Products.png')` }} className='relative  bg-cover bg-no-repeat bg-center h-[345px] p-4 rounded-lg'>
            <div className='absolute text-bg_light_green top-0 right-[20%] bottom-0 flex flex-col items-start justify-center bg-dark_charcoal/35 px-[30px] py-[41px] md:px-[60px] md:py-[81px] gap-[31px] '>
                <span className='font-lato font-bold text-[20px] md:text-[31px] text-justify tracking-wider' >Mansoury.<br/>Steel 10-Piece<br/> Cookware Set</span>
                <span className='font-lato text-[12px] md:text-[14px] border border-b-stroke_light_green px-9 md:px-14 py-2 rounded-md flex items-center justify-center cursor-pointer'>                  
                   <p>Show Products</p> 
                    <IconBox icon={'icon-angle-small-right'} />
                </span>
            </div>
        </div>
    )
}
