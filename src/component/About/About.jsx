import React from 'react'
import Image from 'next/image'
import plant1 from '../../assest/image/plant-1.png'
import plant2 from '../../assest/image/plant-2.png'
import leaf3 from '../../assest/image/leaf-3.png'
function About() {
  return (
    <section id='about' className='relative overflow-hidden'>
      <div className="absolute -top-8 -right-12 opacity-90 animate-movingY">
        <Image src={leaf3} alt='leaf3' className='w-40 md:w-52 xl:w-64' />
      </div>




      <div className=" flex flex-col items-center gap-3 text-center mb-10 md:mb-20" data-aos="fade-up"
        data-aos-duration="3000">
        <h2 className='title'>About Us</h2>
        <p className='max-w-2xl'>Follow Instruction for more</p>
      </div>
      <div className="container space-y-10 xl:space-y-0">

        <div className="flex items-center lg:flex-row gap-5">
          <div className="w-full lg:w-1/2" data-aos="fade-right" >
            <Image src={plant1} alt='plant1' className='w-full sm:w-2/3 lg:w-full xl:w-2/3 mx-auto' />

          </div>
          <div className="w-full lg:w-1/2">
            <div className="space-y-5" data-aos="zoom-in-up">
              <h3>
                Make your <span className='text-yellow-500'>Organic</span> <br /> garden
              </h3>
              <p className='text-blue-950 font-Lobster' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat impedit eligendi natus magnam omnis, cumque earum? Dignissimos possimus ea porro Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum facilis numquam ipsa exercitationem ea consequuntur possimus fugit repellat dolores, quaerat earum beatae amet voluptatibus sit quisquam corporis. Doloremque, rem animi..</p>
            </div>
          </div>
        </div>


        <div className="flex  items-center lg:flex-row gap-5">
          <div className="w-full lg:w-1/2">
            <div className="space-y-5" data-aos="zoom-in-up">
              <h3>
                Come with us <span className='text-yellow-500'>grow up</span> <br /> your plant
              </h3>
              <p className='text-blue-950 font-Lobster'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat impedit eligendi natus magnam omnis, cumque earum? Dignissimos possimus ea porro Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum facilis numquam ipsa exercitationem ea consequuntur possimus fugit repellat dolores, quaerat earum beatae amet voluptatibus sit quisquam corporis. Doloremque, rem animi..</p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 " data-aos="fade-left">
            <Image src={plant2} alt='plant1' className='w-full sm:w-2/3 lg:w-full xl:w-2/3 mx-auto' />
          </div>
        </div>

      </div>

    </section>
  )
}

export default About