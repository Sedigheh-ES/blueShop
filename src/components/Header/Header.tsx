import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconBox from '../common/icon-box/IconBox'
import Link from 'next/link'
import Logo from '../common/logo/Logo'
import Menu from '../common/menu/Menu'
import Login from '../common/auth/loginBtn/Login'
import Basket from '../common/basket/Basket'
import Search from '../common/search/Search'
import Image from 'next/image'

export default function Header() {
    return (
        <>

            <div className='w-full flex sm:flex-row-reverse lg:flex-row h-[58px] bg-blue_main text-bg_light_green items-center justify-between px-[100px] font-montserrat'>

                <div className='hidden md:flex gap-2.5'>
                    <span>Follow:</span>
                    <ul className='flex flex-row gap-1'>

                        <li> <Image src={'/assets/images/social media/instagarm.png'} alt={'insta'} width={20} height={20} className='cursor-pointer' />
                        </li>
                        <li> <Image src={'/assets/images/social media/twitter.png'} alt={'insta'} width={20} height={20} className='cursor-pointer' />
                        </li>
                        <li>
                            <Image src={'/assets/images/social media/facebook.png'} alt={'insta'} width={20} height={20} className='cursor-pointer' />
                        </li>

                    </ul>
                </div>

                <div className='font-montserrat font-semibold text-[14px] lg:text-[16px] text-center'> Winter is coming! 50% off for new year</div>
                <div className='flex gap-[19px]'>
                    <div className='hidden lg:flex'>
             {/* <Image src={'/assets/images/phone.png'} alt={'insta'} width={15} height={15} className='cursor-pointer' /> */}

                        (+98) 253-1189
                    </div>
                    <div className='hidden lg:flex'>
 {/* <Image src={'/assets/images/mail.png'} alt={'insta'} width={15} height={15} className='cursor-pointer' /> */}

                        pigmentagency@gmail.com
                    </div>
                </div>
            </div>

            {/* Menu header */}
            <div className='flex flex-col gap-8 md:flex-row  justify-between items-center sm:px-[10px] md:px-[100px] py-[30px]'>
                <div><Logo /></div>
                <div><Menu /></div>
                <div className='flex gap-2 '>
                    <div><Login /></div>
                    <div><Basket /></div>
                    <div><Search /></div>
                </div>
            </div>

        </>
    )
}