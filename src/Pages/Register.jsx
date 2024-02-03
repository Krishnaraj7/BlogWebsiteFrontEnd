import React from 'react'
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-slate-700 text-white p-8 rounded-md shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Choose a username"
              className="w-full border-b-2 border-gray-300 py-2 px-2 focus:outline-none focus:border-blue-500 transition duration-300"

            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-gray-700">
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="Enter your email"
              className="w-full border-b-2 border-gray-300 py-2 px-2 focus:outline-none focus:border-blue-500 transition duration-300"
             
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Choose a password"
              className="w-full border-b-2 border-gray-300 py-2 px-2 focus:outline-none focus:border-blue-500 transition duration-300"
              
            />
          </div>
          <button
            type="button"
            className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600"
            
          >
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register