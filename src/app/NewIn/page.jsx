"use client"
import React, { useState } from 'react'
import data from '../data'
import Image from 'next/image'
import NewPhoto from '../../component/NewPhoto/NewPhoto'

function NewIn() {
  const [noOfElement, setnoOnElement] = useState(4)
  const loadMore = () => {
    setnoOnElement(noOfElement + noOfElement)
  }
  const slice = data.cardData.slice(0, noOfElement)

  return (
    <div>
      <section className='py-4 container'>
        <NewPhoto />
        <div className="text-center mt-10">
          <div className="">
            <h2 className="text-2xl font-bold mb-4">Check out our products</h2>
            <p className="mb-8">Selected plants from our showroom, all in excellent shape and quality.</p>
          </div>
        </div>
        <div className="row justify-center items-center flex flex-wrap">
          <div className="w-full grid grid-cols-1 md:w-4/4 md:grid-cols-4 gap-8" >
            {slice.map((item, index) => {
              return (
                <div className="bg-green-100 p-10 rounded-3xl shadow-lg" key={index} >
                  <div className="overflow-hidden">
                    <Image
                      width={200}
                      src={item.imgSrc}
                      className="w-full mb-4 transition-transform duration-300 ease-in-out hover:scale-110"
                      alt='new'

                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Cacti Plant</h3>
                  <span className="text-lg font-bold mb-4">$19.99</span>
                  <button className="bg-green-400 hover:bg-green-500 text-white px-4 py-2 rounded-2xl ">
                    Add to Cart
                  </button>

                </div>
              )
            })}
          </div>

        </div>
        <button className='bg-green-400 text-white hover:bg-green-500 px-4 py-2 rounded-2xl mt-7' onClick={() => loadMore()}  >Load More</button>
      </section>

    </div>
  )
}

export default NewIn