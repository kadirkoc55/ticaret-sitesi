import React from 'react'
import {PRODUCTS} from '../../products'
import {Product} from './product';

export const Shop = () => {
  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h1 className='text-center my-5 text-8xl font-bold uppercase'>koç shopper</h1>
      </div>
      <div className='products text-center flex gap-20'>
        {PRODUCTS.map((product)=>(
          <Product data={product}/>
        ))}  
        {/* ürün listesi için "PRODUCTS" kullanılarak,her ürün için "product" bileşeni çağrılır*/}
      </div>
    </div>
  )
}
