import React from 'react'
import { Search } from 'lucide-react';

const SearchFilter = ({searchTerm, setsearch}) => {
  return (
    <div className='container mx-auto p-3 bg-gray-800 rounded-xl'>

      <div className='flex gap-4 focus-within:ring-2 focus-within:ring-orange-500 p-2 rounded'>
          <Search className='text-gray-600' />
          <input 
          className='
          w-full
          border-none
          outline-none
          text-gray-500
          text-[12px]
          sm:text-[15px]
          '
          value={searchTerm}
          onChange={(e)=>setsearch(e.target.value)}
          type="text" 
          placeholder='Search high-performance electronics by name or feature' />
      </div>

    </div>
  )
}

export default SearchFilter