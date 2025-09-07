import CopyRights from "@/components/Footer/CopyRights";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Banner from "@/components/bannerSlider/Banner";
import IconBox from "@/components/common/icon-box/IconBox";
import ListOfProduct from "@/components/product/listofProduct/ListOfProduct";
import MobileList from "@/components/product/listofProduct/MobileList";

import MansoryImage from "@/components/product/mansoryGallery/MansoryImage";
import SmallProduct from "@/components/product/simpleproduct/SmallProduct";
import Productbg from "@/components/productbg/Productbg";
import Section from "@/components/section/Section";
import ServiceCenter from "@/components/supportService/ServiceCenter";
import { productList } from "@/mock/productList";


export default function Home() {
  return (
    <>
      <Header />
      <Banner />

      <Section>
        <div className='flex flex-col md:flex md:flex-row sm:gap-3  md:items-center justify-center gap-5 mt-[60px]'>
          <div className="flex flex-col basis-60 w-[198px] mmd:[150px] md:w-1/3">
            <div className='flex flex-col gap-[22px] mr-6'>
              <h2 className='text-dark_header font-bold text-[20px] tracking-wide'>Discover Hot Deals for Your Home!</h2>
              <div className="divide-y-8 divide-x-2  divide-blue_main divide-solid w-[60px]">
                <div></div>
                <div></div>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex flex-col text-[#8C8C8C] font-montserrat text-[12px]">
                  <span className="text-justify tracking-wide">
                    In Mansoury, daily you can find the highest discounts across all <span className="text-balance tracking-widest">categories and products available on the website.</span>
                  </span>

                </div>

              </div>
            </div>
            <a href="#" className='border border-blue_main w-200 px-5 py-2 bg-blue_main rounded-md text-bg_light_green flex items-center justify-between gap-[56px] mt-5'>
              <span className="text-[12px]">Show All Products</span>
              <IconBox icon={'icon-angle-small-right'} />
            </a>
          </div>
          <div className="md:flex items-center justify-center gap-3 mb-8 hidden">
            <i className="swiper-nav-left icon-angle-small-left cursor-pointer p-2  text-dark_header hover:text-white text-[40px]"></i>
          </div>
          <div className="w-[300px] md:w-[350px] mmd:w-[500px] lg:w-[850px]">

            <SmallProduct nextEl={".swiper-nav-right"} prevEl={".swiper-nav-left"} />

          </div>
        </div>
      </Section>


      <Section>
        <MansoryImage />
      </Section>


      <Section>
        <div className='flex flex-col sm:gap-3 items-center justify-center gap-4 mt-[60px]'>
          <div className=" text-[24px] md:text-head4 text-dark_header font-bold">Products You May Like</div>
          <div className="divide-y-8  divide-blue_main divide-solid w-[60px] mb-[34px]">
            <div></div>
            <div></div>
          </div>
          <ListOfProduct />
        </div>
        <MobileList nextEl={".swiper-nav-right"} prevEl={".swiper-nav-left"} />
        <div className="flex md:hidden items-center justify-center gap-3 pt-6">
          <i className="swiper-nav-left icon-angle-small-left cursor-pointer bg-blue_main p-3 rounded-md text-stroke_light_green  hover:text-white text-[24px]"></i>
          <i className="swiper-nav-right icon-angle-small-right cursor-pointer  bg-blue_main p-3 rounded-md text-stroke_light_green  hover:text-white text-[24px]"></i>
        </div>


      </Section>

      <Section>
         <Productbg />
         

      </Section>
      

      {/* <div className="mt-[60px]">
        <Productbg />
      </div> */}


      <Section>
        <ServiceCenter />
      </Section>

      <Section>
        <Footer />
      </Section>

      <CopyRights />
    </>

  )
}
