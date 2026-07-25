import React from 'react'
import { useCartContext } from "../context/cartContext"

const CartItem = ({ item }) => {
  const { addToCart, removeFromCart } = useCartContext();
  return (
    <div className='border flex gap-2 flex-col md:flex-row md:justify-between border-gray-600 rounded-xl p-4'>

      <div className='flex items-center gap-2'>
        <img className='w-20 rounded-xl' src={item.image} alt={item.name} />
        <p className='flex flex-col'>
          <span className='font-semibold '>{item.name} </span>
          <span className='text-orange-400 font-semibold'>Rs{item.price.toFixed(2)}</span>
        </p>
      </div>

      <div className='flex justify-between sm:items-center gap-4'>
        <div className='rounded-full overflow-hidden border border-gray-700'>

          <span
            onClick={() => { removeFromCart(item.id, false) }}
            className='transition duration-300 hover:bg-gray-700 
          cursor-pointer px-2 py-1 bg-gray-800 '>
            -
          </span>

          <span className='p-2 text-xs'>{item.qty}</span>
          <span onClick={() => { addToCart(item) }} className='transition duration-300 hover:bg-gray-700 cursor-pointer px-2 py-1 bg-gray-800 '>+</span>
        </div>

        <p
          className='text-orange-300 
               hidden sm:block       font-semibold'>
          Rs{item.price.toFixed(2)}
        </p>

        <button
          onClick={() => removeFromCart(item.id, true)}
          className='px-3  pb-1 bg-red-400/40 hover:bg-red-500/20 
        transition duration-200 cursor-pointer transform active:scale-[0.9] 
        rounded-full'>
          x
        </button>

      </div>

    </div>
  )
}

export default CartItem