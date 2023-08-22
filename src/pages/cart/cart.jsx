import React,{useContext} from 'react'
import { PRODUCTS } from '../../products'
import {ShopContext} from '../../context/shop-context'
import { CartItem } from './cart-item'
import {useNavigate} from 'react-router-dom'
export const Cart = () => {
  const {cartItems,getTotalCartAmount} = useContext(ShopContext)
  //"useContext" hook'u aracılığıyla ShopContext bağlamından "cartItems(ürünlerin sepetteki miktarını tutar)" ve "getTotalCartAmount(sepet toplam miktarı)" alınır
  const totalAmount = getTotalCartAmount()
  //sepetin toplam miktarı hesaplanır "totalAmount" adlı değişkene atanır

  const navigate = useNavigate()
  //sayfalar arası gezinmeyi sağlar.navigate adlı değişkene atanır


  return (
    <div className='cart flex flex-col justify-center items-center '>
      <div>
        <h1 className='text-center my-5 text-6xl font-bold capitalize'>Your Cart Items</h1>
      </div>
      <div className='cartItems flex flex-col gap-3 '>
        {PRODUCTS.map((product)=>{
          if(cartItems[product.id]!==0){
            
            return <CartItem data={product} />
          }
        })}
        {/* ürün listesi için "PRODUCTS" kullanılarak,her ürün için "product" bileşeni çağrılır 
        
        eğer belirli bir ürünün sepetteki miktarı 0'a eşit değilse(yani sepete eklenmişse); "cartItem" bileşenine "product" verisi aktarılır yani her bir ürünün detaylarının "CartItem" bileşenine geçirilmesini sağlar.
          

        */}
      </div>
      <div className='checkout my-3'>
        <p className='text-md font-medium'>Subtotal: ${totalAmount}</p>
          <div className='flex gap-2 my-2'>
            <button onClick={()=>navigate('/')} className='bg-slate-50 border border-2 border-black rounded-full px-2  font-medium hover:bg-black hover:text-slate-50' >Continue Shopping</button>
            <button className='bg-slate-50 border border-2 border-black rounded-full px-2  font-medium hover:bg-black hover:text-slate-50'>Checkout</button>
          </div>
      </div>
    </div>
  )
}
