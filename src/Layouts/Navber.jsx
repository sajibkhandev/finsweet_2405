import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Logo from '../assets/logo.png'
import List from '../components/List'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const Navber = () => {
  return (
    <nav className='bg-secondary py-4'>
        <Container>
            <Flex className='items-center'>
                <div className='w-[35%]'>
                   <Link to='/'> <img src={Logo} alt="" /></Link>
                </div>
                <div className='w-[50%]'>
                    <List/>
                </div>
                <div className='w-[15%]'>
                    <Link to='/contact'> <Button text="Contact us"/></Link>
                </div>

            </Flex>
                
           

        </Container>
    </nav>
  )
}

export default Navber