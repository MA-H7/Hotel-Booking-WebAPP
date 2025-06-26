import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Title from '../../components/Title';
import { assets } from '../../assets/assets';

const Dashboard = () => {
  const [randomUsers, setRandomUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [errorUsers, setErrorUsers] = useState('');

  const roomTypes = ['Single Bed', 'Double Bed', 'Luxury Room', 'Family Suite'];
  const generateRandomAmount = () => (Math.random() * 500 + 50).toFixed(2);
  const getRandomStatus = () => (Math.random() > 0.5 ? 'Completed' : 'Pending');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get('https://randomuser.me/api/?results=3'); // only 3 users
        const enrichedUsers = res.data.results.map((user) => ({
          ...user,
          roomType: roomTypes[Math.floor(Math.random() * roomTypes.length)],
          totalAmount: generateRandomAmount(),
          isPaid: getRandomStatus(),
        }));
        setRandomUsers(enrichedUsers);
      } catch {
        setErrorUsers('Failed to fetch users');
      } finally {
        setLoadingUsers(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="px-4 py-6 max-w-5xl mx-auto pb-32">
      <Title
        align="left"
        font="outfit"
        title="Dashboard"
        subTitle="Monitor your room listings, track bookings and analyse revenue all in one place."
      />

      {/* Summary Cards */}
      <div className="flex gap-4 my-6">
        <div className="bg-primary/3 border border-primary/10 rounded flex p-3 pr-6">
          <img src={assets.totalBookingIcon} alt="" className="max-sm:hidden h-8" />
          <div className="flex flex-col sm:ml-3 font-medium text-sm">
            <p className="text-blue-500 text-base">Total Bookings</p>
            <p className="text-neutral-400">{randomUsers.length}</p>
          </div>
        </div>

        <div className="bg-primary/3 border border-primary/10 rounded flex p-3 pr-6">
          <img src={assets.totalRevenueIcon} alt="" className="max-sm:hidden h-8" />
          <div className="flex flex-col sm:ml-3 font-medium text-sm">
            <p className="text-blue-500 text-base">Total Revenue</p>
            <p className="text-neutral-400">
              $
              {randomUsers
                .reduce((sum, user) => sum + parseFloat(user.totalAmount || 0), 0)
                .toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      {/* Recent Bookings using public API for users */}
      <section className="mb-10">
        <h2 className="text-xl text-blue-950/70 font-medium mb-5">Recent Bookings</h2>

        {loadingUsers && <p className="text-gray-500">Loading users...</p>}
        {errorUsers && <p className="text-red-500">{errorUsers}</p>}
        {!loadingUsers && !errorUsers && randomUsers.length === 0 && <p>No users found.</p>}

        {!loadingUsers && !errorUsers && randomUsers.length > 0 && (
          <div className="w-full text-left border border-gray-300 rounded-lg overflow-x-auto">
            <table className="w-full table-auto">
              <thead className="bg-gray-50 sticky top-0">
                <tr>
                  <th className="py-2 px-4 font-medium text-gray-800">User</th>
                  <th className="py-2 px-4 font-medium text-gray-800 max-sm:hidden">Room</th>
                  <th className="py-2 px-4 font-medium text-gray-800 text-center">Amount</th>
                  <th className="py-2 px-4 font-medium text-gray-800 text-center">Status</th>
                  <th className="py-2 px-4 font-medium text-gray-800 max-sm:hidden">Country</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {randomUsers.map((user, index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="py-2 px-4 flex items-center gap-2">
                      <img
                        src={user.picture.thumbnail}
                        alt={user.name.first}
                        className="rounded-full"
                        width={32}
                        height={32}
                      />
                      {user.name.first} {user.name.last}
                    </td>
                    <td className="py-2 px-4 max-sm:hidden">{user.roomType}</td>
                    <td className="py-2 px-4 text-center">${user.totalAmount}</td>
                    <td className="py-2 px-4 text-center">
                      <span
                        className={`py-1 px-3 text-xs rounded-full ${
                          user.isPaid === 'Completed'
                            ? 'bg-green-200 text-green-700'
                            : 'bg-yellow-200 text-yellow-700'
                        }`}
                      >
                        {user.isPaid}
                      </span>
                    </td>
                    <td className="py-2 px-4 max-sm:hidden">{user.location.country}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
};

export default Dashboard;
