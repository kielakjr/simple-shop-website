import React from 'react'

const MainNavigation = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-blue-600 text-white">
      <h1>Simple Shop</h1>
      <input type="search" placeholder="Search products..." />
      <p>Cart: 0 items</p>
    </header>
  )
}

export default MainNavigation
