import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import BannerImage from '../assets/banner.png'
import Button from '../components/Button'
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
  return (
    <section className='bg-secondary py-[200px]'>
        <Container>
            <Flex>
                <div className='w-[50%]'>
                    <h1 className='text-[54px] text-white font-semibold font-pop w-[558px]'>Building stellar websites for early startups</h1>
                    <p className='text-base text-white font-medium font-pop w-[451px] pt-6 pb-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <div className='flex relative'>
                        <Button text='View our work'/>
                        <div className=' group flex items-center text-white absolute top-[16px] left-[235px]'><a  href="">View Pricing</a><FaArrowRightLong className='absolute top-[6px] left-[100px] opacity-0 group-hover:opacity-100'/></div>
                    </div>
                </div>
                <div className='w-[50%]'>
                    <img src={BannerImage} alt="" />
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Banner