import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Faqs from '../components/Faqs'
import { FaArrowRightLong } from 'react-icons/fa6'

const FaqSection = () => {
  return (
    <section className='py-128'>
        <Container>
            <Flex className=''>
                <div className='w-4/12 relative '>
                <h3 className='text-5xl text-[#282938] font-semibold font-pop w-[341px]'>Frequently asked questions</h3>
               
                <div className=' group flex items-center text-[#2405F2] text-lg font-pop font-medium absolute top-[130px] left-[0px]'><a  href="">Get in touch with us</a><FaArrowRightLong className='absolute top-[6px] left-[156px] opacity-0 group-hover:opacity-100'/></div>
                </div>
                <div className='w-8/12 '>
                 <Faqs/>
                </div>

            </Flex>
        </Container>
    </section>
  )
}

export default FaqSection