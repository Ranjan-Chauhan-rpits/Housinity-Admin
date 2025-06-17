'use client';

import Image from 'next/image';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { useEffect, useState } from 'react';

interface UserType {
  userName: string;
  userEmail: string;
  profileImage?: string;
  id: string;
  token: string;
}

const Navbar = () => {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (err) {
        console.error('Failed to parse user from localStorage', err);
      }
    }
  }, []);

  return (
    <div className='flex justify-end items-center shadow-lg px-10 bg-gray-50 border-b border-gray-300'>
      <div className='w-8 h-8 flex justify-center items-center overflow-hidden rounded-full bg-gray-700'>
        <IoMdNotificationsOutline className='w-6 h-6 text-gray-200' />
      </div>

      <div className='flex justify-between gap-4 m-2 px-6 items-center rounded'>
        <Image
          src={user?.profileImage || 'https://via.placeholder.com/56'}
          alt='profile'
          className='w-14 h-14 rounded-full object-cover'
          width={56}
          height={56}
        />

        <p className='text-slate-800'>{user?.userName || 'Guest'}</p>
      </div>
    </div>
  );
};

export default Navbar;
