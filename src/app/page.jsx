import Image from "next/image";

import '../app/globals.css'
import Mainsection from '../component/Mainsection/Mainsection'
import Service from '../component/Services/Service'
import About from '../component/About/About'
import Popular from '../component/Popular/Popular'
import Review from '../component/Review/Review'



export default function Home() {
  
  return (
    <>
      <Mainsection />
      <Service />
      <About />
      <Popular />
      <Review />
    </>
  )
}
