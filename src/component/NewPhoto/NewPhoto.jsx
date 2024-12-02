import React from 'react'
import Image from 'next/image'
import giftbg from '../../assest/image/giftbg.jpg'

function NewPhoto() {
  return (
    <div className='w-full bg-green-300 rounded-full h-60'>
      <Image src={giftbg} className='rounded-full w-11/12 ml-10 shadow-2xl py-4' />


    </div>
  )
}

export default NewPhoto