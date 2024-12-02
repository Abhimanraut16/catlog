"use client"
import React, { useState } from 'react'
// import './house.css'
import Image from 'next/image'
import home from '../../assest/visa/home.png'
import about from '../../assest/visa/about.png'

import data from '../../app/data'



function HousePlant() {
  const [noOfElement, setnoOnElement] = useState(8)
const loadMore = () => {
  setnoOnElement(noOfElement + noOfElement)
}
const slice = data.cardData.slice(0, noOfElement)
  return (
    <div>
      <main className="main">

        {/* Home Section */}
        <section className="bg-green-100 py-16" id="home">
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
            <Image src={home} data-aos="zoom-in-down" className="w-full md:w-1/3 " alt="Home Image" />
            <div className="text-center md:text-left">
              <div className="" data-aos="fade-left">
                <h1 className="text-3xl font-bold mb-4">Plants will make your life better</h1>
                <p className="text-lg mb-6 text-blue-950 font-Lobster">Create incredible plant designs for your spaces. Add freshness to your ideas.</p>
              </div>
              <a href="#about" className="bg-green-500 text-white px-6 py-3 rounded-lg inline-flex items-center" data-aos="zoom-in">
                Explore <i className="ri-arrow-right-down-line ml-2"></i>
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16" id="about">
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 ">

            <div data-aos="fade-right">
              <h2 className="text-2xl font-bold mb-4">Who we really are & why choose us</h2>
              <p className="mb-6">We have over 4000+ reviews and our customers trust our plant process and delivery service.</p>
              <ul className="space-y-2">
                <li>✅ We always deliver on time.</li>
                <li>✅ Guides to protect and care for your plants.</li>
                <li>✅ We provide post-sale check-ups.</li>
                <li>✅ 100% money-back guarantee.</li>
              </ul>
              <a href="#" className="text-green-500 font-semibold mt-6 inline-block">Shop Now</a>
            </div>
            <Image data-aos="zoom-in-left" src={about} className="w-full md:w-1/2" alt="About Image" />
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 bg-green-300" id="products">
          <div className="container mx-auto text-center">
            <div className="" data-aos="zoom-in-down"
              data-aos-anchor-placement="top-bottom">
              <h2 className="text-2xl font-bold mb-4">Check out our products</h2>
              <p className="mb-8">Selected plants from our showroom, all in excellent shape and quality.</p>
            </div>

            <div className="w-full grid grid-cols-1 md:w-4/4 md:grid-cols-4 gap-8" data-aos="fade-up"
              data-aos-duration="3000">

              {slice.map((product, index) => (
                <div
                  key={index}
                  className="bg-green-100 p-10 rounded-full shadow-lg"
                >
                  <div className="overflow-hidden rounded-full">
                    <Image
                      width={200}
                      src={product.imgSrc}
                      className="w-full mb-4 transition-transform duration-300 ease-in-out hover:scale-110"
                      alt={`Product ${index + 1}`}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Cacti Plant</h3>
                  <span className="text-lg font-bold mb-4">$19.99</span>
                  <button className="bg-green-400 text-white px-4 py-2 rounded-2xl">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
            <div className="py-12 text-center" data-aos="fade-up"
              data-aos-duration="3000">
              <button className="px-6 py-2 bg-green-400 hover:bg-green-600 text-white rounded-md" onClick={() => loadMore()} >VIEW ALL MENU</button>
            </div>
          </div>
        </section>




        {/* Contact Section */}
        <section className="py-16 bg-green-50" id="contact">
          <div className="container mx-auto grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Reach out to us today</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Call us for instant support</h3>
                  <p className="text-sm">📞 +999 888 777</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Write us by mail</h3>
                  <p className="text-sm">📧 user@email.com</p>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <input type="email" placeholder="Email" className="w-full p-4 border rounded-lg" />
              <input type="text" placeholder="Subject" className="w-full p-4 border rounded-lg" />
              <textarea placeholder="Message" className="w-full p-4 border rounded-lg"></textarea>
              <button className="bg-green-500 text-white px-6 py-3 rounded-lg">Send Message</button>
            </form>
          </div>
        </section>


      </main>


    </div>
  )
}

export default HousePlant