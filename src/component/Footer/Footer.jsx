import React from 'react'
import visa1 from '../../assest/visa/card1.png'
import visa2 from '../../assest/visa/card2.png'
import visa3 from '../../assest/visa/card3.png'
import visa4 from '../../assest/visa/card4.png'
import Image from 'next/image'
function Footer() {
  return (
    <div>
      <footer className="bg-green-400 py-10">
        <div className=" ml-20">
          <div className="flex flex-wrap justify-between gap-8">
            {/* Logo and Subscription */}
            <div className="w-full md:w-1/3">
              <a href="#" className="flex items-center mb-4  text-xl font-semibold">
                <i className="ri-leaf-line mr-2"></i> Plantex
              </a>
              <h3 className="text-lg font-semibold mb-4">Subscribe to our newsletter to stay updated</h3>
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
                />
                <button className="px-4 py-2 bg-white text-green-500 rounded-lg hover:bg-gray-100">
                  Subscribe <i className="ri-arrow-right-up-line ml-2"></i>
                </button>
              </div>
            </div>

            {/* Address Section */}
            <div className="w-full md:w-1/4">
              <h3 className="text-lg font-semibold mb-4">Our Address</h3>
              <ul className="space-y-2 text-white">
                <li>1234 - ktm</li>
                <li>ktm - 43210</li>
                <li>123-456-789</li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="w-full md:w-1/4">
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-white">
                <li>+977-9888877766</li>
                <div className="flex gap-4 mt-2">
                  <a href="https://www.facebook.com/" className="text-white text-xl">
                    <i className="ri-facebook-fill"></i>
                  </a>
                  <a href="https://www.instagram.com/" className="text-white text-xl">
                    <i className="ri-instagram-line"></i>
                  </a>
                  <a href="https://twitter.com/" className="text-white text-xl">
                    <i className="ri-twitter-fill"></i>
                  </a>
                </div>
              </ul>
            </div>

            {/* Payment Section */}
            <div className="w-full md:w-1/4">
              <h3 className="text-lg font-semibold mb-4">We accept all credit cards</h3>
              <div className="flex gap-4">
                <Image src={visa1} alt="visa" className="w-12 h-8" />
                <Image src={visa2} alt="visa" className="w-12 h-8" />
                <Image src={visa3} alt="visa" className="w-12 h-8" />
                <Image src={visa4} alt="visa" className="w-12 h-8" />
              </div>
            </div>
          </div>
          <p className="text-center font-bold mt-8">© Root. All rights reserved</p>
        </div>
      </footer>



    </div>
  )
}

export default Footer