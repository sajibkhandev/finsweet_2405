import React from 'react'

const Button = ({text,className}) => {
  return (
    <button className={`bg-transparent md:hover:bg-[#FCD980] duration-300 py-3 px-6 md:py-4 md:px-12 rounded-[41px] border-2 border-[#474974] text-base text-white font-medium font-pop ${className}`}>{text}</button>
  )
}

export default Button