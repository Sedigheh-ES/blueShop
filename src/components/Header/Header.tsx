import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconBox from '../common/icon-box/IconBox'
import Link from 'next/link'

export default function Header() {
  return (
      <div className='w-full h-[58px] bg-blue_main text-bg_light_green flex items-center justify-between pl-[100px] pr-[98px] font-montserrat'>
          <div className='flex gap-2'>
              <span>Follow:</span>            
              <ul className='flex gap-2.5'>                    
                 <IconBox icon={'icon-social-facebook'} link={'#'}/>
                 <IconBox icon={'icon-instagram'} link={'#'} />
                 <IconBox icon={'icon-social-twitter-circular'} link={'#'} />
              </ul>                     
          </div>
          <div> Winter is coming! 50% off for new year</div>
          <div>
              
              Tell
          </div>
          <div>email</div>
      </div>
  )
}