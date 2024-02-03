import React from 'react'
import { Form } from 'react-bootstrap';

function BlogForm() {
  return (


    <>
   <div className="container mx-auto mt-24 relative">
    <img src="" alt="" />
   <h2 className="text-2xl font-bold mb-6">Write Your Blog</h2>
   <Form>
   <div className='sm:ml-[150px]'>
     <label htmlFor=""><i class="fa-regular fa-images fa-xl mr-4"></i></label>
     <input type="text" placeholder='Title' className='text-3xl border-none p-5 w-[70vw] focus:outline-none'  />
   </div>
    <div className='ml-16 sm:ml-56'>
        <textarea className='text-xl   border-none  w-[70vw] focus:outline-none' placeholder='Start typing your blog post....' name="" id="" cols="50" rows="10"></textarea>
    </div>
    <button className='btn btn-success sm:absolute top-5 right-10'>Publish</button>
   </Form>
   </div>
    
    </>

);
};
  


export default BlogForm