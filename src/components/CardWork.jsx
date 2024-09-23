import React from 'react'


const CardWork = ({icon,title,dec}) => {
  return (
    <div>
        <img src={icon} alt="" />
        <h4 className='text-[32px] text-[#282938] font-pop font-medium pt-4 pb-2'>{title}</h4>
        <p className='text-base text-[#282938] font-pop font-normal w-[303px] '>{dec}</p>

    </div>
  )
}

export default CardWork