import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconBox from '../common/icon-box/IconBox'
import Link from 'next/link'
import Logo from '../common/logo/Logo'
import Menu from '../common/menu/Menu'
import Login from '../common/auth/loginBtn/Login'
import Basket from '../common/basket/Basket'
import Search from '../common/search/Search'

export default function Header() {
    return (
        <>

            <div className='w-full flex sm:flex-row-reverse lg:flex-row h-[58px] bg-blue_main text-bg_light_green items-center justify-between pl-[100px] pr-[98px] font-montserrat'>

                <div className='hidden md:flex gap-2.5'>                 
                    <span>Follow:</span>
                    <ul>                  
                        <IconBox icon={'icon-social-facebook'} link={'#'} iconClassName={'px-2 py-1 bg-bg_light_green text-dark_header border border-bg_light_green rounded-full cursor-pointer ml-1'}/>
                        <IconBox icon={'icon-instagram'} link={'#'}  iconClassName={'px-2 py-1 bg-bg_light_green text-dark_header border border-bg_light_green rounded-full cursor-pointer ml-1'}/>
                        <IconBox icon={'icon-social-twitter-circular'} link={'#'}  iconClassName={'px-2 py-1 bg-bg_light_green text-dark_header border border-bg_light_green rounded-full cursor-pointer ml-1'}/>
                    </ul>              
                </div>

                <div className='font-montserrat font-semibold text-6 text-center'> Winter is coming! 50% off for new year</div>

                <div className='flex gap-[19px]'>
                <div className='hidden lg:flex'>
                    <IconBox icon={'icon-phone'} link={'#'} />
                    (+98) 253-1189
                </div>
                <div className='hidden lg:flex'>
                    <IconBox icon={'icon-envelop'} link={'#'} />
                    pigmentagency@gmail.com
                </div>
                </div>
            </div>

            {/* Menu header */}
            <div className='flex flex-col gap-8 md:flex-row  justify-between items-center pl-[100px] pr-[98px] pt-[30px] pb-[30px]'>
                <div><Logo/></div>
                <div><Menu /></div>
                <div className='flex gap-2 '>
                <div><Login/></div>
                <div><Basket/></div>
                <div><Search/></div>
              </div>
            </div>

        </>
    )
}