import React from 'react'


const CardWork = ({icon,title,dec}) => {
  return (
    <div className=' px-2.5 md:px-0'>
        <img src={icon} alt="" />
        <h4 className='text-6 md:text-[32px] text-[#282938] font-pop font-medium pt-4 pb-2'>{title}</h4>
        <p className='text-sx md:text-base text-[#282938] font-pop font-normal md:w-[303px] '>{dec}</p>

    </div>
  )
}

export default CardWork