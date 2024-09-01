import CountdownTimer from "../Common/CountdownTimer";
import MainButton from "../Common/MainButton";
import { FaArrowRight } from "react-icons/fa6";

const ThreeDiscountBannar = () => {
  return (
    <section className="section">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="relative text-center ">
          <img
            src="https://shopery.netlify.app/main/src/images/banner/banner-sm-03.png"
            alt="Bannar1"
          />
          <div className="absolute top-5 inset-x-5 grid grid-cols-1 gap-2 text-center text-white">
            <p>Best Deals</p>
            <h1 className="text-3xl font-bold">Sale of the Month</h1>
            <span className="ml-8">
              <CountdownTimer />
            </span>
            <span className="m-auto">
              <MainButton
                title="Shop Now"
                url=""
                icon={<FaArrowRight />}
                classNames="w-[162px] h-[45px] my-5 text-[#00b207] bg-white btn-1"
              />
            </span>
          </div>
        </div>
        <div className="relative text-center">
          <img
            src="https://shopery.netlify.app/main/src/images/banner/banner-sm-01.png"
            alt="Bannar2"
          />
          <div className="absolute top-5 inset-x-5 flex flex-col items-center gap-2 justify-center text-center text-white">
            <p>85% Fat Free</p>
            <h1 className="text-3xl font-bold">Low-Fat Meat</h1>
            <p>
              <span>Started at </span>
              <span>$79.99</span>
            </p>
            <span className="m-auto">
              <MainButton
                title="Shop Now"
                url=""
                icon={<FaArrowRight />}
                classNames="w-[162px] h-[45px] my-5 text-[#00b207] bg-white btn-1"
              />
            </span>
          </div>
        </div>
        <div className="relative text-center">
          <img
            src="https://shopery.netlify.app/main/src/images/banner/banner-sm-02.png"
            alt="Bannar3"
          />
          <div className="absolute top-5 inset-x-5 flex flex-col items-center justify-center gap-2 text-center text-white">
            <p>Summer Sale</p>
            <h1 className="text-3xl font-bold">100% Fresh Fruit</h1>
            <p>
              <span>Up to  </span>
              <span >64% OFF</span>
            </p>
            <span className="m-auto">
              <MainButton
                title="Shop Now"
                url=""
                icon={<FaArrowRight />}
                classNames="w-[162px] h-[45px] my-5 text-[#00b207] bg-white btn-1"
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeDiscountBannar;
