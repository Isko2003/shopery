import { FaArrowRight } from "react-icons/fa"
import MainButton from "../../Common/MainButton"
import { popularProducts } from "../../../Data/data"
import ProductCard from "../../Common/ProductCard"

const PopularProductsH = () => {
  return (
      <section className="section">
          <div className="justifyBetweenItems">
              <h3 className="font-semibold text-3xl">Popular Products</h3>
              <MainButton classNames="btn-1" title="View All" icon={<FaArrowRight />} url="" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mx-auto my-5">
              {popularProducts.map(product => { 
                  return <ProductCard product={product} key={product.id} />
              })}
          </div>
    </section>      
  )
}

export default PopularProductsH