import React from 'react';
import user from '../assets/3.jpg';


function Profile() {
  return (
    <div className='flex h-screen bg-gray-100'>
      <aside className='w-1/4 bg-white p-6 shadow-md'>
        <img src={user} alt='Profile' className='w-20 h-20 rounded-full object-cover mb-4' />
        <h2 className='text-xl font-semibold text-gray-800'>Dulquer</h2>
        <p className='text-gray-600'>dq@example.com</p>
        <ul className='mt-6'>
          <li className='mb-2'>
            <a href='#' className='text-blue-500 hover:underline'>
              Account Settings
            </a>
          </li>
          <li className='mb-2'>
            <a href='#' className='text-blue-500 hover:underline'>
              Security
            </a>
          </li>
          <li className='mb-2'>
            <a href='#' className='text-blue-500 hover:underline'>
              Notifications
            </a>
          </li>
        </ul>
      </aside>
      <div className='flex-1 p-8'>
        <h2 className='text-2xl font-bold mb-6'>Account Settings</h2>
        <form>
          <div className='mb-4'>
            <label htmlFor='username' className='text-gray-700'>
              Username
            </label>
            <input
              type='text'
              id='username'
              placeholder='Enter your new username'
              className='w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300'
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='email' className='text-gray-700'>
              Email
            </label>
            <input
              type='text'
              id='email'
              placeholder='Enter your new email'
              className='w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300'
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='email' className='text-gray-700'>
             Password
            </label>
            <input
              type='password'
              id='password'
              placeholder='Enter your new Password'
              className='w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300'
            />
          </div>
          <button className='bg-slate-800 text-white py-2 px-4 rounded-full hover:bg-blue-600'>
            Update Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
