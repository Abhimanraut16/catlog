"use client"
import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Service() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className='bg-white text-green-900 py-20'>
      <div className="container w-full grid grid-cols-2 gap-8 lg:grid-cols-3 xl:grid-cols-4" data-aos="fade-up">


        <div className=" border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-2xl hover:-translate-y-1 space-y-5 duration-300" data-aos="fade-right">
          <div className="flex items-center gap-5">
            <i className='ri-truck-line text-3xl md:text-4xl xl:text-5xl' />
            <p className='md:text-lg font-bold'>
              Fast <br /> Delivery
            </p>
          </div>
          <p className='font-Lobster'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, rem possimus reiciendis ut dolores ex?</p>
        </div>

        <div className=" border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-2xl hover:-translate-y-1 space-y-5 duration-300"  data-aos="zoom-in">
          <div className="flex items-center gap-5">
            <i className='ri-customer-service-line text-3xl md:text-4xl xl:text-5xl' />
            <p className='md:text-lg font-bold'>
              Great Customer <br /> Service
            </p>
          </div>
          <p className='font-Lobster'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, rem possimus reiciendis ut dolores ex?</p>
        </div>

        <div className=" border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-2xl hover:-translate-y-1 space-y-5 duration-300"  data-aos="zoom-in">
          <div className="flex items-center gap-5">
            <i className='ri-plant-line text-3xl md:text-4xl xl:text-5xl' />
            <p className='md:text-lg font-bold'>
              Original <br /> plants
            </p>
          </div>
          <p className='font-Lobster'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, rem possimus reiciendis ut dolores ex?</p>
        </div>

        <div className=" border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-2xl hover:-translate-y-1 space-y-5 duration-300" data-aos="fade-left">
          <div className="flex items-center gap-5">
            <i className='ri-money-dollar-circle-line text-3xl md:text-4xl xl:text-5xl' />
            <p className='md:text-lg font-bold'>
              Affordable <br /> Price
            </p>
          </div>
          <p className='font-Lobster'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, rem possimus reiciendis ut dolores ex?</p>
        </div>


      </div>


    </div >
  )
}

export default Service