'use client'
import React from 'react'
import Image from 'next/image'
// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import 'swiper/css';
import review1 from '../../assest/image/review-1.jpg'
import review2 from '../../assest/image/review-2.jpg'
import review3 from '../../assest/image/review-3.jpg'
import review4 from '../../assest/image/review-4.jpg'

function Review() {
  
  // const swiper = new Swiper('.swiper', {
  //   modules: [Navigation, Pagination],
  //   // Optional parameters
  //   speed: 400,
  //   spaceBetween: 30,
  //   autoplay: {
  //     delay: 3000,
  //     disableOnInteraction: false
  //   },

  //   // If we need pagination
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true
  //   },
  //   grabCursor: true,

  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },


  // });

  return (
    <section id='review'>
      <div className=" flex flex-col items-center gap-3 text-center mb-10 md:mb-20" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
        <h2 className='title'>Customer Review</h2>
        <p className='max-w-2xl'>Follow instraction for more</p>
      </div>


      <div className="container">
        <div className="swiper py-12">
          <ul className='swiper-wrapper'>

            <li className='swiper-slide'>
              <div className="flex flex-col gap-5 bg-green-300 rounded-md p-6">
                <p className='font-Lobster'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cupiditate officiis quibusdam inventore neque dicta atque earum accusantium ea libero, explicabo quia </p>

                <div className="flex items-center">
                  <Image src={review1} alt='review' className='w-12 h-12 rounded-full' />
                  <div className="ml-2 ">
                    <p className='text-green-500 uppercase'>Augustina</p>
                    <p>duro</p>
                  </div>
                  < i className='ri-double-quotes-r text-4xl ml-auto' />
                </div>
              </div>
            </li>

            <li className='swiper-slide'>
              <div className="flex flex-col gap-5 bg-green-900 rounded-md p-6">
                <p className='font-Lobster'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cupiditate officiis quibusdam inventore neque dicta atque earum accusantium ea libero, explicabo quia </p>

                <div className="flex items-center">
                  <Image src={review2} alt='review' className='w-12 h-12 rounded-full' />
                  <div className="ml-2 ">
                    <p className='text-green-500 uppercase'>Eisntina</p>
                    <p>uthp</p>
                  </div>
                  < i className='ri-double-quotes-r text-4xl ml-auto' />
                </div>
              </div>
            </li>

            <li className='swiper-slide'>
              <div className="flex flex-col gap-5 bg-green-900 rounded-md p-6">
                <p className='font-Lobster'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cupiditate officiis quibusdam inventore neque dicta atque earum accusantium ea libero, explicabo quia </p>

                <div className="flex items-center">
                  <Image src={review3} alt='review' className='w-12 h-12 rounded-full' />
                  <div className="ml-2 ">
                    <p className='text-green-500 uppercase'>Eisntina</p>
                    <p>uthp</p>
                  </div>
                  < i className='ri-double-quotes-r text-4xl ml-auto' />
                </div>
              </div>
            </li>

            <li className='swiper-slide'>
              <div className="flex flex-col gap-5 bg-green-900 rounded-md p-6">
                <p className='font-Lobster'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cupiditate officiis quibusdam inventore neque dicta atque earum accusantium ea libero, explicabo quia </p>

                <div className="flex items-center">
                  <Image src={review4} alt='review' className='w-12 h-12 rounded-full' />
                  <div className="ml-2 ">
                    <p className='text-green-500 uppercase'>Eisntina</p>
                    <p>uthp</p>
                  </div>
                  < i className='ri-double-quotes-r text-4xl ml-auto' />
                </div>
              </div>
            </li>

          </ul>
          <div className="swiper-pagination"></div>

        </div>
      </div>



    </section>
  )
}

export default Review