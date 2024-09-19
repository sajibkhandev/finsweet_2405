import React from 'react'

const Button = ({text}) => {
  return (
    <button className='bg-transparent hover:bg-[#FCD980] duration-300 py-4 px-12 rounded-[41px] border-2 border-[#474974] text-base text-white font-medium font-pop'>{text}</button>
  )
}

export default Button