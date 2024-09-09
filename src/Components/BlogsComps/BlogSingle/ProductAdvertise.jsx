import MainButton from "../../Common/MainButton"
import { FaArrowRight } from "react-icons/fa6";

const ProductAdvertise = () => {
    return (
        <div className='bannarHome bg-[url("/productBlogAdv.png")] bg-cover bg-center py-16 pl-10 my-5' >
            <div className='flex items-center gap-8 lg:gap-16'>
                <div>
                    <h6 className="text-gray-500">SUMMER SALES</h6>
                    <h3 className="text-3xl lg:text-4xl text-white font-semibold">Fresh Fruit</h3>
                    <MainButton classNames="btn-1 bg-primary text-white px-6 py-3 mt-3" title={"Shop Now"} url="" icon={<FaArrowRight />} />
                </div>
                <div className="flexCenter flex-col p-3 px-6 bg-[#1A1A1A] rounded-full">
                    <p className="text-sm text-gray-500">UP TO</p>
                    <span className="text-xl font-semibold text-warning">56%</span>
                    <p className="text-sm text-gray-500">OFF</p>
                </div>
            </div>


        </div>
    )
}

export default ProductAdvertise