import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='w-full px-[12%] py-16 scroll-mt-20 '>
      <div className='text-center'>
         <h4 className='mb-2 text-lg font-family-ovo text-orange-500 uppercase tracking-widest'>
          Connect with me
        </h4>
        <h2 className='text-5xl font-family-ovo bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent'>
          Get in touch
        </h2>
        <p className='max-w-2xl mx-auto mt-5 mb-12 font-family-ovo text-gray-600 dark:text-gray-400 leading-relaxed'>
          I'd love to hear from you! If you have any questions, comments, or feedback,
          please use the form below.  
        </p>
      </div> 
        <form className='max-w-2xl mx-auto '>
            <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
               <input type="text" placeholder='Enter your name' required 
               className='flex-1 p-3 outline-none border-[0.5px] border-gray-400
               rounded-md bg-white'/>
               <input type="text" placeholder='Enter your name' required
               className='flex-1 p-3 outline-none border-[0.5px] border-gray-400
               rounded-md bg-white'/>
            </div>
            <textarea name="" rows={6} placeholder='Enter your message' required id=""
            className='w-full p-4 outline-none border-[0.5px] border-gray-400
               rounded-md bg-white mb-6'></textarea>
            <button type='submit' 
            className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80
            text-white rounded-full mx-auto hover:bg-black duration-500'>
                Submit now <Image src={assets.right_arrow_white} alt='' className='w-4'/></button>
        </form>
       
    </div>
  )
}

export default Contact