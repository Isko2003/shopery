import React from 'react'
import { MdLabelImportantOutline } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineModeComment } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

const LatestNewsCard = ({ news }) => {

    const { id, img } = news;

  return (
          <div className='blog border-[#e5e5e5] border br-6'>
            <div className='w-[325px] blog-img relative'>
                <img src={img} alt="mandarin" width={"inherit"} height={"inherit"}/>
                <div className='absolute bottom-2 left-5 bg-white w-[50px] br-6 px-1'>
                    <div>
                        <p>18</p>
                        <p className='text-[#4d4d4d] text-sm'>Nov</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center py-3 px-1'>
                <div className='flex gap-1 items-center'>
                    <MdLabelImportantOutline className='text-[#4d4d4d]'/>
                    <span className='text-[#b2b2b2] text-[15px]'>Food</span>
                </div>
                <div className='flex gap-1 items-center'>
                    <FaRegUser className='text-[#4d4d4d]'/>
                    <span className='text-[#b2b2b2] text-[15px]'>By Admin</span>
                </div>
                <div className='flex gap-1 items-center'>
                    <MdOutlineModeComment className='text-[#4d4d4d]'/>
                    <span className='text-[#b2b2b2] text-[15px]'>65 Comments</span>
                </div>
            </div>
            <div className='py-3 blog-text'>
                <p className='text-[17px] w-[300px] px-3 hover:cursor-pointer'>Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.</p>
            </div>
            <div className='flex gap-2 items-center py-2 px-4'>
                <span className='text-[#00b207] font-bold'>Read More</span>
                <span className='text-[#00b207]'><FaArrowRightLong /></span>
            </div>
          </div>
  )
}

export default LatestNewsCard