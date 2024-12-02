import React from 'react'
import './green.css'
import Image from 'next/image'
import gift1 from '../../assest/image/cart-1.png'
import gift2 from '../../assest/image/cart-2.png'
import gift3 from '../../assest/image/cart-3.png'
import gift4 from '../../assest/image/cart-4.png'
import gift5 from '../../assest/image/product1.png'
import gift6 from '../../assest/image/product2.png'
import gift7 from '../../assest/image/product3.png'
import gift8 from '../../assest/image/product4.png'
import gift9 from '../../assest/image/product5.png'
import gift10 from '../../assest/image/product6.png'
import Link from 'next/link'
function GreenGift() {
  return (
    <div>


      <div className="cont ">
        <div className=" p-7 opacity-95">
         <div className="text-center mb-10">
            <h4 className='text-6xl mb-4'>Green Gifts They’ll Love </h4>
            <h4 className='text-xs mb-8 '>OUR FAVORIT Gift</h4>
        
          </div>

        </div>
        <div className="card__container mt-10">

          <article className="card__article">
            <Image src={gift1} alt="image" className="card__img w-full" />
            <div className="card__data bg-green-200">
              <span className="card__description">Chooge your faviourite Gift</span>
              <h2 className="card__title">BirthDay Gift</h2>
              <Link href="#" className="card__button">Read More</Link>
            </div>
          </article>

          <article className="card__article">
            <Image src={gift2} alt="image" className="card__img w-full" />
            <div className="card__data bg-green-200">
              <span className="card__description">Chooge your faviourite Gift</span>
              <h2 className="card__title">Anniversary Gift</h2>
              <Link href="#" className="card__button">Read More</Link>
            </div>
          </article>

          <article className="card__article">
            <Image src={gift3} alt="image" className="card__img w-full" />
            <div className="card__data bg-green-200">
              <span className="card__description">Chooge your faviourite Gift</span>
              <h2 className="card__title">Valentine's Gift</h2>
              <Link href="#" className="card__button">Read More</Link>
            </div>
          </article>

          <article className="card__article">
            <Image src={gift4} alt="image" className="card__img w-full" />
            <div className="card__data bg-green-200">
              <span className="card__description">Chooge your faviourite Gift</span>
              <h2 className="card__title">BirthDay Gift</h2>
              <Link href="#" className="card__button">Read More</Link>
            </div>
          </article>

          <article className="card__article">
            <Image src={gift5} alt="image" className="card__img w-full" />
            <div className="card__data bg-green-200">
              <span className="card__description">Chooge your faviourite Gift</span>
              <h2 className="card__title">Anniversary Gift</h2>
              <Link href="#" className="card__button">Read More</Link>
            </div>
          </article>

          <article className="card__article">
            <Image src={gift6} alt="image" className="card__img w-full" />
            <div className="card__data bg-green-200">
              <span className="card__description">Chooge your faviourite Gift</span>
              <h2 className="card__title">Valentine's Gift</h2>
              <Link href="#" className="card__button">Read More</Link>
            </div>
          </article>

          <article className="card__article">
            <Image src={gift7} alt="image" className="card__img w-full" />
            <div className="card__data bg-green-200">
              <span className="card__description">Chooge your faviourite Gift</span>
              <h2 className="card__title">BirthDay Gift</h2>
              <Link href="#" className="card__button">Read More</Link>
            </div>
          </article>
          <article className="card__article">
            <Image src={gift8} alt="image" className="card__img w-full" />
            <div className="card__data bg-green-200">
              <span className="card__description">Chooge your faviourite Gift</span>
              <h2 className="card__title">Anniversary Gift</h2>
              <Link href="#" className="card__button">Read More</Link>
            </div>
          </article>
          <article className="card__article">
            <Image src={gift9} alt="image" className="card__img w-full" />
            <div className="card__data bg-green-200">
              <span className="card__description">Chooge your faviourite Gift</span>
              <h2 className="card__title">Valentine's Gift</h2>
              <Link href="#" className="card__button">Read More</Link>
            </div>
          </article>    
          <article className="card__article">
            <Image src={gift10} alt="image" className="card__img w-full" />
            <div className="card__data bg-green-200">
              <span className="card__description">Chooge your faviourite Gift</span>
              <h2 className="card__title">The Green Path Gift</h2>
              <Link href="#" className="card__button">Read More</Link>
            </div>
          </article>






        </div>
        <div className="py-12 text-center">

          <button className="px-6 py-2 bg-green-700 hover:bg-green-600 text-white rounded-md">VIEW ALL MENU</button>
        </div>
      </div>



    </div>
  )
}

export default GreenGift
