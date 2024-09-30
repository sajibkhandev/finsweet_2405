import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import ContactIamge from '../assets/contact.png'
import Button from '../components/Button'
import { FaArrowRightLong } from 'react-icons/fa6'

const Contact = () => {
    
  return (
    
    <section className='py-128'>
        <Container>
            <Flex>
                <div className='w-1/2 relative group overflow-hidden'>
                <Image className='w-full' src={ContactIamge}/>
                <div className='w-full h-full bg-[#1b1c2b80] group-hover:left-[0px] duration-500 absolute top-0 -left-[100%] px-[96px] py-[96px]'>
                    <h2 className='text-[54px] text-white font-pop font-semibold w-[382px] pb-6'>Building stellar websites for early startups</h2>
                    <p className='text-base text-white font-pop font-meduim w-[382px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                </div>
                

                </div>
                <div className='w-1/2 px-[96px] py-[96px] bg-[#1C1E53] relative'>
                <h4 className='text-[32px] text-white font-pop font-medium '>Send inquiry</h4>
                <p className='text-base text-white font-pop font-medium pb-10 pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                <input className='w-full my-2.5 py-[18px] px-8 placeholder-text-base placeholder-text-F4F6FC placeholder:font-pop placeholder-font-medium' type="text" placeholder='Your Name'/>
                <input className='w-full my-2.5 py-[18px] px-8 placeholder-text-base placeholder-text-F4F6FC placeholder:font-pop placeholder-font-medium' type="text"  placeholder='Email'/>
                <input className='w-full my-2.5 py-[18px] px-8 placeholder-text-base placeholder-text-F4F6FC placeholder:font-pop placeholder-font-medium' type="text" placeholder='Paste your Figma design URL'/>
                <Button className='w-full mt-4' text="Send an Inquiry"/>
                <div className=' group flex items-center text-[#fff] text-2xl font-pop font-medium absolute bottom-[50px] left-[50%] -translate-x-1/2'><a  href="">Get in touch with us</a><FaArrowRightLong className='absolute top-[6px] left-[200px] opacity-0 group-hover:opacity-100'/></div>
                </div>

            </Flex>
        </Container>
    </section>
  )
}

export default Contact