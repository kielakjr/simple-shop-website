import React from 'react'
import products from '../data/products.js'
import Product from '../components/Product.jsx'

const HomePage = () => {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>

  )
}

export default HomePage
