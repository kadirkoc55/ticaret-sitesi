import React from 'react'
import { Link } from 'react-router-dom'
import {ShoppingCartOutlined} from '@ant-design/icons'

export const Navbar = () => {
  return (
    <div className='navbar bg-black text-white w-full h-16 text-xl flex justify-end items-center  relative '>
        <div className='links absolute right-5 flex items-center gap-x-2'>
            <Link to="/">Shop</Link>
            <Link to="/cart" className='mb-1'>
            <ShoppingCartOutlined />
            </Link>
        </div>
    </div>
  )
}
