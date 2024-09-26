import React, { useState } from 'react'
import Data from '../data';
import FAQ from './FAQ';

const Faqs = () => {
    let [arr,setArr]=useState(Data)
    
    
  return (
    arr.map(item=>(
        <FAQ number={item.number} title={item.title} dec={item.dec}/>
    ))
    
  )
}

export default Faqs