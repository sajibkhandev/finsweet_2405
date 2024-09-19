import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import BannerImage from '../assets/banner.png'
import Button from '../components/Button'

const Banner = () => {
  return (
    <section className='bg-secondary py-[200px]'>
        <Container>
            <Flex>
                <div className='w-[50%]'>
                    <h1 className='text-white text-5xl'>Building stellar websites for early startups</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <div>
                        <Button text='View our work'/>
                        <Button text='View our work'/>
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