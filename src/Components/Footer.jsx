import React from 'react'

function Footer() {
  return (
   <>
  <div className='mt-10'>
  <div className='bg-[#f3eded] w-full p-4 flex flex-col md:flex-row items-center justify-between'>
   <div className='flex'>
     <h3 className='text-2xl font-semibold mb-4 md:mb-0'>BLOG</h3>
     <ul className='flex flex-wrap md:flex-nowrap gap-4 ms-3'>
       <li className='text-lg'>Home</li>
       <li className='text-lg'>About</li>
       <li className='text-lg'>Contact</li>
     </ul>
   </div>
    <p >	&#169; 2024 All Rights Reserved by xyz</p>
  <div className='flex mt-3 sm:mt-0'>
  <i className="fa-brands fa-instagram fa-xl ml-2"></i>
             <i className="fa-brands fa-facebook fa-xl ml-2"></i>
             <i className="fa-brands fa-twitter fa-xl ml-2"></i>
             <i className="fa-brands fa-pinterest fa-xl ml-2"></i>
  </div>
  </div>
 
</div>

   </>
  )
}

export default Footer