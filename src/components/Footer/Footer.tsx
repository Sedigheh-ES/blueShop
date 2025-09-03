import Link from 'next/link'
import React from 'react'
import IconBox from '../common/icon-box/IconBox'
import Image from 'next/image'

export default function Footer() {
  return (
      <footer className='sm:grid sm:grid-cols-1 sm:gap-4 md:grid md:grid-cols-2 md:gap-4 lg:flex items-center justify-between p-[10px]'>
          <div className='flex flex-col gap-2 '> 
             <div className='font-montserrat font-bold text-[20px] align-top'>Stay connected</div>
           <div className=' text-[14px] text-dark_header/75 align-middle'>
              <span>Address: Istanbul, Turkey</span><br/>
              <span>Phone: (+90) 985 98 75</span>           
           </div>
            
             <div className='text-dark_charcoal font-semibold text-[16px] pt-[10px]'>Follow us on social media</div>
           <div className='flex items-center justify-start gap-3 '>
              <Image src={'/assets/images/social media/instagarm.png'} alt={'insta'} width={20} height={20}  />
              <Image src={'/assets/images/social media/twitter.png'} alt={'insta'} width={20} height={20}  />
              <Image src={'/assets/images/social media/linkdin.png'} alt={'insta'} width={20} height={20}  />
              <Image src={'/assets/images/social media/facebook.png'} alt={'insta'} width={20} height={20}  />
              
             </div>
          </div>

          <div>
             <div className='font-montserrat font-bold text-[20px] align-top'>Mansoury.</div>
             <ul className=' text-[14px] text-dark_header/75 align-middle pt-[10px] '>
                <li><Link href={'#'}>About us</Link></li>
                <li><Link href={'#'}>Careers</Link></li>
                <li><Link href={'#'}>Collaborations</Link></li>
                <li><Link href={'#'}>Dashboard</Link></li>
                <li><Link href={'#'}>policies</Link></li>
             </ul>
          </div>

          <div>
             <div className='font-montserrat font-bold text-[20px] leading-6 align-top'>Customer Services</div>
             <ul className=' text-[14px] text-dark_header/75 align-middle pt-[10px]'>
                <li>Rules and Regulations</li>
                <li>Terms of Use</li>
                <li>Return Procedures</li>
                <li>Privacy Policy</li>
                <li>Forums</li>
             </ul>
          </div>

          <div>
             <div className='font-montserrat font-bold text-[20px] leading-6 align-top'>Quick Access</div>
             <ul className=' text-[14px] text-dark_header/75 align-middle pt-[10px]'>
                <li>Contact Us</li>
                <li>Blog</li>
                <li>Returns and refunds</li>
                <li>Track order</li>
                <li>FAQ</li>
             </ul>
          </div>
    </footer>
  )
}
