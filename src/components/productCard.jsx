import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import { ShoppingCart } from "lucide-react"
import {useCartContext} from "../context/cartContext"
const ProductCard = ({prod}) => {

  const {addToCart} = useCartContext();

  return (
    <div className='h-full flex flex-col rounded-2xl overflow-hidden transition duration-300 bg-gray-900 border border-gray-800 group transform hover:scale-[1.03]'>

        <Link className='relative cursor-pointer overflow-hidden' to={`/product/${prod.id}`} >
        <img 
        className='w-full h-56 object-cover aspect-square group-hover:opacity-90 transition duration-500'
        src={prod.image} alt="Product" />

        <div className='absolute bg-orange-500 bottom-0 rounded-tr-2xl left-0 px-5 py-2'>
          Rs{prod.price.toFixed(2)}</div>
        </Link>
        <div className='flex p-5 flex-col grow'>
          <Link to={`/product/${prod.id}`}>

            <h1 className='mb-2 hover:text-orange-400 transition duration-300 cursor-pointer text-2xl line-clamp-1'>{prod.name}</h1>
        
        </Link>
        <p className=' text-sm mb-2 line-clamp-3 text-gray-500'>{prod.description}</p>
        <span className='px-3 w-fit py-1 bg-gray-800 border border-gray-700 rounded-full font-semibold mb-4 flex items-center text-gray-500'>{prod.category}</span>
          
          <button
          onClick={()=>{
            addToCart(prod);
          }}
          className='
          hover:ring-4 hover:bg-orange-700 hover:ring-orange-600/50
          tracking-wider
          flex gap-2 items-center justify-center
          bg-orange-500 rounded-full cursor-pointer py-1'>
            <ShoppingCart  className='size-4'/>
            <span>Add to Cart</span>

            </button>
        </div>
    </div>
  )
}

export default ProductCard