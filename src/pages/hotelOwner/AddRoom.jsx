import React, { useState } from 'react';
import Title from '../../components/Title';
import { assets } from '../../assets/assets';

const AddRoom = () => {
  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null
  });

  const [inputs, setInputs] = useState({
    roomType: '',
    pricePerNight: 0,
    amenities: {
      'Free WiFi': false,
      'Free Breakfast': false,
      'Room Service': false,
      'Mountain View': false,
      'Pool Access': false
    }
  });

  return (
    <form className='p-4 max-w-4xl mx-auto'>
      {/* Page Title */}
      <Title
        align='left'
        font='outfit'
        title='Add Room'
        subTitle='Fill all the details carefully. Give accurate room details, pricing and amenities, enhance the user book experience'
      />

      {/* Upload Area for Images */}
      <p className='text-gray-800 mt-10 font-medium'>Images</p>
      <div className='grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap'>
        {Object.keys(images).map((key) => (
          <label htmlFor={`roomImage${key}`} key={key} className='cursor-pointer'>
            <img
              className='max-h-32 rounded-md border border-gray-300 object-cover opacity-80 hover:opacity-100 transition'
              src={images[key] ? URL.createObjectURL(images[key]) : assets.uploadArea}
              alt={`Room ${key}`}
            />
            <input
              type="file"
              accept="image/*"
              id={`roomImage${key}`}
              hidden
              onChange={(e) => setImages({ ...images, [key]: e.target.files[0] })}
            />
          </label>
        ))}
      </div>

      {/* Room Type & Price */}
      <div className='w-full flex max-sm:flex-col sm:gap-4 mt-4'>
        <div className='flex-1 max-w-48'>
          <p className='text-gray-800 mt-4'>Room Type</p>
          <select
            value={inputs.roomType}
            onChange={(e) => setInputs({ ...inputs, roomType: e.target.value })}
            className='border opacity-70 border-gray-300 mt-1 rounded p-2 w-full'
          >
            <option value="">Select Room Type</option>
            <option value="Single Bed">Single Bed</option>
            <option value="Double Bed">Double Bed</option>
            <option value="Luxury Room">Luxury Room</option>
            <option value="Family Suite">Family Suite</option>
          </select>
        </div>

        <div>
          <p className='mt-4 text-gray-800'>
            Price <span className='text-xs'>/night</span>
          </p>
          <input
            type="number"
            placeholder="0"
            className='border border-gray-300 mt-1 rounded p-2 w-24'
            value={inputs.pricePerNight}
            onChange={(e) =>
              setInputs({ ...inputs, pricePerNight: e.target.value })
            }
          />
        </div>
      </div>

      {/* Amenities */}
      <p className='text-gray-800 mt-6'>Amenities</p>
      <div className='grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3 mt-2 text-gray-700 max-w-md'>
        {Object.keys(inputs.amenities).map((amenity, index) => (
          <div key={index} className='flex items-center gap-2'>
            <input
              type="checkbox"
              id={`amenity${index}`}
              checked={inputs.amenities[amenity]}
              onChange={() =>
                setInputs({
                  ...inputs,
                  amenities: {
                    ...inputs.amenities,
                    [amenity]: !inputs.amenities[amenity]
                  }
                })
              }
            />
            <label htmlFor={`amenity${index}`}>{amenity}</label>
          </div>
        ))}
      </div>

      {/* Submit Button */}
      <button className='bg-primary text-white px-8 py-2 mt-8 rounded cursor-pointer hover:bg-primary/90 transition'>
        Add Room
      </button>
    </form>
  );
};

export default AddRoom;
