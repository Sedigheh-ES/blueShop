import React from 'react'
import IconBox from '../../icon-box/IconBox'

export default function Login() {
  return (
      <div className='flex gap-2 pl-3 pr-3 pt-[7px] pb-[7px] border border-[#B4B4B4] text-dark_header rounded-md '>
          <IconBox icon={'icon-user'} link={'#'} />
         <span>Login/register</span> 
      </div>
  )
}
