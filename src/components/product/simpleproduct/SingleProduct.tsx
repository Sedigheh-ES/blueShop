import IconBox from '@/components/common/icon-box/IconBox'
import Image from 'next/image'
import React from 'react'

export default function SingleProduct() {
    return (
        <div className='relative flex flex-col p-[7px] border border-bg_light_green shadow-md rounded-md gap-2'>
            <div className='flex flex-col gap-2'>
                <div><Image src={'/assets/images/image.png'} alt={'img'} width={240} height={240} /></div>
                <div className='font-montserrat text-[12px] text-justify text-dark_header'>Bosch 300 Series SHEM63W55N</div>
            </div>

            <div className='flex flex-row justify-between items-center gap-[5px]'>
                <div className='font-montserrat'>998$<span className='font-montserrat text-[#BEBCBD] line-through text-[12px]'>1200$</span></div>

                <div className='flex items-center text-white bg-blue_main border border-blue_main rounded-md px-1.5 py-1.5 text-[15px] cursor-pointer'>
                    <IconBox icon={'icon-shopping-cart-white'} />
                </div>
            </div>
        </div>
    )
}
