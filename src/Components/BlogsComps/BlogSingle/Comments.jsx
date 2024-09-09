import { GoDotFill } from "react-icons/go";
import MainButton from "../../Common/MainButton";
const Comments = () => {
    return (
        <div className='my-5 mt-8'>
            <h4 className='mb-5 font-semibold text-2xl'>Comments</h4>
            <div className='flex flex-col gap-5 justify-center'>
                <div className='flex gap-3 items-center'>
                    <div className=''>
                        <img src="" alt="avatar img" />
                    </div>
                    <div>
                        <div className='flex gap-3 items-center'>
                            <p>Annette Black</p>
                            <GoDotFill />
                            <p className='text-gray-500'>26 Apr, 2021</p>
                        </div>
                        <p className="text-gray-500 mt-1" > In a nisi commodo, porttitor ligula consequat, tincidunt dui. Nulla volutpat, metus eu aliquam malesuada, elit libero venenatis urna, consequat maximus arcu diam non diam.   </p>
                    </div>
                </div>
                <hr />
                <div className='flex gap-3 items-center'>
                    <div className=''>
                        <img src="" alt="avatar img" />
                    </div>
                    <div>
                        <div className='flex gap-3 items-center'>
                            <p>Annette Black</p>
                            <GoDotFill />
                            <p className='text-gray-500'>26 Apr, 2021</p>
                        </div>
                        <p className="text-gray-500 mt-1" > In a nisi commodo, porttitor ligula consequat, tincidunt dui. Nulla volutpat, metus eu aliquam malesuada, elit libero venenatis urna, consequat maximus arcu diam non diam.   </p>
                    </div>
                </div>
                <hr />
                <div className='flex gap-3 items-center'>
                    <div className=''>
                        <img src="" alt="avatar img" />
                    </div>
                    <div>
                        <div className='flex gap-3 items-center'>
                            <p>Annette Black</p>
                            <GoDotFill />
                            <p className='text-gray-500'>26 Apr, 2021</p>
                        </div>
                        <p className="text-gray-500 mt-1" > In a nisi commodo, porttitor ligula consequat, tincidunt dui. Nulla volutpat, metus eu aliquam malesuada, elit libero venenatis urna, consequat maximus arcu diam non diam.   </p>
                    </div>
                </div>
            </div>
            <MainButton classNames="mt-5 btn-1 border-2 border-primary px-6 py-2" title="Load More" url="" />
        </div>
    )
}

export default Comments