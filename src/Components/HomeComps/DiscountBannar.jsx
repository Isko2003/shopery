import MainButton from "../Common/MainButton";
import { FaArrowRight } from "react-icons/fa6";

const DiscountBannar = () => {
  return (
    <section className="section">
      <div className="relative w-full h-[300px] sm:h-[330px] ">
        <img
          className="w-full h-full object-cover"
          src="/src/assets/imgs/banner-sale.jpg"
          alt=""
        />
        <div className="absolute inset-0 bg-green-950 opacity-50"></div>
        <div className="absolute top-8 right-5 w-[200px] sm:w-[300px] md:w-[400px] h-[230px] text-white p-3 m-auto">
          <div className="text-left ">
            <p className="text-base font-bold">Summer Sale</p>
            <p className="text-3xl sm:text-4xl py-2">
              <span className="text-orange-500 font-bold">37%</span> OFF
            </p>
            <p className="text-xs mt-3 text-gray-400">
              Free on all your order, Free Shipping and 30 days money-back
              guarantee
            </p>
            <MainButton
              title="Shop Now"
              url=""
              icon={<FaArrowRight />}
              classNames="w-[150px] sm:w-[190px] text-1xl my-5 text-white bg-[#00b207] py-1 sm:py-3 px-5 sm:px-6 btn-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountBannar;
