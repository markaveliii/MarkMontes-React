import React from 'react'
import Banner from './Banner'


function Section({bannerColor, bannerBG, bgImage, bgColor, title, text}) {
  return (
    // container
        <div className='snap-y snap-mandatory h-screen w-screen overflow-scroll scroll-smooth'>
            <Banner bgImage = {bannerBG} title = {title} bgColor={bgColor}/>
            <div className={`
                    ${bgImage}
                    '
                    bg-cover
                    flex 
                    items-center 
                    justify-center 
                    snap-start 
                    bg-stone-600 
                    h-4/5
                    w-screen
                    text-white
                    '
                    `}>
                        <div className={`
                            ${bgColor}
                            'h-auto
                            w-4/5 
                            rounded-lg
                            opacity-80 
                            grid
                            grid-cols-3
                            `}>
                            <p className='text-white p-20'>{text}</p>
                            <p className='text-white p-20'>{text}</p>
                            <p className='text-white p-20'>{text}</p>

                        </div>
                </div>
        </div>
  )
}

export default Section