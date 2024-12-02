import React from 'react'
import Image from 'next/image'
import cart1 from '../../assest/image/cart-1.png'
import cart2 from '../../assest/image/cart-2.png'
import cart3 from '../../assest/image/cart-3.png'
import cart4 from '../../assest/image/cart-4.png'

function Popular() {
  return (
    <section id='popular' className='bg-green-200'>
      <div className=" flex flex-col items-center gap-3 text-center mb-40" data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom">
        <h2 className='title'>Your Choice Plant</h2>
        <p className='max-w-2xl'>Follow instraction for more</p>
      </div>

      <div className="container w-full grid grid-cols-1 gap-x-8 gap-y-36 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">


        <div className="popular-card bg-green-300 p-10 pt-24 rounded-md relative" data-aos="zoom-out-right">
          <Image src={cart1} alt='cart1' className='w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500' />
          <p className='italic'>Nephrolepis exaltata</p>
          <h3>Boston fern</h3>

          <div className="text-green-500 text-xs py-3">
            <i className='ri-star-fill' />
            <i className='ri-star-fill' />
            <i className='ri-star-half-fill' />
            <i className='ri-star-line text-gray-400' />
            <i className='ri-star-line text-gray-400' />
            <i className='ri-star-line text-gray-400' />
          </div>


          <div className="flex items-center justify-between">
            <p className='text-xl'>$5</p>
            <button className='bg-green-500 px-2 rounded-sm text-xl'>
              <i className='ri-shopping-cart-fill' />
            </button>

          </div>

        </div>

        <div className="popular-card bg-green-300 p-10 pt-24 rounded-md relative" data-aos="zoom-out-up">
          <Image src={cart2} alt='cart2' className='w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500' />
          <p className='italic'>Ficus elastice</p>
          <h3>Runner Planrt</h3>

          <div className="text-green-500 text-xs py-3">
            <i className='ri-star-fill' />
            <i className='ri-star-fill' />
            <i className='ri-star-half-fill' />
            <i className='ri-star-line text-gray-400' />
            <i className='ri-star-line text-gray-400' />
          </div>


          <div className="flex items-center justify-between">
            <p className='text-xl'>$5</p>
            <button className='bg-green-500 px-2 rounded-sm text-xl'>
              <i className='ri-shopping-cart-fill' />
            </button>

          </div>

        </div>

 
        <div className="popular-card bg-green-300 p-10 pt-24 rounded-md relative" data-aos="zoom-out-up">
          <Image src={cart3} alt='cart3' className='w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500' />
          <p className='italic'>Spathiphyllum wallisii</p>
          <h3>Peace Lily</h3>

          <div className="text-green-500 text-xs py-3">
            <i className='ri-star-fill' />
            <i className='ri-star-fill' />
            <i className='ri-star-half-fill' />
            <i className='ri-star-line text-gray-400' />
            <i className='ri-star-line text-gray-400' />
          </div>


          <div className="flex items-center justify-between">
            <p className='text-xl'>$5</p>
            <button className='bg-green-500 px-2 rounded-sm text-xl'>
              <i className='ri-shopping-cart-fill' />
            </button>

          </div>

        </div>

        <div className="popular-card bg-green-300 p-10 pt-24 rounded-md relative" data-aos="zoom-out-left">
          <Image src={cart4} alt='cart4' className='w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500' />
          <p className='italic'>Adenium Obesum</p>
          <h3>Desert Rose</h3>

          <div className="text-green-500 text-xs py-3">
            <i className='ri-star-fill' />
            <i className='ri-star-fill' />
            <i className='ri-star-half-fill' />
            <i className='ri-star-line text-gray-400' />
            <i className='ri-star-line text-gray-400' />
          </div>


          <div className="flex items-center justify-between">
            <p className='text-xl'>$5</p>
            <button className='bg-green-500 px-2 rounded-sm text-xl'>
              <i className='ri-shopping-cart-fill' />
            </button>

          </div>

        </div>


      </div>



    </section>
  )
}

export default Popular