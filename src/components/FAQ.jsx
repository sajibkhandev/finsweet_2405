import React, { useState } from 'react'
import Flex from './Flex'
import { RxCross2 } from 'react-icons/rx';
import { FiPlus } from 'react-icons/fi';


const FAQ = ({ number, title, dec }) => {
    let [show, setShow] = useState(false)
    let handleClick = () => {

        setShow(!show)
    }
    return (
        <div className='border-b-2 border-[#ECECF1] py-5'>
            <Flex className='flex justify-between items-center px-5 py-5 '>

                <Flex className='gap-x-[10px] md:gap-x-[60px]'>
                    <span className='text-lg md:text-2xl text-[#2405F2] font-pop font-medium'>{number}</span>
                    <h2 onClick={handleClick} className='text-lg md:text-2xl text-[#282938] font-pop font-medium'>{title}</h2>
                </Flex>
                {
                    show ? <RxCross2 onClick={handleClick} /> :
                        <FiPlus onClick={handleClick} />
                }
            </Flex>
            {
                show &&
                <p className=' px-10 md:px-[104px] text-lg text-[#282938] font-pop font-medium  py-2.5'>{dec}</p>
            }

        </div>


    )
}

export default FAQ