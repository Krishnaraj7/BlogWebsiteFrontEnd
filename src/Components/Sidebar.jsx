import React from 'react'
import { Container } from 'react-bootstrap'

function Sidebar() {
  return (
   <>
         <div style={{borderLeft:'1px solid gray'}} className='w-[20%] mb-4 hidden lg:flex   '>
             <Container>


               
           <div className='w-10 md:w-40'>
             <h1 style={{borderBottom:'1px solid gray'}} className=" text-center text-2xl font-bold text-blue-900
             ">CATEGORIES</h1>
            
              <ul>
                  <li  className=' inline-block w-[50%] mt-7 font-semibold '>Life</li>
                  <li  className=' inline-block w-[50%] mt-7 font-semibold'>Music</li>
                  <li  className=' inline-block w-[50%] mt-7 font-semibold'>Sport</li>
                  <li  className=' inline-block w-[50%] mt-7 font-semibold'>Style</li>
                  <li  className=' inline-block w-[50%] mt-7 font-semibold'>Tech</li>
                  <li  className=' inline-block w-[50%] mt-7 font-semibold'>Travel</li>
                  <li  className=' inline-block w-[50%] mt-7 font-semibold'>Entertainment</li>
              </ul>
            
           </div>
           <div className='mt-5 w-50 md:w-40'>
             <h1 style={{borderBottom:'1px solid gray'}} className=" text-2xl font-bold text-blue-900
             ">FOLLOW</h1>
            
             <div className='mt-3'>
            
             <i className="fa-brands fa-instagram fa-xl ml-2"></i>
             <i className="fa-brands fa-facebook fa-xl ml-2"></i>
             <i className="fa-brands fa-twitter fa-xl ml-2"></i>
             <i className="fa-brands fa-pinterest fa-xl ml-2"></i>
            
             </div>
            
           </div>
        
    </Container>
         </div>
   </>
  )
}

export default Sidebar