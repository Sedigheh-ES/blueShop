import { mansoryGalleryThree, mansoryGalleryTwo } from '@/mock/mansoryGallery';
import Image from 'next/image';
import React from 'react'

export default function MansoryImage() {
    return (
        <>
            <div className='flex md:flex-row items-center justify-center gap-4'>
                {
                    mansoryGalleryThree.map((item, index) => {
                        return (
                            <div className='relative flex flex-col gap-[22px]'>
                                <Image src={item.image} alt={'image'} width={400} height={345} />

                                <div className='absolute text-bg_light_green top-[30%] right-0 flex flex-col items-start justify-center bg-dark_charcoal/35 p-[14px] rounded-tl-md rounded-bl-md h-[93px]'>
                                    <span className='text-left text-[12px] '>{item.badge}</span>
                                    <span className='font-lato font-bold text-xl' >{item.title}</span>
                                    <span className='font-lato font-bold text-xl'>{item.brand}</span>
                                </div>

                            </div>
                        
                        )
                    })
                }

            </div>

            <div className='flex  md:flex-row gap-4 mt-[22px]'>
                {
                    mansoryGalleryTwo.map((item, index) => {
                        return (
                            <div className='relative flex flex-col gap-[27px]'>
                                <Image src={item.image} alt={'image'} width={600} height={345} />
                                <div className='absolute text-bg_light_green right-0 top-[50%] flex flex-col items-start justify-center  bg-dark_charcoal/35 p-[17px]  rounded-tl-md rounded-bl-md h-[93px]'>
                                    <span className='text-left text-[12px] '>{item.badge}</span>
                                    <span className='font-lato font-bold text-xl'>{item.title}</span>
                                    <span className='font-lato font-bold text-xl'>{item.brand}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </>
    )
}
