"use client"
import React, { useState } from 'react'
import './slider.css'
import Image from 'next/image'
import slide1 from '../../assest/image/outdoor/product1.png'
import slide2 from '../../assest/image/outdoor/product2.png'
import slide3 from '../../assest/image/outdoor/product3.png'
import data from '../../app/data'

// import slide4 from '../../assest/image/outdoor/product4.png'
import bg from '../../assest/image/outdoor/about.png'
import Link from 'next/link'

function Slider() {
  const [noOfElement, setnoOnElement] = useState(6)
  const loadMore = () => {
    setnoOnElement(noOfElement + noOfElement)
  }
  const slice = data.outDoor.slice(0, noOfElement)
  return (
    <div className="cont ">
      <div className=" p-7 opacity-95">

        <div className="text-center mb-10" data-aos="zoom-in-up">
          <h2 className='text-6xl mb-4'>Amazing & Beautyfull</h2>
          <h6 className='text-xs mb-8 '>OUR FAVORIT flower</h6>
          <p className='text-sm leading-6 text-blue-950 font-Lobster'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Ratione, soluta. lore dfkvskd consectetur adipisicing
            <br /> elit consectetur adipisicing elit
          </p>
        </div>

      </div>
      <div className="card__container mt-10" data-aos="zoom-in">

        {/* <article className="card__article bg-green-300">
          <Image src={slide1} alt="image" className="card__img" />
          <div className="card__data">
            <h3 className="card__title">Elegant <br /> Queen Bee</h3>
            <span className="card__price">$5999</span>
          </div>
          <Image src={bg} alt="image" className="card__bg" />
          <Link href="#" className="card__button bg-green-500 text-white">
            View More <i className="ri-arrow-right-line" />
          </Link>

        </article> */}

        {slice.map((item, index) => {
          return (
            <article className="card__article bg-green-300" key={index}>
              <Image src={item.imgSrc} alt="image" className="card__img" />
              <div className="card__data">
                <h3 className="card__title">Elegant <br /> Queen Bee</h3>
                <span className="card__price">$5999</span>
              </div>
              <Image src={bg} alt="image" className="card__bg" />
              <Link href="#" className="card__button bg-green-500 text-white">
                View More <i className="ri-arrow-right-line" />
              </Link>

            </article>
          )
        })}


        {/* <article className="card__article bg-green-300">
          <Image src={slide2} alt="image" className="card__img" />
          <div className="card__data">
            <h3 className="card__title">Mechanical Magic <br /> Butterfly</h3>
            <span className="card__price">$3999</span>
          </div>
          <Image src={bg} alt="image" className="card__bg" />
          <Link href="#" className="card__button bg-green-500 text-white">
            View More <i className="ri-arrow-right-line" />
          </Link>
        </article>

        <article className="card__article bg-green-300">
          <Image src={slide3} alt="image" className="card__img" />
          <div className="card__data">
            <h3 className="card__title">Wonderful <br /> Flower Beetle</h3>
            <span className="card__price">$8999</span>
          </div>
          <Image src={bg} alt="image" className="card__bg" />
          <Link href="#" className="card__button bg-green-500 text-white">
            View More <i className="ri-arrow-right-line" />
          </Link>
        </article>

        <article className="card__article bg-green-300">
          <Image src={slide3} alt="image" className="card__img" />
          <div className="card__data">
            <h3 className="card__title">Wonderful <br /> Flower Beetle</h3>
            <span className="card__price">$8999</span>
          </div>
          <Image src={bg} alt="image" className="card__bg" />
          <Link href="#" className="card__button bg-green-500 text-white">
            View More <i className="ri-arrow-right-line" />
          </Link>
        </article>
        <article className="card__article bg-green-300">
          <Image src={slide3} alt="image" className="card__img" />
          <div className="card__data">
            <h3 className="card__title">Wonderful <br /> Flower Beetle</h3>
            <span className="card__price">$8999</span>
          </div>
          <Image src={bg} alt="image" className="card__bg" />
          <Link href="#" className="card__button bg-green-500 text-white">
            View More <i className="ri-arrow-right-line" />
          </Link>
        </article>

        <article className="card__article bg-green-300">
          <Image src={slide3} alt="image" className="card__img" />
          <div className="card__data">
            <h3 className="card__title">Wonderful <br /> Flower Beetle</h3>
            <span className="card__price">$8999</span>
          </div>
          <Image src={bg} alt="image" className="card__bg" />
          <Link href="#" className="card__button bg-green-500 text-white">
            View More <i className="ri-arrow-right-line" />
          </Link>
        </article> */}



      </div>
      <div className="py-12 text-center" data-aos="fade-up"
        data-aos-duration="3000">
        <button className="px-6 py-2 bg-green-700 hover:bg-green-600 text-white rounded-md" onClick={() => loadMore()} >VIEW ALL MENU</button>
      </div>
      
    </div>

  )
}

export default Slider