import PageContainer from '../Components/Common/PageContainer';
import FeaturedProducts from '../Components/FeaturedProducts';
import Bannar from '../Components/HomeComps/Bannar';
import Features from '../Components/HomeComps/Features';
import PopularCategoriesH from '../Components/HomeComps/PopularCategories';
import PopularProductsH from '../Components/HomeComps/PopularProducts';
import HotDeals from '../Components/HomeComps/HotDeals';
import LatestNews from '../Components/LatestNews';
import ClientTestimonials from '../Components/ClientTestimonials';
import FollowUS from '../Components/FollowUs'
import DiscountBannar from '../Components/HomeComps/DiscountBannar';
import ThreeDiscountBannar from '../Components/HomeComps/ThreeDiscountBannar';


const Home = () => {
  return (
    <PageContainer>
      <Bannar />
      <Features />
      <PopularCategoriesH />
      <PopularProductsH/>
      <ThreeDiscountBannar />
      <HotDeals />
      <DiscountBannar />
      <FeaturedProducts />
      <LatestNews />
      <ClientTestimonials />
      <FollowUS></FollowUS>
    </PageContainer>
  )
}

export default Home