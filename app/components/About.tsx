import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-6 scroll-mt-20'>
      {/* Header Section */}
      <div className='text-center'>
        <h4 className='mb-2 text-lg font-family-ovo text-orange-500 uppercase tracking-widest'>
          Introduction
        </h4>
        <h2 className='text-5xl font-family-ovo font-medium bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent'>
          About me
        </h2>
      </div>

      <div className='flex w-full flex-col lg:flex-row items-center gap-16 my-10'>
        {/* Profile Image with Decorative Border */}
        <div className='relative w-64 sm:w-80'>
          <div className='absolute -inset-2 rounded-3xl bg-gradient-to-tr from-orange-400 to-yellow-200 blur-sm opacity-50'></div>
          <div className='relative bg-white dark:bg-darkTheme rounded-3xl p-2'>
             <Image 
                src={assets.user_image} 
                alt='user' 
                className='w-full rounded-3xl whitescale hover:grayscale-100 transition-all duration-700 ease-in-out cursor-pointer'
             />
          </div>
        </div>

        {/* Content Section */}
        <div className='flex-1'>
          <p className='mb-10 max-w-2xl font-family-ovo text-gray-700 dark:text-gray-300 leading-relaxed text-lg'>
            I am an <span className='text-black dark:text-white font-semibold'>experienced Frontend Developer</span> with strong <span className='text-black dark:text-white font-semibold'>Backend knowledge</span>. 
            I specialize in building web applications where clean UI meets robust server logic. 
            I focus on creating secure, high-performance journeys from the database to the screen. 
            I don’t just build features; I build complete digital solutions.
          </p>

          {/* Info Cards */}
          <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li 
                key={index}
                className='border-[0.5px] border-gray-400 dark:border-gray-600 rounded-xl p-6 cursor-pointer hover:bg-orange-50 dark:hover:bg-gray-800 transition-all duration-500 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(251,146,60,1)] group'
              >
                <Image src={icon} alt={title} className='w-7 group-hover:scale-110 transition-transform duration-300' />
                <h3 className='my-4 font-semibold text-gray-800 dark:text-white'>{title}</h3>
                <p className='text-gray-600 dark:text-gray-400 text-sm leading-5'>{description}</p>
              </li>
            ))}
          </ul>

          {/* Tools Section */}
          <div className='mt-12'>
            <h4 className='mb-6 text-gray-700 dark:text-gray-300 font-family-ovo font-medium'>Tools I use</h4>
            <ul className='flex flex-wrap items-center gap-4 sm:gap-6'>
              {toolsData.map((tool, index) => (
                <li 
                  key={index}
                  className='flex items-center justify-center w-12 sm:w-16 aspect-square border border-gray-300 dark:border-gray-200 rounded-2xl cursor-pointer hover:border-orange-500 dark:hover:border-orange-400 hover:bg-orange-50 dark:hover:bg-gray-800 transition-all duration-500 group'
                >
                  <Image src={tool} alt='tool' className='w-6 sm:w-9 grayscale group-hover:grayscale-0 transition-all' />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About