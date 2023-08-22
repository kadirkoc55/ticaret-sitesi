import React, { useContext } from 'react'
import {ShopContext} from '../../context/shop-context'

export const CartItem = (props) => {
    //props:dışardan verileri alır ve görüntüler
    const {id,productName,price,productImage} = props.data
    //"props" aracılığıyla "data" propu kullanılarak ürün bilgileri çıkarılır."data", "product" bileşenindeki "PRODUCTS" dizisindeki ürünleri temsil eder 
    const {cartItems,addToCart,removeFromCart,updateCartItemCount} = useContext(ShopContext)
    //useContext hook'u aracılığıyla ShopContext bağlamından cartItems(ürünlerin sepet miktarını tutar),addToCart(ürünlerin sepete eklenmesi),removeFromCart(ürünlerin sepetten silinmesi),updateCartItemCount(ürünlerin sepetteki miktarını günceller) alınır.
    
  return (
    <div className='cartItem flex items-center shadow-lg bg-white rounded-xl  '>
        <img src={productImage} className='w-24 h-36 mx-10'/>
        <div className='description my-5 text-lg uppercase'>
            <p>
                <b>{productName}</b>
            </p>
            <p>
                ${price}
            </p>
            <div className='countHandler flex justify-center items-center text-center my-2 '>
                <button className='border  flex justify-center items-center text-center w-4 h-6 bg-slate-100' onClick={()=>removeFromCart(id)}>-</button>
                <input className='border flex justify-center items-center text-center w-10 h-6 text-sm font-medium ' value={cartItems[id]} onChange={(e)=>updateCartItemCount(Number(e.target.value),id)}/>
                <button className='border flex justify-center items-center text-center w-4 h-6 bg-slate-100' onClick={()=>addToCart(id)}>+</button>
            </div>
        </div>
    </div>
  )
}
