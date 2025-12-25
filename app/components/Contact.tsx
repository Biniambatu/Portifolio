import React from 'react'

const Contact = () => {
  return (
    <div id='work' className='w-full px-[12%] py-16 scroll-mt-20'>
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
  )
}

export default Contact