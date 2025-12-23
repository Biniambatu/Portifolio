import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div id='services' className='w-full px-[12%] py-16 scroll-mt-20'>
      
      {/* Header Section */}
      <div className='text-center'>
        <h4 className='mb-2 text-lg font-family-ovo text-orange-500 uppercase tracking-widest'>
          What I offer
        </h4>
        <h2 className='text-5xl font-family-ovo bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent'>
          My Services
        </h2>
        <p className='max-w-2xl mx-auto mt-5 mb-12 font-family-ovo text-gray-600 dark:text-gray-400 leading-relaxed'>
          I help businesses build high-performance web applications by combining 
          expert frontend development with scalable backend architecture.
        </p>
      </div>

      {/* Responsive Grid Section */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10'>
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div 
            key={index}
            className='border border-gray-400 dark:border-gray-700 rounded-xl px-8 py-12
              cursor-pointer bg-white dark:bg-transparent
              hover:bg-orange-50 dark:hover:bg-gray-800 
              hover:-translate-y-2 transition-all duration-500 
              hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(251,146,60,1)] 
              group'
          >
            {/* Icon with hover bounce */}
            <div className='bg-orange-100 dark:bg-orange-900/30 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'>
              <Image src={icon} alt={title} className='w-8' />
            </div>

            <h3 className='text-xl my-4 font-semibold text-gray-800 dark:text-white'>
              {title}
            </h3>
            
            <p className='text-sm text-gray-600 dark:text-gray-400 leading-6'>
              {description}
            </p>

            {/* Interactive Link */}
            <a 
              href={link} 
              className='flex items-center gap-2 text-sm mt-6 font-medium text-gray-800 dark:text-gray-300 hover:text-orange-500 transition-colors'
            >
              Read more 
              <Image 
                src={assets.right_arrow} 
                alt='' 
                className='w-4 group-hover:translate-x-2 transition-transform' 
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services