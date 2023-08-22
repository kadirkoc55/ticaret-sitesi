import React, { useState,createContext } from 'react'
//bağlam oluşturmak için createContext(bağlam oluştur) ve state kullanılarak içe aktardık
import { PRODUCTS } from '../products';

export const ShopContext = createContext(null)
//başlangıç değeri null(belirsiz) olan bağlam oluşturur ve "shopContex" bağlamına atar.ancak bu değer sonradan "shopContextProvider" bileşeni içinde güncellenecek

const getDefaultCart = ()=>{  //başlangıç boş sepet 
    let cart={}; //boş nesneye "cart" değişkeni atanır
    for (let i = 1; i<PRODUCTS.length +1; i++){ 
        //döngü,başlangıç sepet durumunu içerir
        cart[i] = 0; //id = i başlangıç değeri = 0
        
    }
    return cart;
}
//ürün sepete eklendiğinde veya çıkarıldığında,sepet durumu başlangıç değerine göre güncellenir.

export const ShopContextProvider = (props) => {
    const[cartItems,setCartItems] =useState(getDefaultCart()); // "useState" aracılığıyla "getDefaulCart" bağlamından cartItems() güncellenir.yani başlangıç değerine göre tutulan ürün miktarı güncellenir

    const getTotalCartAmount = () => {
        let totalAmount = 0;//toplam tutar başlangıç = 0 
        for(const item in cartItems){ 
            //cartItems içinde her ürün için döner
            if(cartItems[item]>0){ 
                //ürünün sepet miktarı > 0 ise,
                let itemInfo = PRODUCTS.find((product)=>product.id===Number(item))
                //PRODUCTS dizisindeki ürünleri dolaşarak, şu anki öğenin ID'sine uygun olan ürünü bulur,
                totalAmount += cartItems[item] *itemInfo.price
                //toplam tutar hesaplanır
            }
        }
        return totalAmount
    }
   
    
    const addToCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]: prev[itemId]+1}))
    }  //ürün eklemeye yarar.ıtemId sepete eklenmek istenen ürünün ıd si prev mevcut sepet durumu,diğerleri sepet durumunu güncellemek
    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]: prev[itemId]-1}))
    }

    const updateCartItemCount =(newAmount,itemId)=>{
        setCartItems((prev) =>({...prev,[itemId]:newAmount}))
    }

    const contextValue  ={cartItems,addToCart,removeFromCart,updateCartItemCount,getTotalCartAmount,}

    console.log(cartItems)
  return(
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}
