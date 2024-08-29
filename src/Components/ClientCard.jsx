import React from 'react'
import { RiDoubleQuotesR } from "react-icons/ri";
import robert from '../assets/imgs/robert.png';
import { FaStar } from "react-icons/fa";

const ClientCard = ({ client }) => {

    const { img, text, clientName, position } = client;

  return (
    <div className='bg-[#f2f2f2] h-[60vh]'>
        <div className='w-[80%] mx-auto flex items-center'>
            <div className='w-[300px] border border-[#e5e5e5] br-6'>
                <div className='quotes'>
                    <RiDoubleQuotesR />
                </div>
                <div className='client-text'>
                    <p className='w-[290px] h-[120px] text-sm'>{text}</p>
                </div>
                <div className='client-info flex justify-between items-center'>
                    <div className='flex'>
                        <div className='rounded-full'>
                            <img src={img} alt="client" />
                        </div>
                        <div>
                            <h3>{clientName}</h3>
                            <p>{position}</p>
                        </div>
                    </div>
                    <div className='stars flex pb-1'>
                        <span><FaStar className='text-yellow-400'/></span>
                        <span><FaStar className='text-yellow-400'/></span>
                        <span><FaStar className='text-yellow-400'/></span>
                        <span><FaStar className='text-yellow-400'/></span>
                        <span><FaStar className='text-yellow-400' /></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ClientCard