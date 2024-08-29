import { FaArrowRight } from "react-icons/fa6";
import MainButton from "../../Common/MainButton";

const Bannar = () => {
    return (
        <section className='section'>
            <div className="grid grid-rows-6 sm:grid-rows-3 md:grid-rows-2 grid-cols-2 sm:grid-cols-2  md:grid-cols-3  gap-3 md:min-h[400px] lg:min-h-[600px] ">
                <div className="text-white col-span-2 row-span-2 bg-[url('/Bannarpic.png')] bannarHome  ">
                    <div className=" ">
                        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold my-8">Fresh & Healthy
                            <br />
                            Organic Food
                        </h2>
                        <div className="border-l-2 border-l-primary pl-3 my-2">
                            <h4>Sale up to  <span className="text-xl bg-orange-500 p-2 px-3 rounded-xl ">30% off</span> </h4>
                            <p className="text-gray-300 my-4">Free shipping on all your order.</p>
                        </div>
                        <MainButton title="Shop Now" url="" icon={<FaArrowRight />} classNames="my-5  bg-white py-3 px-6 btn-1" />
                    </div>
                </div>
                <div className="bg-[url('/bannar-2.png')] bannarHome col-span-2 row-span-2 sm:col-span-1 sm:row-span-1">
                    <div>
                        <h4 className="font-semibold ">SUMMER SALE</h4>
                        <p className="font-bold text-3xl my-2">75% OFF</p>
                        <p className="text-gray-500 mt-3">Only Fruit & Vegetable</p>
                        <MainButton title="Shop Now" url="" icon={<FaArrowRight />} classNames="my-1  py-3 btn-1" />
                    </div>
                </div>
                <div className="bannarHome text-center text-white bg-[url('/banner-3.png')] pr-6 col-span-2 row-span-2 sm:col-span-1 sm:row-span-1 ">
                    <div>
                        <h5>BEST DEAL</h5>
                        <h2 className="text-xl lg:text-3xl font-semibold">Special Products Deal of the Month</h2>
                        <MainButton title="Shop Now" url="" icon={<FaArrowRight />} classNames="my-1  py-3 btn-1 text-center mx-auto" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Bannar