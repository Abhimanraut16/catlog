'use client'
import React, { useRef } from 'react'
import Image from 'next/image'

import leaf1 from '../../assest/image/leaf-1.png'
import leaf2 from '../../assest/image/leaf-2.png'
import Link from 'next/link'
// import { link } from 'fs'
// import leaf3 from '../../assest/image/leaf-3.png'
// import leaf4 from '../../assest/image/leaf-4.png'
// import leaf5 from '../../assest/image/leaf-5.png'


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

      <div className="flex flex-col md:flex-row md:justify-start justify-center items-center my-1 p-3 shadow-md ">
        <Link href={'/'}>
          <div className="logo mx-5 text-3xl font-bold" > Logo</div>
        </Link>

        <div className="nav ">
          <ul className='flex items-center space-x-6 font-bold md:text-sm'>
            <Link href='#'> <li>Tshirt</li> </Link>
            <Link href='#'> <li>Hoodies</li> </Link>
            <Link href='#'> <li>Stickers</li> </Link>
            <Link href='#'> <li>Mugs</li> </Link>
          </ul>
        </div>

        <div onClick={toggleCart} className="absolute right-0 top-0 mx-5 text-3xl mt-5 cursor-pointer">

          <i className="ri-menu-3-line" id='humgurger'></i>
        </div>

        <div ref={ref} className="sidebar w-27 h-full absolute top-0 right-0 bg-pink-100 py-10 px-8 transform transition-transform translate-x-full">
          <h2 className='font-bold text-xl text-center'>Shopping Cart</h2>

          <span onClick={toggleCart} className='absolute top-5 right-2 cursor-pointer text-2xl text-pink-500'>     <i class="ri-close-circle-fill"></i></span>

          <ul className='flex flex-col items-center gap-8 lg:flex-row'>

            <li>
              <a href="#" className='nav-link'>Home</a>
            </li>

            <li>
              <a href="#" className='nav-link'>About</a>
            </li>
            <li>
              <a href="#" className='nav-link'>Popular</a>
            </li>
            <li>
              <a href="#" className='nav-link'>Review</a>
            </li>
          </ul>


          <div className="absolute bottom-0 -right-10 opacity-90 lg:hidden">
            <Image src={leaf1} alt='leaf' className='w-32' />
          </div>
          <div className="absolute -top-5 -left-5 rotate-90 opacity-90 lg:hidden">
            <Image src={leaf2} alt='leaf' className='w-32' />
          </div>
        </div>






        {/* <div className="flex mt-8">

            <Link href={'/checkOut'}>
              <button className="flex mr-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-lg"> <IoBagCheckSharp className='m-1' /> Checkout</button>
            </Link>


            <button className="flex mr-2 text-white bg-pink-500 border-0 py-2 p-4 focus:outline-none hover:bg-pink-600 rounded text-lg"> <MdDeleteForever className='m-1 text-xl' /> Clear</button>

          </div> */}


      </div>




      {/* <header id='navbar' className='bg-green-200 fixed w-full top-0 left-0 z-50'>
        <nav className='container flex items-center justify-between h-16 sm:h-20' ref={ref}>
          <div className="font-Lobster sm:text-2xl">Catlog</div>

          <span onClick={toggleCart} className='absolute top-5 right-2 cursor-pointer text-2xl text-pink-500'> 
          <i class="ri-close-circle-fill"></i>
          </span>

          <div id='nav-menu' className="absolute top-0 left-[-100%] min-h-[80vh] w-full bg-green-950/80 backdrop-blur-sm flex justify-center items-center duration-300 overflow-hidden lg:static lg:min-h-fit lg:bg-transparent lg:w-auto">
            <ul className='flex flex-col items-center gap-8 lg:flex-row'>

              <li>
                <a href="#" className='nav-link'>Home</a>
              </li>

              <li>
                <a href="#" className='nav-link'>About</a>
              </li>
              <li>
                <a href="#" className='nav-link'>Popular</a>
              </li>
              <li>
                <a href="#" className='nav-link'>Review</a>
              </li>
            </ul>


            <div className="absolute bottom-0 -right-10 opacity-90 lg:hidden">
              <Image src={leaf1} alt='leaf' className='w-32' />
            </div>
            <div className="absolute -top-5 -left-5 rotate-90 opacity-90 lg:hidden">
              <Image src={leaf2} alt='leaf' className='w-32' />
            </div>
          </div>

          <div className="text-xl sm:text-3xl cursor-pointer z-50">

            <i className="ri-menu-3-line" id='humgurger'> </i>

          </div>


        </nav>

      </header> */}


    </>
  )
}

export default Navbar