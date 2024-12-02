'use client'
import React, { useRef } from 'react'
import Image from 'next/image'

import leaf1 from '../../assest/image/leaf-1.png'
import leaf2 from '../../assest/image/leaf-2.png'
import Link from 'next/link'


function Navbar() {
  const toggleCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    }
    else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }

  }
  const ref = useRef()

  return (
    <>

      <div className="flex  flex-col relative md:flex-row md:justify-start justify-center items-center my-1 p-3 shadow-md ">
        <Link href={'/'}>
          <div className="logo mx-5 text-3xl font-bold" > .Root</div>
        </Link>

        <div className="nav ">
          <ul className='flex items-center space-x-6 font-bold md:text-sm'>
            <Link href={'/HousePlant'}> <li>Houseplants</li> </Link>
            <Link href={'/Outdoor'}> <li>Outdoor & Patio</li> </Link>
            <Link href={'/Gift'}> <li>Gift</li> </Link>
            <Link href={'/NewIn'}> <li> New Photos</li> </Link>
          </ul>
        </div>

        <div onClick={toggleCart} className="absolute right-0 top-0 mx-5 text-3xl mt-5 cursor-pointer">

          <i className="ri-menu-3-line" id='humgurger'></i>
        </div>

        <div ref={ref} className="sidebar z-50 w-27 h-full fixed top-0 right-0 bg-green-100 py-20 px-8 transform transition-transform translate-x-full" >
          <h2 className='font-bold text-xl text-center'>Shopping Cart</h2>

          <span onClick={toggleCart} className='absolute top-5 right-2 cursor-pointer text-2xl text-green-400'>     <i className="ri-close-circle-fill"></i></span>

          <ul className='flex flex-col items-center gap-8 lg:flex-row mt-10 fixed'>

            <li>
              <Link href="#" className='nav-link'>Home</Link>
            </li>

            <li>
              <Link href="#" className='nav-link'>Blog</Link>
            </li>
            <li>
              <Link href="#" className='nav-link'>Photos</Link>
            </li>
        
              <Link href={'/Contact'} className='nav-link'>Contact</Link>
      
          </ul>


          <div className="absolute bottom-0 -right-10 opacity-90 lg:hidden">
            <Image src={leaf1} alt='leaf' className='w-32' />
          </div>
          <div className="absolute -top-5 -left-5 rotate-90 opacity-90 lg:hidden">
            <Image src={leaf2} alt='leaf' className='w-32' />
          </div>
        </div>
        
      </div>

      
    </>
  )
}

export default Navbar
