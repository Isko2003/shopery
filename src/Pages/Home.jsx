import PageContainer from '../Components/Common/PageContainer';
import Bannar from '../Components/HomeComps/Bannar';
import Features from '../Components/HomeComps/Features';
import PopularCategoriesH from '../Components/HomeComps/PopularCategories';
const Home = () => {
  return (
    <PageContainer>
      <Bannar />
      <Features />
      <PopularCategoriesH/>
      
    </PageContainer>
  )
}

export default Home