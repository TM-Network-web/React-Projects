import React from 'react'
import { CheckCircle } from "lucide-react"
import {Link} from "react-router-dom"
const OrderConfirmation = ({ deliveryDetails }) => {

  return (
    <div className='w-full py-20 px4 flex items-center justify-center container mx-auto'>

      <div className='flex flex-col gap-4 items-center max-w-137.5 p-8 bg-gray-700 rounded-xl'>
        <CheckCircle size={50} className=' text-green-400' />
        <h1 className='font-bold tracking-tight text-lg sm:text-2xl md:text-4xl text-center'>Order Confirmed!</h1>
        <small className='text-center'>Your transaction is complete. A confirmation email has been sent to your account.</small>
        <div className='border font-mono capitalize px-6 py-4 border-green-500 rounded-2xl bg-green-700/30 '>
          <p className='font-bold'>{deliveryDetails?.name}</p>
          <div className='flex gap-2'>
            <span>{deliveryDetails?.address}</span>
            <span>{deliveryDetails?.city}</span>
            <span>{deliveryDetails?.zip}</span>
          </div>
        </div>

      <Link
      to={"/"}>
      <button  className='px-4 tracking-wider hover:ring-2 hover:ring-orange-400/40 transition duration-200 shadow-2xl cursor-pointer font-semibold py-2 bg-orange-500 rounded-full'>Continue Shopping</button>
      </Link>

      </div>


    </div>
  )
}

export default OrderConfirmation