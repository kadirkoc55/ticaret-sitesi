import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {ShoppingCartOutlined} from '@ant-design/icons'
import {PhoneOutlined} from '@ant-design/icons'

export const Navbar = () => {
  const location = useLocation();

  // Sadece shop ve cart sayfalarında görünmesi sağlanıyor
  if (location.pathname !== "/shop" && location.pathname !== "/cart" && location.pathname !== "/Contact") {
    return null;
  }
  return (
    <div className='navbar sm:w-[%100] md:w-[100%] lg:w-[%100] xl:w-full bg-teal-950 text-white w-full h-16  flex justify-end items-center text-center px-64   relative '>
      
        <div className='flex justify-center items-center gap-x-2 text-md'>
        <a href='TEL:+905537528610' className='flex justify-center items-center w-8 h-8 bg-red-700 text-neutral-100 hover:bg-sky-700 rounded-full ' ><PhoneOutlined/> </a><a href='TEL:+905537528610' className='text-neutral-100'>TEL:+905537528610</a>
        </div>
      
        <div className='links absolute right-10 mb-1 flex items-center gap-x-2 text-2xl'>
            <Link to="/shop" className='hover:text-red-400 '>Shop</Link>
            <Link to="/cart" className='mb-1 hover:text-red-400'>
            <ShoppingCartOutlined />
            </Link>
            <Link to="/Contact" className='hover:text-red-400 '>Contact</Link>
        </div>
    </div>
  )
}
