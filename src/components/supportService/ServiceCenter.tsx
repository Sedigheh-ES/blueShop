import React from "react";
import IconBox from "../common/icon-box/IconBox";
import Image from "next/image";

export default function ServiceCenter() {
  return (
    <div className="relative sm:grid sm:grid-cols-1 sm:justify-center md:grid md:grid-cols-2 md:gap-5  lg:flex gap-2 items-center md:justify-between  border-b-2 border-b-dark_header/15 rounded-md py-[30px]">
      <div className="flex flex-row items-center justify-center font-montserra">
        <div>
            <Image src={'/assets/images/user.png'} alt={'user icon'} width={50} height={50}  />
        </div>
        <div className="flex flex-col p-4 items-start">
          <div className="text-[16px] font-bold tracking-widest md:tracking-wide">Online Support</div>
          <div className="text-[12px] tracking-widest md:tracking-wide">Dedicated Support Team</div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center font-montserra">
        <div className="flex items-center">            
           <Image src={'/assets/images/truck.png'} alt={'user icon'} width={50} height={50}  />
        </div>
        
        <div className="flex flex-col p-4 items-start ">
          <div className="text-[16px] font-bold tracking-widest md:tracking-wide">Free Shipping</div>
          <div className="text-[12px] tracking-widest md:tracking-wide">Purchases Over $100</div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center font-montserra">
        <div>
           <Image src={'/assets/images/Icon.png'} alt={'user icon'} width={50} height={50}  />
        </div>

        <div className="flex flex-col p-4 items-start">
          <div className="text-[15px] font-bold tracking-widest md:tracking-wide">Timeless Shopping</div>
          <div className="text-[12px] tracking-widest md:tracking-wide">24/7 Purchasing</div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center font-montserra">
        <div>
            <Image src={'/assets/images/free.png'} alt={'user icon'} width={50} height={50}  />
        </div>

        <div className="flex flex-col p-4 items-start">
          <div className="text-[16px] font-bold tracking-wider md:tracking-wide">Product Returns</div>
          <div className="text-[12px] tracking-wider md:tracking-wide">No-Questions-Asked Returns</div>
        </div>
      </div>
    </div>
  );
}
