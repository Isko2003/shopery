import MainButton from '../Common/MainButton'
import { FaArrowRight } from 'react-icons/fa'
import CountdownTimer from '../Common/CountdownTimer'

const BannerShop = () => {
    return (
        <section className='section text-white py-0 my-0'>
            <div className="bg-[url('ShopBanner.png')] min-h-96 bannarHome bg-center">
                <div>
                    <h6 className="font-semibold ">BEST DEALS</h6>
                    <div className='flex gap-5 md:gap-10 items-center'>
                        <h3 className="text5xl my-2">Sale of the Month</h3>
                        <div className='h-16 w-16 md:w-24 md:h-24 bg-warning rounded-full flexCenter flex-col'>
                            <p className='text-lg md:text-2xl font-semibold'>56%</p>
                            <p className='uppercase font-light text-sm md:text-md'>off</p>
                        </div>
                    </div>
                  <CountdownTimer/>
                    <MainButton title="Shop Now" url="" icon={<FaArrowRight />} classNames="my-4 py-3 btn-1 bg-primary text-white px-8" />
                </div>
            </div>
        </section>
    )
}

export default BannerShop