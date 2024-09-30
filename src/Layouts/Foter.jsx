
import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Logo from '../assets/logo.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'
import List from '../components/List'

const Foter = () => {
  return (
   <>
    <section className='bg-[#1C1E53]'>
        <Container>
            <Flex>
                <div className='w-1/2 py-[96px]'>
                <Image src={Logo}/>
                <p className='text-base text-white font-pop font-normal w-[399px] pt-[22px]'>We are always open to discuss your project and improve your online presence.</p>
                </div>
                <div className='w-1/2 py-[96px] flex flex-col gap-y-5'>
                <h2 className='text-2xl text-white font-pop font-medium'>Lets Talk!</h2>
                <p className='text-base text-white font-pop font-normal w-[399px]'>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
                <ul className='flex  gap-x-5 text-white'>
                    <li><FaFacebookF /></li>
                    <li><FaInstagram /></li>
                    <li><FaTwitter /></li>
                    <li><FaLinkedinIn /></li>
                </ul>
                </div>

            </Flex>

            <div className='w-[517px] h-[96px] bg-[#FCD980]'>
                <Flex className='justify-evenly items-center h-full'>
                <div>
                    <h4>Email me at</h4>
                    <p>contact@website.com</p>
                </div>
                <div>
                    <h4>Call us</h4>
                    <p>0927 6277 28525</p>
                </div>
                </Flex>
            </div>
        </Container>
    </section>
    <section className='py-8'>
        <Container>
            <Flex>
                <div className='w-7/12'>
                <p className='text-base text-black'>Copyright 2022, Finsweet.com</p></div>
                <div className='w-5/12'>
                <List/>

                </div>
            </Flex>
        </Container>
    </section>
   </>
  )
}

export default Foter