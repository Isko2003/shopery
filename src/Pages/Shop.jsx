import Breadcrumb from '../Components/Common/Breadcrumb'
import PageContainer from '../Components/Common/PageContainer'
import BannerShop from '../Components/ShopComps/BannerShop'

const shopLinks = [
  { id: 0, title: "Categories", url: "/categories" },
  { id: 1, title: "Vegetables", url: "/categories/vegetables" },
  
]
const Shop = () => {
  return (
    <div>
      <PageContainer>
        <Breadcrumb links={shopLinks} />
        <BannerShop/>
        Shop
      </PageContainer>
    </div>
  )
}

export default Shop