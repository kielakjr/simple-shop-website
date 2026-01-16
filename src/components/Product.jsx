import React from 'react'
import Tile from './ui/Tile'

const Product = ({ product }) => {

  const { name, description, price, image } = product

  return (
    <Tile className="max-w-sm mx-auto self-start">
      <h2 className="font-semibold text-xl mb-2">{name}</h2>
      <img src={image} alt={name} className="w-full h-48 object-cover mb-4 rounded-md" />
      <p className="text-white/80 mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <span className="font-bold text-lg">${price}</span>
        <button className="
          px-4 py-2
          bg-white/20 text-white
          rounded-md
          hover:bg-white/30
          transition-colors duration-200
        ">
          Add to Cart
        </button>
      </div>
    </Tile>
  )
}

export default Product
