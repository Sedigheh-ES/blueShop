import React, { useState } from 'react'
import Menu from '../menu/Menu'
import IconBox from '../icon-box/IconBox'

const menuButton = () => {
  console.log('menu clicked');
}

export default function Logo() {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  const menuBtnClickHandler = (e) => {
    e.stopPropagation();
    setShowMobileMenu((prevState) => !prevState);
  };

   const menuBodyClickHandler = (e) => {
     e.stopPropagation();
  }
  return (
    <>   
    <div className='flex items-center justify-center gap-4 menu-btn' onClick={menuBtnClickHandler} >

      <div className='block lg:hidden menu-btn cursor-pointer'>
        <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 4H25" stroke="#438DB8" stroke-width="2" stroke-linecap="round" />
          <path d="M1 12H25" stroke="#438DB8" stroke-width="2" stroke-linecap="round" />
          <path d="M1 20H25" stroke="#438DB8" stroke-width="2" stroke-linecap="round" />
        </svg>
      </div>

      <div className='text-[36px] text-blue_main font-bold tracking-widest'>Mansoury.</div>

    </div>

        <div  onClick={menuBodyClickHandler} className={`${showMobileMenu? 'right-0 fixed overflow-y-scroll' :'-left-[100%] absolute' }  container bg-stroke_light_green transition-all w-3/5 rounded-tl-[24px] lg:rounded-[0px] lg:w-auto flex  top-0 bottom-0  lg:static flex-col lg:hidden justify-start lg:justify-between items-start pt-[16px] pl-[24px] lg:py-[13px] lg:items-center h-[100vh] bg-white lg:h-[70px] mobile-menu z-50 border-[1px] border-l-blue_main border-t-blue_main border-r-[#FFFFFF] border-b-[#FFFFFF]`}>
     <nav className='flex  md:hidden'>
          <ul className='flex flex-col justify-center items-left gap-[10px] capitalize text-dark_header font-montserrat font-semibold text-[18px] tracking-wide'>
               <li>Home</li>
              <li>Products</li>
              <li>Pages</li>
              <li>About us</li>
              <li>Contact us</li>
          </ul>
      </nav>
        
      </div>
      </>
  )
}
