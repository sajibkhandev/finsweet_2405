import React from 'react'
import { Link } from 'react-router-dom'

const List = () => {
  return (
    <ul className='flex gap-x-8 text-base font-medium font-pop'>
      <Link to='/'><li className='text-primary duration-500 hover:text-white'>Home</li></Link>
      <Link to='/about'><li className='text-primary duration-500 hover:text-white'>About us</li></Link>
      <Link to='/feature'><li className='text-primary duration-500 hover:text-white'>Features</li></Link>
      <Link to='/pricing'> <li className='text-primary duration-500 hover:text-white'>Pricing</li></Link>
      <Link to='/faq'> <li className='text-primary duration-500 hover:text-white'>FAQ</li></Link>
     <a href="/blog"><li className='text-primary duration-500 hover:text-white'>Blog</li></a>
        
       
        
    </ul>
  )
}

export default List