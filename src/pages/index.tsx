import Header from "@/components/Header/Header";
import Banner from "@/components/bannerSlider/Banner";
import SmallProduct from "@/components/product/simpleproduct/SmallProduct";
import Section from "@/components/section/Section";




export default function Home() {
  return (
    <>
      <Header />
      <Banner/>
      <Section>
        <SmallProduct/>
      </Section>
    </>
    
  )
}
