import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { FaArrowRightLong } from 'react-icons/fa6'
import Project1 from '../assets/project1.png'
import Project2 from '../assets/project2.png'
import Project3 from '../assets/project3.png'

const Project = () => {
  return (
    <section className='py-[128px]'>
        <Container>
            <Flex className='justify-between'>
                <h2 className='text-5xl text-[#282938] font-pop font-semibold'>View our projects</h2>
                <div className='flex items-center gap-x-4'>
                    <h4 className='text-[#282938] text-base font-medium font-pop '>View More</h4>
                    <FaArrowRightLong/>
                </div>
            </Flex>

            <Flex >
                <div className='w-8/12 relative group/main mt-14'>
                <img src={Project1} alt="" />
                <div className='hidden group-hover/main:block group-hover/main:w-[52%]  w-[0px] h-full bg-gradient-to-r from-[#6F7CA1] to-[#363766] opacity-85 absolute top-0 left-0 pt-[312px] px-12'>

                    <h4 className='text-3xl text-white font-pop font-medium w-[313px]'>Workhub office Webflow Webflow Design</h4>
                    <p className='text-base text-white font-pop font-medium w-[278px] pt-10'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam </p>
                    <div className=' group/pain flex items-center text-white absolute top-[500px] left-[48px]'><a  href="">View Pricing</a><FaArrowRightLong className='absolute top-[6px] left-[100px] opacity-0 group-hover/pain:opacity-100'/></div>
                </div>




                </div>
                <div className='w-4/12 flex flex-col justify-between items-center mt-14'>
                <img src={Project2} alt="" />
                <img src={Project3} alt="" />
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Project