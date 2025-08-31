import Header from "@/components/Header/Header";
import Banner from "@/components/bannerSlider/Banner";
import IconBox from "@/components/common/icon-box/IconBox";

import MansoryImage from "@/components/product/mansoryGallery/MansoryImage";
import SmallProduct from "@/components/product/simpleproduct/SmallProduct";
import Section from "@/components/section/Section";





export default function Home() {
  return (
    <>
      <Header />
      <Banner/>
      <Section>
    <div className='flex flex-row items-center justify-between mt-[60px]'>
      <div className='hidden md:flex flex-col w-[350px] gap-[22px] mr-6'> 
        <h2 className='text-dark_header font-bold text-[20px]'>Discover Hot Deals for Your Home!</h2>
        <div className='divide-solid'></div>
        <p className='text-[#8C8C8C]  font-montserrat text-[12px] text-justify'>In Mansoury, daily you can find the highest discounts across all categories and products available on the website.</p>
        <a href="#" className='border border-blue_main px-5 py-2 bg-blue_main rounded-md text-bg_light_green flex items-center gap-[56px] '>
         <span> Show All Products</span>
          <IconBox icon={'icon-angle-small-right'} />
        </a>
          </div>
        
       <SmallProduct/>
      
          
          </div>
       
      </Section>


      <Section>
       <MansoryImage/>
      </Section>
    </>
    
  )
}
