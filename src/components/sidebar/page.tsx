'use client';

import Link from 'next/link';
import { RxDashboard } from 'react-icons/rx';
import { BiBuildingHouse } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { IoSettingsOutline } from 'react-icons/io5';
import { useState } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    {
      href: '/',
      label: 'Dashboard',
      icon: <RxDashboard />,
    },
    {
      href: '/profile',
      label: 'Profile',
      icon: <CgProfile />,
    },
    {
      href: '/settings',
      label: 'Settings',
      icon: <IoSettingsOutline />,
    },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className='md:hidden flex items-center p-4 bg-slate-100 shadow-md fixed top-0 left-0 right-0 z-50'>
        <button
          onClick={toggleSidebar}
          className='text-2xl text-slate-800 focus:outline-none'
        >
          {isOpen ? <IoClose /> : <IoMenu />}
        </button>
        <h1 className='ml-4 text-xl font-bold text-slate-800 flex items-center gap-2'>
          <BiBuildingHouse /> Housinity
        </h1>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-60 bg-slate-100 border-r border-slate-800 shadow-lg p-6 z-40 transition-transform duration-300 md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:block`}
      >
        <Link
          href='/'
          className='hidden md:flex justify-center items-center gap-3 text-2xl font-bold mb-8 text-slate-800 border-b pb-4'
        >
          <BiBuildingHouse />
          Housinity
        </Link>

        <nav className='flex flex-col gap-2 mt-8 md:mt-0'>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className='flex items-center gap-3 w-full px-4 py-2 font-medium text-slate-900 hover:bg-orange-500 hover:text-white rounded transition-all duration-200'
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default SideBar;
