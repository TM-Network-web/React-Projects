import React, { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom"
import productData from '../data/data'
import { ChevronLeft,Tag, Zap,ShoppingCart } from "lucide-react"
import {useCartContext} from "../context/cartContext"
const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    setProduct(productData.find(prod => prod.id == id))
  }, [id])

  const {addToCart} = useCartContext();

  return (
    <>
      <div className='container flex flex-col gap-3 p-6 my-4 rounded-2xl mx-auto min-h-screen bg-gray-700 '>
        <Link to={'/'} className='py-4 '>
          <button className='font-semibold group flex items-center gap-1  text-gray-400'>
            <ChevronLeft className='group-hover:text-orange-400' size={18} />
            <span className='text-[16px] group-hover:text-orange-400 cursor-pointer transition duration-200 pb-0.5'>Back to All Products</span>
          </button>
        </Link>

        <div className='flex flex-col justify-center md:flex-row gap-20'>
          <img 
          className='max-h-100 max-w-100 rounded-2xl  border border-gray-700'
          src={product.image} alt={product.description} />
          <div>
            <div className='border-b space-y-3 border-gray-600'>
            <h2 className='font-extrabold tracking-wider text-2xl'>{product.name}</h2>
            <p>Rs{product.price}</p>
            <p className='flex gap-2 items-center font-semibold'><Tag  className='text-orange-500 size-4'/> Product Overview </p>
            </div>
            <p className='text-sm my-4 text-gray-400'>{product.description}</p>

            <ul className=" mb-4 space-y-3 text-gray-300 p-4 bg-gray-800 rounded-xl border border-gray-700">
              <li className="flex items-center space-x-3 text-sm sm:text-lg">
                <Zap className="w-5 h-5 text-orange-500" />
                <span>High-Quality, Professional Grade Materials</span>
              </li>
              <li className="flex items-center space-x-3 text-sm sm:text-lg">
                <Zap className="w-5 h-5 text-orange-500" />
                <span>Comprehensive 1-Year Manufacturer Warranty</span>
              </li>
              <li className="flex items-center space-x-3 text-sm sm:text-lg">
                <Zap className="w-5 h-5 text-orange-500" />
                <span>Immediate Shipping for In-Stock Items</span>
              </li>
            </ul>

           <div className='flex flex-col gap-2'>
            <button onClick={()=>addToCart(product)}
            className='hover:ring-4 font-semibold hover:bg-orange-600 transition duration-300 hover:ring-orange-700/50 cursor-pointer  flex items-center justify-center gap-2 bg-orange-500 rounded-full    py-2'> <ShoppingCart /> Add to Cart</button>
            
            
            <Link to={"/"}>            
            <button         
            className='w-full hover:bg-orange-600/20 cursor-pointer transition duration-300 border-2 border-orange-400 font-semibold rounded-full py-2 '
            >Keep Shopping</button>
            </Link>

           </div>
            
          </div>
        </div>

      </div>
    </>
  )
}

export default ProductDetail