import React from 'react';
import {Home, ShoppingCart} from "lucide-react";
import {Link} from "react-router-dom"
import {useCartContext} from "../context/cartContext"
const Navbar = () => {
 const {cartCount} = useCartContext();
  return (
    <header className='sticky z-10 bg-gray-900 top-0 border-b-2 border-orange-400/30'>
    <div 
    className='
    container
     mx-auto
    flex justify-between 
    items-center 
    p-4
    '>

<Link to={"/"}>
    <div className='flex items-center gap-1 font-extrabold space-x-2 '>
        <Home className='text-amber-500' />
        <h1 className='text-2xl tracking-widest'>TAYYAB<span className='text-orange-400'>STORE</span></h1>
    </div>
    </Link>

    <nav className='flex relative items-center border border-orange-500/90 bg-orange-500/10 hover:bg-orange-500/20 p-2 rounded'>
         <Link
         className=' cursor-pointer'
          to={"/cart"}>   <ShoppingCart className='size-4 text-orange-500' /> 
         {cartCount>0 && ( <span className=' bg-red-500 text-white text-xs px-2 py-1 rounded-full  absolute 
          right-[-35%] top-[-30%]
          '>{cartCount}</span>)}
          </Link>
    </nav>

    </div>
    </header>
  )
}

export default Navbar