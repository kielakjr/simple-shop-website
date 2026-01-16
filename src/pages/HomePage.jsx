import React from 'react'
import products from '../data/products.js'
import Product from '../components/Product.jsx'

const HomePage = () => {

  return (
    <div className="flex flex-wrap gap-6 p-6">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}

export default HomePage
