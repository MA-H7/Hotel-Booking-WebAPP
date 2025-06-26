import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RandomUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const res = await axios.get('https://randomuser.me/api/?results=5'); // Fetch 5 users
      setUsers(res.data.results);
    } catch (err) {
      setError('Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <p className="text-gray-500">Loading users...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (users.length === 0) return <p>No users found.</p>;

  return (
    <div className="my-10 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-blue-700">Random Users</h2>
      <div 
        className="border border-gray-300 rounded-lg p-4 shadow-sm"
        style={{ maxHeight: '320px', overflowY: 'auto' }}
      >
        <table className="w-full table-auto text-left">
          <thead className="bg-gray-50 sticky top-0">
            <tr>
              <th className="py-2 px-4 font-medium text-gray-800">Avatar</th>
              <th className="py-2 px-4 font-medium text-gray-800">Name</th>
              <th className="py-2 px-4 font-medium text-gray-800">Email</th>
              <th className="py-2 px-4 font-medium text-gray-800 max-sm:hidden">Country</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="py-2 px-4">
                  <img
                    src={user.picture.thumbnail}
                    alt={user.name.first}
                    className="rounded-full"
                    width={40}
                    height={40}
                  />
                </td>
                <td className="py-2 px-4">{user.name.first} {user.name.last}</td>
                <td className="py-2 px-4 break-words">{user.email}</td>
                <td className="py-2 px-4 max-sm:hidden">{user.location.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RandomUsers;
