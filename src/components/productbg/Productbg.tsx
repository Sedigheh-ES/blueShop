import React from 'react'

export default function Productbg() {
  return (
      <div style={{ backgroundImage: `url('/assets/images/Products.png')` }} className='relative bg-[url(/assets/images/Products.png) bg-cover bg-no-repeat max-w-full  h-[345px]'>
          
           <div className='absolute text-bg_light_green top-0 right-[20%] bottom-0 flex flex-col items-start justify-center bg-dark_charcoal/35 p-[14px]'>
                                  
                                    <span className='font-lato font-bold text-[24px]' >Mansoury.Steel 10-Piece Cookware Set</span>
                                    <span className='font-lato font-bold text-xl'> button</span>
          </div>
    </div>
  )
}
