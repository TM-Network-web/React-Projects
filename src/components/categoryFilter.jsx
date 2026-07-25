import React from 'react'
import productData from "../data/data"
import {Tag} from 'lucide-react';
const categories = [
  "All",
  ...new Set(productData.map(p=>p.category))
]
const CategoryFilter = ({selectedCategory,setSelectedCategory}) => {


  return (
    <div className=' container mx-auto flex items-center gap-2 flex-wrap border-b border-gray-800 pb-6'>
      <Tag  className='h-5 cursor-pointer duration-300 active:-translate-y-1 w-5 hidden sm:block text-orange-400'/>
      {
        categories.map(category=>(
          <button
          onClick={()=>setSelectedCategory(category)}
          className={`
            cursor-pointer hover:bg-gray-800 
            transition duration-100 
            ${selectedCategory === category ?"bg-orange-500":"border-gray-800"}
            px-4 py-1.5 border border-gray-700 rounded-4xl`}
           key={category}>{category}</button>
        ))
      }
    </div>
  )
}

export default CategoryFilter