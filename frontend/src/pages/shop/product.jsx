import React, { useContext } from 'react'
import {ShopContext} from '../../context/shop-context'
//shopContext: uygulama düzeyi veri paylaşımı sağlar
export const Product = (props) => {
  //props:dışardan verileri alır ve görüntüler
  const {id,productName,price,productImage} = props.data;
  //"props" aracılığıyla "data" propu kullanılarak ürün bilgileri çıkarılır."data", "shop" bileşenindeki "PRODUCTS" dizisindeki ürünleri temsil eder 
  const {addToCart,cartItems} = useContext(ShopContext)
  //useContext hook'u aracılığıyla ShopContext bağlamından addToCart(ürünü sepete ekler) ve cartItems(ürünlerin sepetteki miktarını tutar) alınır
  

  const cartItemAmount = cartItems[id]
  //id'ye karşılık gelen ürünün sepet miktarını cartItemAmount değişkenine atar
  return (
    <div className='product'>
      
      <img src={productImage} className='w-56 h-96' />
      <div className='description my-5 text-lg uppercase'>
        <p>
          <b>{productName}</b>
        </p>
        <p>
          <b>${price}</b>
        </p>
      </div>
      <button className=' bg-slate-50 border border-2 border-black capitalize font-medium rounded-full px-2 hover:bg-black transition-all hover:text-white' onClick={()=> addToCart(id)}>add to cart{cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
      {/* cartItemAmount:ürün sepete eklendiyse,sepet miktarını görüntüle */}
      
    </div>

  )
}
