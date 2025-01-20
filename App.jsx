import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Shop from './Pages/Shop'
import Shopcategory from './Pages/Shopcategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Loginsignup from './Pages/Loginsignup'



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<Shopcategory category="men"/>}/>
        <Route path='/mens' element={<Shopcategory  category="women"/>}/>
        <Route path='/mens' element={<Shopcategory  category="kid"/>}/>
        <Route path="/Product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Loginsignup/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
