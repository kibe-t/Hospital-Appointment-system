import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu, setmenu]=useState("shop")
  return (
    <div className='navbar'>
        <div className='navlogo'>
            <img src={logo} alt="" />
            <p>SHOPPERS</p>
        </div>
        <ul className='navmenu'>
            <li onClick={()=>{setmenu('shop')}}><Link style={{textDecoration:'none'}} to={'/'}>shop</Link>{menu==='shop'?<hr />:<></>} </li>
            <li onClick={()=>{setmenu('men')}} ><Link  style={{textDecoration:'none'}} to={'/mens'}>men</Link> {menu==='men'?<hr />:<></>} </li>
            <li onClick={()=>{setmenu('women')}}><Link  style={{textDecoration:'none'}} to={'/womens'}>women</Link>{menu==='women'?<hr />:<></>}</li>
            <li onClick={()=>{setmenu('kids')}}><Link  style={{textDecoration:'none'}} to={'/kids'}>kids</Link> {menu==='kids'?<hr />:<></>}</li>
        </ul>
        <div className='navlogincart'>
            <Link to={'/login'}><button>login</button></Link>
            <Link to={'/cart'}><img src={cart_icon} alt="" /></Link>
            <div className='navcartcount'>0</div>

        </div>

    </div>
  )
}

export default Navbar