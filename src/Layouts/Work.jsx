import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { FaArrowRightLong } from 'react-icons/fa6'
import CardWork from '../components/CardWork'
import Icon1 from '../assets/cardIcon1.png'
import Icon2 from '../assets/cardIcon2.png'
import Icon3 from '../assets/cardIcon3.png'
import Icon4 from '../assets/cardIcon4.png'

const Work = () => {
  return (
    <section className='py-[128px] bg-[#F4F6FC]'>
        <Container>
            <Flex>
                <div className='w-5/12 relative'>
                <h3 className='text-5xl text-[#282938] font-semibold font-pop'>How we work</h3>
                <p className='text-base text-[#282938] font-normal font-pop w-[405px] pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                <div className=' group flex items-center text-[#2405F2] text-lg font-pop font-medium absolute top-[130px] left-[0px]'><a  href="">Get in touch with us</a><FaArrowRightLong className='absolute top-[6px] left-[156px] opacity-0 group-hover:opacity-100'/></div>
                </div>
                <div className='w-7/12 '>
                <Flex className='flex-wrap gap-y-12'>
                <CardWork icon={Icon1} title="Strategy" dec="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."/>
                <CardWork icon={Icon2} title="Wireframing" dec="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."/>
                <CardWork icon={Icon3} title="Design" dec="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."/>
                <CardWork icon={Icon4} title="Development" dec="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."/>
                </Flex>
                </div>

            </Flex>
        </Container>
    </section>
  )
}

export default Work