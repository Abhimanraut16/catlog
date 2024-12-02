import React from 'react'
import Image from 'next/image'
import about from '../../assest/image/new/new1.webp'
import Slider from '../../component/Slider/Slider'

function Outdoor() {
  return (
    <>
      <div className="  ">
        <div className="flex flex-col md:flex-row w-full min-h-screen p-2 bg-green-100">

          {/* Image Section */}
          <div className="w-full md:w-7/12 mt-10">
            <div className="w-10/12 mx-auto"  data-aos="zoom-in-right">
              <Image src={about} alt="Lobster Tortellini" className="w-full object-cover rounded-lg" />
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-6/12 mt-16 md:mt-12 px-8 md:px-0" data-aos="fade-up-left">
            <div className="">
              <h5 className="text-xs mb-5 tracking-widest text-had">Our favourite</h5>
              <h2 className="text-3xl font-bold mb-4 text-had">Outdoor  <br /> & Patio</h2>
              <p className="mt-7 w-full md:w-7/12 text-page leading-relaxed text-blue-950 font-Lobster ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa consequuntur illum a culpa commodi sed nemo
                adipisci quae quam similique. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, at.
                Recusandae, consequatur iusto! Unde vitae dignissimos magnam, ut ex quis ipsum quisquam cum debitis
                dolor eligendi minima rem voluptate facilis.
              </p>
              <p className="mt-10 text-lg font-semibold text-had">$50.00</p>
              <button className="mt-8 px-6 py-2 bg-green-700 hover:bg-green-600 text-white rounded-md">
                VIEW MORE
              </button>
            </div>
          </div>

        </div>
        <Slider/>
      </div>
      

      
    </>

  )
}

export default Outdoor