import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import BannerImage from '../assets/banner.png'
import Button from '../components/Button'
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
  return (
    <section className='bg-secondary py-[100px] md:py-[200px]'>
        <Container>
            <Flex className='!block md:!flex'>
                <div className='md:w-[50%]'>
                    <h1 className=' px-2.5 md:px-0 text-[28px] md:text-[54px] text-white font-semibold font-pop md:w-[558px]'>Building stellar websites for early startups</h1>
                    <p className='px-2.5 md:px-0 text-sx md:text-base text-white font-medium font-pop md:w-[451px] pt-6 pb-5 md:pb-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <div className='flex relative  px-2.5 md:px-0 pb-14 md:pb-0'>
                        <Button text='View our work'/>
                        <div className=' group flex items-center text-white absolute top-[14px] left-[180px] md:top-[16px] md:left-[235px]'><a  href="">View Pricing</a><FaArrowRightLong className='absolute top-[6px] left-[100px] opacity-0 md:group-hover:opacity-100'/></div>
                    </div>
                </div>
                <div className='md:w-[50%]'>
                    <img className='px-8' src={BannerImage} alt="" />
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Banner