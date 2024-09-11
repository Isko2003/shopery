import { FaArrowRight } from "react-icons/fa";
import MainButton from "../../Common/MainButton";
import { popularProducts } from "../../../Data/data";
import ProductCard from "../../Common/ProductCard";

const HotDeals = () => {
  popularProducts.splice(1, 2);
  return (
    <div className="w-[100%] mx-auto pb-20 bg-[#f2f2f2] py-6">
      <section className="section">
        <div className="justifyBetweenItems">
          <h3 className="font-semibold text-3xl">Hot Deals</h3>
          <MainButton
            classNames="btn-1"
            title="View All"
            icon={<FaArrowRight />}
            url=""
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mx-auto my-5 bg-white">
          {popularProducts.map((product, index) => {
            const isFirstProduct = index === 0;
            const cardClasses =
              index === 0 ? "col-span-2 row-span-2 h-full" : "h-full";
            return (
              <div
                key={product.id}
                className={
                  isFirstProduct
                    ? "col-span-1 sm:col-span-2 row-span-1 sm:row-span-2"
                    : ""
                }
              >
                <ProductCard
                  product={product}
                  isLarge={isFirstProduct}
                  className={cardClasses}
                />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default HotDeals;
