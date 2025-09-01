import Header from "@/components/Header/Header";
import Banner from "@/components/bannerSlider/Banner";
import IconBox from "@/components/common/icon-box/IconBox";
import ListOfProduct from "@/components/product/listofProduct/ListOfProduct";
import MobileList from "@/components/product/listofProduct/MobileList";

import MansoryImage from "@/components/product/mansoryGallery/MansoryImage";
import SmallProduct from "@/components/product/simpleproduct/SmallProduct";
import Productbg from "@/components/productbg/Productbg";
import Section from "@/components/section/Section";
import { productList } from "@/mock/productList";





export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Section>
        <div className='flex flex-row  sm:gap-3 items-center justify-between gap-5 mt-[60px]'>
          <div className="flex flex-col">
            <div className='flex flex-col gap-[22px] mr-6 w-[240px]'>
              <h2 className='text-dark_header font-bold text-[20px]'>Discover Hot Deals for Your Home!</h2>
              <div className="divide-y-8 divide-x-2  divide-blue_main divide-solid w-[60px]">
                <div></div>
                <div></div>
              </div>
              <p className='text-[#8C8C8C] font-montserrat text-[12px] text-justify'>In Mansoury, daily you can find the highest discounts across all categories and products available on the website.</p>
            </div>
            <a href="#" className='border border-blue_main px-5 py-2 bg-blue_main rounded-md text-bg_light_green flex items-center justify-between gap-[56px] mt-5 '>
              <span className="text-[12px]">Show All Products</span>
              <IconBox icon={'icon-angle-small-right'} />
            </a>
          </div>
          <SmallProduct />
        </div>
      </Section>


      <Section>
        <MansoryImage />
      </Section>


      <Section>
        <div className='flex flex-col sm:gap-3 items-center justify-center gap-5 mt-[60px]'>
          <div className=" text-[24px] md:text-head4 text-dark_header font-bold">Products You May Like</div>
          <div className="divide-y-8  divide-blue_main divide-solid w-[60px] mb-[34px]">
            <div></div>
            <div></div>
          </div>
          <ListOfProduct />
        </div>
        <MobileList nextEl={'.swiper-nav-right2'} prevEl={'.swiper-nav-left2'} data={productList } />
      </Section>

     <div className="mt-[60px]">
        <Productbg/>
  </div>

    </>

  )
}
