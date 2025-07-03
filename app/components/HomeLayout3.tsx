import React from 'react'
import Navbar from './Navbar'
import Hero3 from './componentsThree/Hero3'
import Footer2 from './componentstwo/Footer2'
import { Content3 } from './componentsThree/Content3'

export default function HomeLayout3() {
  return (
    <div>
      <Navbar />
     <div className=''>
       <Hero3 />
     </div>
     <div className='w-11/12 mx-auto min-h-[70vh]'>
      <Content3 />
     </div>
      <Footer2 />
    </div>
  )
}
