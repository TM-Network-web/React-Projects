import React from 'react';
import { Link } from "react-router-dom";
import { ChevronLeft, Zap } from "lucide-react";
import { useCartContext } from "../context/cartContext"
import CartItem from "../components/cartItem";

const Cart = () => {

  const { cart, cartCount, cartTotal } = useCartContext();
  return (
    <>
      <div className='container mx-auto p-6 flex flex-col gap-2'>
        <Link to={'/'} className='py-4'>
          <button className='font-semibold group flex items-center gap-1  text-gray-400'>
            <ChevronLeft className='group-hover:text-orange-400' size={18} />
            <span className='text-[16px] group-hover:text-orange-400 cursor-pointer transition duration-200 pb-0.5'>Back to Store</span>
          </button>
        </Link>

        <h1 className='font-extrabold text-2xl'>Shopping Cart ({cartCount})</h1>

        <div className='flex flex-col md:flex-row gap-8'>

          <div className='flex-3 flex flex-col gap-2 p-4'>
            {
              cart.map(item => (
                <CartItem key={item.id} item={item} />
              ))
            }
          </div>

          <div
            className='max-h-92.5 flex-1 flex flex-col gap-4 p-6 rounded-xl border border-l-2 border-l-orange-400 border-orange-400/40' >

            <h1 className='pb-2 border-b-2 border-b-gray-800'> Order Total</h1>

            <div className='flex justify-between'>
              <span className='text-gray-400'>Subtotal:</span>
              <span className='font-semibold'>Rs {cartTotal.toFixed(2)}</span>
            </div>

            <div className='flex justify-between pb-2 border-b-2 border-b-gray-800'>
              <span className='text-gray-400'>Shipping (Express):</span>
              <span className='font-semibold text-green-500'> Free</span>
            </div>

            <div className='flex my-4 justify-between'>
              <span className=' font-extrabold'>Estimated Total: </span>
              <span className='text-orange-300 font-semibold'>Rs {cartTotal.toFixed(2)}</span>
            </div>

            <Link to={"/checkout"}>
              <button className='w-full flex items-center gap-1 justify-center font-bold rounded-full py-2 bg-orange-600 hover:ring-2 hover:ring-orange-600/40 cursor-pointer text-sm'> <Zap size={18} /> PROCEED SECURELY </button>
            </Link>
            <p className='text-xs flex text-gray-400 justify-center'>All transactions are encrypted and secure</p>

          </div>
        </div>
      </div>

    </>
  )
}

export default Cart