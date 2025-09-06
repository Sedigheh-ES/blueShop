import React from 'react'
import Menu from '../menu/Menu'
import IconBox from '../icon-box/IconBox'

export default function Logo() {
  return (
    <div className='flex items-center justify-center gap-4 menu-btn'>

      <div className='block md:hidden menu-btn cursor-pointer  '>
        <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 4H25" stroke="#438DB8" stroke-width="2" stroke-linecap="round" />
          <path d="M1 12H25" stroke="#438DB8" stroke-width="2" stroke-linecap="round" />
          <path d="M1 20H25" stroke="#438DB8" stroke-width="2" stroke-linecap="round" />
        </svg>
      </div>

      <div className='text-[36px] text-blue_main font-bold tracking-widest'>Mansoury.</div>

    </div>
  )
}
