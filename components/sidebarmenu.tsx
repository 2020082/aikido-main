/** @format */

import React from "react";
import Link from "next/link";

const Sidebar = ({ isOpen = false }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-screen w-64 bg-blue-700 z-50 transition-transform duration-500 ease-in-out ${
        isOpen ? "-translate-x-[-96px]" : "translate-x-[100%]"
      }`}>
      <div>
        <p className='text-white text-lg font-semibold mt-4 ml-4'>
          Sidebar Menu
        </p>
        <ul className='mt-2 hover:text-black'>
          <li className='text-white ml-4 mt-2 cursor-pointer hover:scale-105'>
            <Link href='/about'>About MIU</Link>
          </li>
          <li className='text-white ml-4 mt-2 cursor-pointer hover:scale-105'>
            <Link href='/programs/academic-programs'>Academics</Link>
          </li>
          <li className='text-white ml-4 mt-2 cursor-pointer hover:scale-105'>
            <Link href='/apply'>Admission</Link>
          </li>
          <li className='text-white ml-4 mt-2 cursor-pointer hover:scale-105'>
            <Link href='/LifeMIU/Life'>MIU Life</Link>
          </li>
          <li className='text-white ml-4 mt-2 cursor-pointer hover:scale-105'>
            <Link href='/tips'>Advices</Link>
          </li>
          <li className='text-white ml-4 mt-2 cursor-pointer hover:scale-105'>
            <Link href='/programs/LEI'>LEI</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
