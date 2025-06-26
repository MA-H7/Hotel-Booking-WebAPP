import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { roomsDummyData, assets, facilityIcons, roomCommonData } from '../assets/assets';
import StarRating from '../components/StarRating';

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const selectedRoom = roomsDummyData.find((room) => room._id === id);
    if (selectedRoom) {
      setRoom(selectedRoom);
      setMainImage(selectedRoom.images[0]);
    }
  }, [id]);

  return room && (
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
      {/* Room Title */}
      <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
        <h1 className='text-3xl md:text-4xl font-playfair'>
          {room.hotel.name} <span className='font-inter text-sm'>({room.roomType})</span>
        </h1>
        <p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full'>20% OFF</p>
      </div>

      {/* Rating */}
      <div className='flex items-center gap-1 mt-2'>
        <StarRating />
        <p className='ml-2'>200+ reviews</p>
      </div>

      {/* Address */}
      <div className='flex items-center gap-1 text-gray-500 mt-2'>
        <img src={assets.locationIcon} alt="location-icon" className='w-4 h-4' />
        <span>{room.hotel.address}</span>
      </div>

      {/* Images */}
      <div className='flex flex-col lg:flex-row mt-6 gap-6'>
        <div className='lg:w-1/2 w-full'>
          <img src={mainImage} alt="Room" className='w-full rounded-xl shadow-lg object-cover' />
        </div>
        <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
          {room.images.length > 1 &&
            room.images.map((image, index) => (
              <img
                key={index}
                onClick={() => setMainImage(image)}
                src={image}
                alt="Room Thumbnail"
                className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage === image ? 'outline outline-2 outline-orange-500' : ''}`}
              />
            ))}
        </div>
      </div>

      {/* Highlights */}
      <div className='flex flex-col md:flex-row md:justify-between mt-10'>
        <div className='flex flex-col'>
          <h1 className='text-3xl md:text-4xl font-playfair'>Experience Luxury Like Never Before</h1>
          <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
            {room.amenities.map((item, index) => (
              <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100'>
                <img src={facilityIcons[item]} alt={item} className='w-5 h-5' />
                <p className='text-xs'>{item}</p>
              </div>
            ))}
          </div>
        </div>
        <p className='text-2xl font-medium'>${room.pricePerNight}/night</p>
      </div>

      {/* Form */}
      <form className='flex flex-col md:flex-row justify-between items-start md:items-center bg-white shadow-[0_0_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl'>
        <div className='flex flex-col md:flex-row flex-wrap items-start md:items-center gap-4 md:gap-10 text-gray-500 w-full md:w-auto'>
          <div className='flex flex-col'>
            <label htmlFor="checkInDate" className='font-medium'>Check-In</label>
            <input type="date" id="checkInDate" className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="checkOutDate" className='font-medium'>Check-Out</label>
            <input type="date" id="checkOutDate" className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="guests" className='font-medium'>Guests</label>
            <input type="number" id="guests" placeholder="0" min="1" className='max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required />
          </div>
        </div>
        <button type='submit' className='bg-black text-white mt-6 md:mt-0 md:ml-6 px-14 py-4 text-lg rounded-md hover:opacity-90 active:scale-95 transition-all'>
          Book Now
        </button>
      </form>

      {/* Specs */}
      <div className='mt-24 space-y-4'>
        {roomCommonData.map((spec, index) => (
          <div key={index} className='flex items-start gap-2'>
            <img src={spec.icon} alt={`${spec.title}-icon`} className='w-6' />
            <div>
              <p className='text-base'>{spec.title}</p>
              <p className='text-gray-500'>{spec.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Notes */}
      <div className='max-w-3xl border-y border-gray-300 my-16 py-10 text-gray-500'>
        <p>Guests will be allocated on the ground floor according to availability. The price quoted is for two guests. Please mark the number of guests to get the exact price for groups.</p>
      </div>

      {/* Host Info */}
      <div className='flex flex-col items-start gap-4'>
        <div className='flex gap-4'>
          <div>
            <p className='text-lg md:text-xl'>Hosted by {room.hotel.name}</p>
            <div className='flex items-center mt-1'>
              <StarRating />
              <p className='ml-2'>200+ reviews</p>
            </div>
          </div>
        </div>
        <button type='button' className='bg-primary text-white px-6 py-2.5 mt-4 rounded hover:bg-primary-dull transition-all cursor-pointer'>
          Contact Now
        </button>
      </div>
    </div>
  );
};

export default RoomDetails;
