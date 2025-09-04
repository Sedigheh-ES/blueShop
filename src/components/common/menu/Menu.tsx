import React from 'react'

export default function Menu() {
  return (
      <nav className='hidden lg:flex'>
          <ul className='flex justify-center items-center gap-[10px] capitalize text-dark_header font-montserrat font-semibold text-[18px] tracking-wide'>
               <li>Home</li>
              <li>Products</li>
              <li>Pages</li>
              <li>About us</li>
              <li>Contact us</li>
          </ul>
      </nav>
          
  )
}
