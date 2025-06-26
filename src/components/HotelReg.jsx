import React from 'react';
import { assets } from '../assets/assets';

const HotelReg = () => {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-black/70'>
      <form className='flex bg-white rounded-xl shadow-lg max-w-4xl w-full max-md:mx-4'>

        {/* Left Image */}
        <img
          src={assets.regImage}
          alt="Registration"
          className='w-1/2 rounded-l-xl hidden md:block object-cover'
        />

        {/* Right Form Section */}
        <div className='relative flex flex-col justify-center md:w-1/2 w-full p-8 md:p-10'>

          {/* Close Icon */}
          <img
            src={assets.closeIcon}
            alt="Close"
            className='absolute top-4 right-4 h-5 w-5 cursor-pointer'
          />

          {/* Form Header */}
          <h2 className='text-2xl font-semibold text-center mb-6'>Register Your Hotel</h2>

          {/* Hotel Name */}
          <input
            type="text"
            placeholder="Hotel Name"
            className='mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
          />

          {/* Phone */}
          <input
            type="tel"
            placeholder="Phone"
            className='mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
          />

          {/* Address */}
          <input
            type="text"
            placeholder="Address"
            className='mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
          />

          {/* City Dropdown */}
          <label htmlFor="city" className='mb-2 text-sm font-medium text-gray-700 self-start'></label>
          <select
            id="city"
            className='mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
          >
            <option value="">Select City</option>
            <option value="Dubai">Dubai</option>
            <option value="Singapore">Singapore</option>
            <option value="New York">New York</option>
            <option value="London">London</option>
            
          </select>

          {/* Submit Button */}
          <button
            type="submit"
            className='w-30 bg-black hover:bg-gray-800 text-white font-semibold py-2 rounded-md transition'
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default HotelReg;
