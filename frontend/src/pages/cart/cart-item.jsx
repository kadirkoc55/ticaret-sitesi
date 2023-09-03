import React, { useContext } from 'react'
import {ShopContext} from '../../context/shop-context'
import axios from 'axios';

export const CartItem = (props) => {
    //props:dışardan verileri alır ve görüntüler
    const {id,productName,price,productImage} = props.data
    //"props" aracılığıyla "data" propu kullanılarak ürün bilgileri çıkarılır."data", "product" bileşenindeki "PRODUCTS" dizisindeki ürünleri temsil eder 
    const {cartItems,addToCart,removeFromCart,updateCartItemCount} = useContext(ShopContext)
    //useContext hook'u aracılığıyla ShopContext bağlamından cartItems(ürünlerin sepet miktarını tutar),addToCart(ürünlerin sepete eklenmesi),removeFromCart(ürünlerin sepetten silinmesi),updateCartItemCount(ürünlerin sepetteki miktarını günceller) alınır.


    const handleRemoveFromCart = () => {
        removeFromCart(id);
    
        // Ürünü veritabanından kaldırmak için DELETE isteği yapalım
        axios.delete(process.env.REACT_APP_SERVER_URL+`/Cart/${id}`)
          .then((response) => {
            console.log('Ürün başarıyla sepetten kaldırıldı:', response.data);
          })
          .catch(error => {
            console.error('Ürün sepetten kaldırılırken hata oluştu:', error);
          });
      };

      const handleAddToCart = () => {
        addToCart(id);
    
        // Yeni ürünü veritabanına eklemek için POST isteği yapalım
        const newCartItem = {
          id: id,
          productName: productName,
          price: price,
          productImage: productImage
        };
    
        axios.post(process.env.REACT_APP_SERVER_URL+'/CartItem', newCartItem)
          .then((response) => {
            console.log('Ürün başarıyla sepete eklendi:', response.data);
          })
          .catch(error => {
            console.error('Ürün sepete eklenirken hata oluştu:', error);
          });
      };

      const handleUpdateCartItemCount = (newAmount) => {
        updateCartItemCount(newAmount, id);
    
        // Ürünün miktarını güncellemek için PUT isteği yapalım
        const updatedCartItem = {
          id: id,
          productName: productName,
          price: price,
          productImage: productImage,
          quantity: newAmount
        };
    
        axios.put(process.env.REACT_APP_SERVER_URL+`/CartItem/${id}`, updatedCartItem)
          .then((response) => {
            console.log('Ürün miktarı başarıyla güncellendi:', response.data);
          })
          .catch(error => {
            console.error('Ürün miktarı güncellenirken hata oluştu:', error);
          });
      };
    
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
                <button className='border  flex justify-center items-center text-center w-4 h-6 bg-slate-100' onClick={handleRemoveFromCart}>-</button>
                <input className='border flex justify-center items-center text-center w-10 h-6 text-sm font-medium ' value={cartItems[id]} onChange={(e)=>handleUpdateCartItemCount(Number(e.target.value),id)}/>
                <button className='border flex justify-center items-center text-center w-4 h-6 bg-slate-100' onClick={handleAddToCart}>+</button>
            </div>
        </div>
    </div>
  )
}
