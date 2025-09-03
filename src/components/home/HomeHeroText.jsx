import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[laurasana] mt-72 lg:mt-0 pt-7 text-center'>
      <div className='lg:text-[9.5vw] text-[11.5vw] uppercase lg:leading-[8vw] leading-[10vw] flex items-center justify-center'>
        L'étincelle
      </div>
      <div className='lg:text-[9.5vw] text-[11.5vw] uppercase lg:leading-[8vw] leading-[10vw] flex  items-start justify-center'>
        qui
        <div className='h-[8vw] rounded-full -mt-2 overflow-hidden'>
          <Video />
        </div>
        génère
      </div>
      <div className='lg:text-[9.5vw] text-[11.5vw] uppercase lg:leading-[8vw] leading-[10vw] flex items-center justify-center'>
        la créativité
      </div>
    </div>
  )
}

export default HomeHeroText