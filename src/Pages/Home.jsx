import React from 'react'
import banner from '../assets/mountain.png'
import Content from '../Components/Content'
import Posts from '../Components/Posts'
import Sidebar from '../Components/Sidebar'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'





function Home() {
  return (
   <>
    <div className='relative  sm:px-20 mt-6'>
      <img src={banner} alt="" width={'100%'} className=' h-[400px]' />

      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
        <h2 className='text-sm sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-900'>Write, Share, Inspire!</h2>
        <Link to={'/blogpage'}>
          <button className='bg-slate-800 text-white   px-3 py-2 mt-4  text-[15px] '>
           Start blogging
          </button>
        </Link>
      </div>
    </div>

    <Content />

    <div className='flex mt-16'>
        <Posts />
        <Sidebar />
    </div>

    <Footer />
 
   </>
  )
}

export default Home