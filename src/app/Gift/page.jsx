import React from 'react'
import './gift.css'
import GreenGift from '../../component/GreenGift/GreenGift'

export default function Gift() {
  return (
    <>
      <div className='onlineReservation'>
        <div className="text-center">
          <p className='pt-8 text-4xl'>"</p>
          <p className=' leading-tight text-page text-blue-950 font-Lobster'>I wanted to thank you for inviting me  down for that amazing dinner <br /> the other night.The food was extraordinary.</p>
        </div>

        <header>
          <div className='main mt-20'>
            <div className='animate'>
              <h3 className='text-had'> That Grows</h3>
              <h2 className='text-had'>Give a Gift <div className="changr_contant " /></h2>
              <p className='text-had'>Nepalies once is not enough</p>
              <a href="#" className=" bg-green-700 hover:bg-green-400 text-white ">Learn More</a>
              <a href="#" className=" bg-green-400 hover:bg-green-700 ">Signup here</a>
            </div>
          </div>
        </header>


      </div>
      <GreenGift />
    </>





  )
}
