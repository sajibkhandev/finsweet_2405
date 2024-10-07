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
            <Flex className='!block md:!flex'>
                <div className='md:w-5/12 relative'>
                <h3 className='px-2.5 md:px-0  text-[28px] md:text-5xl text-[#282938] font-semibold font-pop'>How we work</h3>
                <p className='px-2.5 md:px-0 text-sx md:text-base text-[#282938] font-normal font-pop md:w-[405px] pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                <div className=' group flex items-center text-[#2405F2] text-lg font-pop font-medium absolute top-[130px] left-[10px] md:left-[0px]'><a  href="">Get in touch with us</a><FaArrowRightLong className='absolute top-[6px] left-[156px] opacity-0 md:group-hover:opacity-100'/></div>
                </div>
                <div className='md:w-7/12 pt-[100px] md:pt-0'>
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