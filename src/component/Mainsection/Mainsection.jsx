import React from 'react'
import '../../app/globals.css'
import home from '../../assest/image/home.png'
import Image from 'next/image'



function Mainsection() {
  return (
    <main>
      <section id='home' className='relative' data-aos="zoom-in-down" >
        <div className="container">
          {/* blob 1 */}
          <div className="w-64 h-64 bg-green-400 rounded-full blur-3xl -z-10 opacity-40 absolute top-1/2 left-1/2 transfrom -translate-x-1/2 -translate-y-1/2"></div>

          {/* blob 2 */}

          <div className="w-64 h-64 bg-green-400 rounded-full blur-3xl -z-10 opacity-40 absolute right-0 bottom-0"></div>



          <div className="flex flex-col items-center gap-5 "  >
            <div className="flex lg:flex-row">

              <div className=" w-full space-y-5 lg:w-1/2">
                <h1 className=''>
                  <span className='text-yellow-500 text-3xl'>Plants</span>make a
                  <br />
                  position
                  <span className='text-yellow-500'>impact</span> on <br />
                  your environment
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime eaque tenetur ipsa odio adipisci. Expedita molestiae consequuntur modi reprehenderit dolores veniam pariatur culpa possimus fugiat.</p>
                
                <div className="flex flex-col gap-2 ms:flex-row md:gap-4 lg:pt-5 xl:pt-10" data-aos="zoom-in-right">
                  <botton className='btn' ><span>Shop Now</span>
                    <i className='ri-leaf-line' />
                  </botton>
                  <botton className='btn btn_outline'>
                    <span>Know More</span>
                    <i className='ri-leaf-line' />
                  </botton>
                </div>
                <p className='text-xs font-Lobster text-blue-950  '>You will get 30-days free trial.</p>
                <div className=" flex items-center gap-5 text-lg">
                  <i className='text-blue-950  hover:text-yellow-500 duration-300 cursor-pointer ri-facebook-fill' />
                  <i className='text-blue-950  hover:text-yellow-500 duration-300 cursor-pointer text-base ri-twitter-x-line' />
                  <i className='text-blue-950  hover:text-yellow-500 duration-300 cursor-pointer ri-instagram-line' />
                  <i className='text-blue-950  hover:text-yellow-500 duration-300 cursor-pointer ri-linkedin-fill' />
                </div>

              </div>

              <div className="w-full relative lg:w-1/2">
                <Image src={home} alt='home' width={500} data-aos="fade-up"
                  data-aos-duration="3000" />

                <div className="absolute -top-10 right-0 opacity-30 animate-movingY xl:top-5">
                  <i className='ri-leaf-line text-6xl text-yellow-500' />
                </div>

                <div className="absolute bottom-0 left-0 opacity-30 xl:bottom-12 animate-rotating"><i className='ri-flower-line text-6xl text-yellow-500' /></div>


                <div className="absolute -top-10 -left-5 opacity-30 animate-scalingUp xl:top-1"><i className='ri-plant-line text-6xl text-yellow-500' /></div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Mainsection