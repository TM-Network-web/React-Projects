import React from 'react'
import SearchFilter from '../components/searchFilter'
import CategoryFilter from '../components/categoryFilter'
import { useCartContext } from '../context/cartContext'
import ProductCard from '../components/productCard'
import { useState } from 'react'

const ProductList = () => {

 const {productData} =  useCartContext();

 const [searchTerm, setsearch] = useState("");
 const [selectedCategory, setSelectedCategory] = useState("All");

 const filterProd = productData.filter(item=>{
     const matchSearchTerm = 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchCategory = selectedCategory === "All" || selectedCategory === item.category

      return matchCategory && matchSearchTerm;

 })

  
  return (
    <div className='flex flex-col gap-4 p-4'>
      <SearchFilter searchTerm={searchTerm} setsearch={setsearch}  />
      <CategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

      <h2 className=' container font-bold mx-auto'>Featured Gear({filterProd.length} items)</h2>
      <div className='container mx-auto p-4 grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {
        filterProd.map((prod,index)=>(
         <ProductCard key={index} prod={prod} />
        ))
      }
      </div>
    </div>
  )
}

export default ProductList