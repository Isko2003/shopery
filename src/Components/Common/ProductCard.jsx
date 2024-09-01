import PropTypes from "prop-types";
import { CiStar } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import orange from "../../assets/imgs/orange.png";
import CountdownTimer from "./CountdownTimer";

export const ProductCard = ({ product, isLarge }) => {
  const { img, title, price, discount, isSale, isBestSale } = product;

  return (
    <>
      {isLarge ? (
        <div class="border-[#e5e5e5] border cursor-pointer hover:border-soft_primary transition-all duration-300 product-card p-5">
          <div className="relative product-img">
            <div
              className={`absolute top-2 left-3 w-[168px] h-[27px] flex items-center justify-between`}
              id="sale"
            >
              <div
                className={`w-[80px] h-[27px] bg-danger rounded-md flex items-center justify-center ${
                  isSale ? "block" : "hidden"
                }`}
              >
                <span className="text-white text-sm">Sale 50%</span>
              </div>
              <div
                className={`w-[80px] h-[27px] bg-sky-500 rounded-md flex items-center justify-center ${
                  isBestSale ? "block" : "hidden"
                }`}
              >
                <span className="text-white text-sm">Best Sale</span>
              </div>
            </div>

            <img src={img} alt="fruit" className="w-full h-[340px]" />
          </div>

          <div class="p-1 sm:p-4">
            <div className="product-details w-full flex items-center justify-around ">
              <div className="eye bg-[#e5e5e5] rounded-full p-1 mt-[-4px] m-3">
                <IoIosHeartEmpty className="text-2xl heart" />
              </div>
              <button class="w-[200px] h-[35px] bg-[#00b207] text-white flex items-center justify-center text-xs sm:text-xl text-center py-2 rounded-full mb-3">
                Add to Cart <CiShoppingBasket className="icon text-1xl sm:text-3xl ml-5px" />
              </button>
              <div className="eye bg-[#e5e5e5] rounded-full p-1 mt-[-3px] m-3">
                <IoEyeOutline className="text-2xl" />
              </div>
            </div>

            <h3 className="pb-1 text-[#4d4d4d] text-lg text-center">{title}</h3>
            <div className="flex items-center justify-center gap-1 pb-1 text-lg">
                <span className="font-bold">&#36;{price}</span>
                {discount && (
                  <span className="line-through text-[#999] font-bold">
                    &#36; {discount}
                  </span>
                )}
              </div>
              <div className="fivestar flex pb-1 justify-center">
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
              </div>
            </div>
            <p class="text-center text-gray-400">Hurry up! Offer ends in:</p>
            <div className="flex items-center justify-center"><CountdownTimer /></div>
            
          </div>
      ) : (
        <div className="border-[#e5e5e5] border cursor-pointer hover:border-soft_primary transition-all duration-300 product-card">
          <div className="relative product-img">
            <div
              className={`absolute top-2 left-3 w-[168px] h-[27px] flex items-center justify-between`}
              id="sale"
            >
              <div
                className={`w-[80px] h-[27px] bg-danger rounded-md flex items-center justify-center ${
                  isSale ? "block" : "hidden"
                }`}
              >
                <span className="text-white text-sm">Sale 50%</span>
              </div>
              <div
                className={`w-[80px] h-[27px] bg-sky-500 rounded-md flex items-center justify-center ${
                  isBestSale ? "block" : "hidden"
                }`}
              >
                <span className="text-white text-sm">Best Sale</span>
              </div>
            </div>

            <img src={img} alt="fruit" className="w-full h-auto" />
            <div className="absolute right-3 top-6 bg-[#e5e5e5] rounded-full p-1 mt-[-4px] opacity-0 invisible">
              <IoIosHeartEmpty className="text-2xl" />
            </div>
            <div className="absolute right-3 top-14 bg-[#e5e5e5] rounded-full p-1 opacity-0 invisible">
              <IoEyeOutline className="text-2xl" />
            </div>
          </div>
          <div className="product-info flex justify-between items-center mt-auto">
            <div className="ms-1 mb-1">
              <h3 className="pb-1 text-[#4d4d4d] text-sm">{title}</h3>
              <div className="flex gap-1 pb-1">
                <span>&#36;{price}</span>
                {discount && (
                  <span className="line-through text-[#999]">
                    &#36; {discount}
                  </span>
                )}
              </div>
              <div className="stars flex pb-1">
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <CiStar />
                </span>
              </div>
            </div>
            <div className="bg-[#e5e5e5] rounded-full p-1 me-2 shopping-basket">
              <CiShoppingBasket className="icon text-3xl" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discount: PropTypes.number,
  }).isRequired,
  isLarge: PropTypes.bool,
};

export default ProductCard;
