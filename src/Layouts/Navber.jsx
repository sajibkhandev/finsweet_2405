import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Logo from '../assets/logo.png'
import List from '../components/List'
import Button from '../components/Button'

const Navber = () => {
  return (
    <nav className='bg-secondary py-4'>
        <Container>
            <Flex className='items-center'>
                <div className='w-[35%]'>
                    <img src={Logo} alt="" />
                </div>
                <div className='w-[50%]'>
                    <List/>
                </div>
                <div className='w-[15%]'>
                    <Button text="Contact us"/>
                </div>

            </Flex>
                
           

        </Container>
    </nav>
  )
}

export default Navber