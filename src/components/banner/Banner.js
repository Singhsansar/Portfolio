import React from 'react'
import Leftbanner from './LeftBanner'
import RightBanner from './RightBanner'

function Banner() {
 
  return (
    <section id='home' className='w-full py-20 flex-row flex font-titleFont border-b-[1px] border-b-black'>
    <Leftbanner />
    <RightBanner />
    </section>
  )
}

export default Banner