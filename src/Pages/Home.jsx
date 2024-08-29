import PageContainer from '../Components/Common/PageContainer';
import FeaturedProducts from '../Components/FeaturedProducts';
import Bannar from '../Components/HomeComps/Bannar';
import Features from '../Components/HomeComps/Features';
import PopularCategoriesH from '../Components/HomeComps/PopularCategories';
import PopularProductsH from '../Components/HomeComps/PopularProducts';
import LatestNews from '../Components/LatestNews';
import ClientTestimonials from '../Components/ClientTestimonials';

const Home = () => {
  return (
    <PageContainer>
      <Bannar />
      <Features />
      <PopularCategoriesH />
      <PopularProductsH/>
      <FeaturedProducts />
      <LatestNews />
      <ClientTestimonials />
    </PageContainer>
  )
}

export default Home