import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Work = () => {
  return (
    <div id='work' className='w-full px-[12%] py-16 scroll-mt-20'>
      <div className='text-center'>
        <h4 className='mb-2 text-lg font-family-ovo text-orange-500 uppercase tracking-widest'>
          My portfolio
        </h4>
        <h2 className='text-5xl font-family-ovo bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent'>
          My latest work
        </h2>
        <p className='max-w-2xl mx-auto mt-5 mb-12 font-family-ovo text-gray-600 dark:text-gray-400 leading-relaxed'>
          Welcome to my web development portfolio! Explore a collection of projects
          showcasing my expertise in building high-performance, visually stunning applications.
        </p>
      </div>

      {/* Projects Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-10 dark:text-black'>
        {workData.map((project, index) => (
          <div 
            key={index} 
            className='relative aspect-square bg-no-repeat bg-cover bg-center rounded-lg cursor-pointer group overflow-hidden shadow-md'
            style={{backgroundImage: `url(${project.bgImage})`}}
          >
            {/* Hover Overlay / Project Info Box */}
            <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 group-hover:shadow-lg border-[0.5px] border-gray-200'>
                <div>
                    <h2 className='font-semibold text-gray-800'>{project.title}</h2>
                    <p className='text-xs text-gray-600'>{project.description}</p>
                </div>
                {/* Icon Circle */}
                <div className='border border-black w-9 aspect-square rounded-full flex items-center justify-center shadow-[2px_2px_0px_#000] group-hover:bg-orange-400 transition-all duration-300'>
                    <Image src={assets.send_icon} alt='view project' className='w-5'/>
                </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <a 
        href="" 
        className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-gray-800'
      >
        Show more 
        <Image src={assets.right_arrow_bold} alt='Right arrow' className='w-4'/>
      </a>
    </div>
  )
}

export default Work