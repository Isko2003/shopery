import PropTypes from 'prop-types';
import { CiStar } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import orange from '../../assets/imgs/orange.png';

export const ProductCard = ({ product }) => {

    const { img, title, price, discount } = product;

  return (
    <div className='border-[#e5e5e5] border cursor-pointer hover:border-soft_primary transition-all duration-300 product-card'>
        <div className='relative product-img'>
            <div className={`absolute top-3 left-4 w-[90px] h-[30px] bg-danger br-6 ${img === orange ? "block" : "hidden"}`}>
                <span className='text-center text-white text-sm'>Sale 50%</span>
            </div>
            <img src={img} alt="fruit" />
            <div className='absolute right-3 top-6 bg-[#e5e5e5] rounded-full p-1 mt-[-4px] opacity-0 invisible'>
                <IoIosHeartEmpty className='text-2xl'/>
            </div>
            <div className='absolute right-3 top-14 bg-[#e5e5e5] rounded-full p-1 opacity-0 invisible'>
                <IoEyeOutline className='text-2xl'/>
            </div>
        </div>
        <div className='product-info flex justify-between items-center'>
            <div className='ms-1 mb-1'>
                <h3 className='pb-1 text-[#4d4d4d] text-sm'>{title}</h3>
                <div className='flex gap-1 pb-1'>
                      <span>&#36;{price}</span>
                      {
                          discount &&
                          <span className='line-through text-[#999]'>&#36; {discount}</span>
                      }
                </div>
                <div className='stars flex pb-1'>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><CiStar /></span>
                </div>
             </div>
            <div className='bg-[#e5e5e5] rounded-full p-1 me-2 shopping-basket'>
                <CiShoppingBasket className='icon text-3xl'/>
            </div>
        </div>
    </div>
  )
}
ProductCard.propTypes = {
    product: PropTypes.shape({
        img: PropTypes.string.isRequired,  
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        discount: PropTypes.number
    }).isRequired
};
export default ProductCard