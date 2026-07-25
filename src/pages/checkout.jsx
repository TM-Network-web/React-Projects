import React, { useState } from 'react'
import { MapPin, Zap, Package } from "lucide-react"
import { Link } from "react-router-dom"
import { useCartContext } from "../context/cartContext"
import OrderConfirmation from "../pages/orderConfirmation"

const Checkout = () => {
  const [deliveryDetails, setDeliveryDetail] = useState({
    name: "",
    address: "",
    city: "",
    zip: ""
  });

  const { clearCart,cart, cartTotal } = useCartContext();

  const handleChange = (e)=>{
    const {name,value} = e.target;
    setDeliveryDetail(prev=>({...prev,[name]:value}))
  }

  const [isConfirmed, setIsConfirmed] = useState(false);
  const handleSubmit = (e)=>{
    e.preventDefault();
    setIsConfirmed(true);
  }
  if(isConfirmed) return <OrderConfirmation deliveryDetails={deliveryDetails} />


  return (
    <div className='container mx-auto p-6'>
      <h1 className='text-4xl font-bold tracking-tight mb-10'>Finalize Order</h1>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
        <div className='lg:col-span-2 bg-gray-800 rounded-2xl p-8'>
          <h1 className='flex items-center gap-2 border-b text-xl text-orange-400 font-bold py-4 border-b-gray-700'><MapPin /> Shipping Detail</h1>
          <form onSubmit={handleSubmit}>
            {
              Object.keys(deliveryDetails).map(key => (
                <div
                  className='my-4'
                  key={key}>
                  <label className='text-sm font-semibold capitalize block mb-1' htmlFor={key}>{key === "zip" ? "pin Code" : key}</label>
                  <input
                  onChange={handleChange}
                    className='px-5 py-3 rounded-xl
                   border border-gray-600 w-full'
                    type={key === "zip" ? "number" : "text"}
                    placeholder={`Enter your ${key}...`}
                    name={key}
                    id={key}
                    value={deliveryDetails[key]}
                  />
                </div>
              ))
            }

            

            
              <button      
                className='bg-orange-500 py-2 w-full rounded-full font-semibold hover:ring-3 hover:ring-orange-600/30 cursor-pointer transition duration-200'
              >Pay and confirm order (Rs{cartTotal})</button>

          </form>
        </div>

        <div
          className='max-h-92.5 flex-1 flex flex-col gap-4 p-6 rounded-xl border border-l-2 border-l-orange-400 border-orange-400/40' >

          <h1 className='pb-2 flex items-center gap-2  border-b-2 border-b-gray-800'>
            <Package className='text-orange-400' /> Summary</h1>

          <div className='border-b space-y-3 border-b-gray-800 pb-2'>
          {
            cart.map(item => (
              <div className='flex justify-between'>
                <span className='text-gray-400 line-clamp-1'>{ item.name}</span>
                <span className='text-orange-300 font-semibold'>Rs {item.price} </span>
              </div>
            ))
          }
          </div>

          <div className='flex justify-between'>
                <span className='text-gray-400'>Subtotal:</span>
                <span className='text-orange-300 font-semibold'>Rs {cartTotal.toFixed(2)} </span>
              </div>

          <div className='flex justify-between pb-2 border-b-2 border-b-gray-800'>
            <span className='text-gray-400'>Shipping (Express):</span>
            <span className='font-semibold text-green-500'> Free</span>
          </div>

          <div className='flex my-4 justify-between'>
            <span className=' font-extrabold'>Total Due: </span>
            <span className='text-orange-300 font-semibold'>Rs {cartTotal.toFixed(2)} </span>
          </div>

          

        </div>
      </div>

    </div>
  )
}

export default Checkout