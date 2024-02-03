import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-slate-800 text-white p-8 rounded-md shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="text-gray-200">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className="w-full border-b-2 border-gray-300 py-2 px-2 focus:outline-none focus:border-blue-500 transition duration-300"
              
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="text-gray-200">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full border-b-2 border-gray-300 py-2 px-2 focus:outline-none focus:border-blue-500 transition duration-300"
            
            />
          </div>
          <button
            type="button"
            className="bg-gray-300 text-black py-2 px-4 rounded-full hover:bg-blue-600"
           
          >
            Login
          </button>
        </form>
        <p className='mt-4'>
        Don't have an account?{' '}
        <Link to='/register' className='text-blue-500 hover:underline'>
          Register here
        </Link>
      </p>
      </div>
    </div>
  )
}

export default Login