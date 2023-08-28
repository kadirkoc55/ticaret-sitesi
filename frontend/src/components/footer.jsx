import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {InstagramOutlined, LinkedinOutlined} from '@ant-design/icons'

export const Footer = () => {
    const suankiYil = new Date().getFullYear();
  const location = useLocation();

  // Sadece shop ve cart sayfalarında görünmesi sağlanıyor
  if (location.pathname !== "/shop" && location.pathname !== "/cart" && location.pathname !== "/Contact") {
    return null;
  }
  return (
    <div className='footer flex-col flex justify-center items-center gap-y-10 sm:w-[%100] md:w-[100%] lg:w-[%100] xl:w-full bg-teal-950 text-white w-full h-60 text-xl  '>
        
            <div className='links relative top-8  flex justify-center items-center gap-x-4'>
            <Link to="/shop" className='hover:text-red-400'>Shop</Link>
            <Link to="/cart" className='hover:text-red-400'> Cart</Link>
            <Link to="/contact" className='hover:text-red-400'> Cart</Link>
            </div>

            <div className='icons flex gap-x-4  relative top-4'>
                 <a href='https://www.linkedin.com/in/akadir-koç-a9b11327b' target="_blank" rel="noopener noreferrer" className='bg-slate-600 hover:bg-red-700 w-9 h-9 text-2xl text-slate-200 rounded-full flex justify-center items-center '>
                  
                 <LinkedinOutlined />
                </a>
                 <a href='https://www.instagram.com/in/akadirkoc.55' target="_blank" rel="noopener noreferrer"className='bg-slate-600 hover:bg-red-700 w-9 h-9 text-2xl text-slate-200 rounded-full flex justify-center items-center '>
                <InstagramOutlined />
                </a>
            </div>
            <div className='text-center text-base  '>
            <h1>© {suankiYil} Tüm hakları saklıdır.</h1>
            </div>
        
    </div>
  )
}
