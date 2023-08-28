
import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import Signup from './pages/signup';
import Login from './pages/login';
import {Cart} from './pages/cart/cart'
import {Shop} from './pages/shop/shop'
import {Contact} from './pages/iletisim/contact';
import { ShopContextProvider } from './context/shop-context'

import { Navbar } from './components/navbar';



function App() {
  return (
    <div>
      <ShopContextProvider>  {/*bileşenler arası veri paylaşımı sağlar */}
      <Router>
        <Navbar/>
        
        <Routes>
            <Route path='/' element={<Signup/>} />
            <Route path='/Login' element={<Login/>} />
            <Route path='/shop' element={<Shop />}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/contact' element={<Contact/>}/>
            
        </Routes>
        
        
      </Router>
      
      </ShopContextProvider>
    </div>
  )
}

export default App
